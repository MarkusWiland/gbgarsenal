'use client';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNewTickets } from "@/features/tickets/hooks/use-new-tickets";
import { useAuth } from "@clerk/nextjs";

export default function GameTable() {
  const { onOpen, storeGameday } = useNewTickets();
  const { userId } = useAuth();

  const games = [
    {
      gameday: "15-01-2025",
      opponent: "Tottenham",
      category: "A",
      applicationPeriod: "13/11 - 14/11",
    },
    {
      gameday: "20-02-2025",
      opponent: "Chelsea",
      category: "B",
      applicationPeriod: "15/01 - 16/01",
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your upcoming games.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>MatchDag</TableHead>
          <TableHead>Motståndare</TableHead>
          <TableHead>Kategori</TableHead>
          <TableHead>Ansökningstid</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {games.map((game, index) => (
          <TableRow key={index + game.gameday}>
            <TableCell className="font-medium">{game.gameday}</TableCell>
            <TableCell>{game.opponent}</TableCell>
            <TableCell>{game.category}</TableCell>
            <TableCell>{game.applicationPeriod}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button
                onClick={() => {
                  onOpen();
                  storeGameday(game.gameday);
                }}
                disabled={!userId}
              >
                Ansök
              </Button>
            {userId && (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">Mer</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Alternativ</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => console.log(`Visa profil för ${game.opponent}`)}
                  >
                    Visa profil
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => console.log(`Visa detaljer för ${game.gameday}`)}
                  >
                    Visa detaljer
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => console.log(`Anmäl ${game.opponent}`)}
                  >
                    Anmäl
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
