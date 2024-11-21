import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { insertTicketsSchema } from "@/drizzle/schema/tickets";
import { z } from "zod";
import { useCreateTickets } from "../api/use-create-tickets";
import { useNewTickets } from "../hooks/use-new-tickets";
import { TicketForm } from "./tickets-form";
const formSchema = insertTicketsSchema.pick({
  name: true,
  gameday: true,
  email: true,
  phone: true,
  membershipNumber: true, 
  adress: true,
  others:true,
})

type FormValues = z.input<typeof formSchema>

export const NewTicketsSheet =  ()  => {
  const {isOpen, onClose} = useNewTickets();

  const mutation = useCreateTickets();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
    
  }


  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ny Post</SheetTitle>
          <SheetDescription>Skapa ny post</SheetDescription>
        </SheetHeader>
        <TicketForm onSubmit={onSubmit} disabled={mutation.isPending}
        defaultValues={{
          name: "",
  gameday: "",
  email: "",
  phone: "",
  membershipNumber: "", 
  adress: "",
        }}/>
      </SheetContent>
    </Sheet>
  
  )
}