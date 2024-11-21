import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertTicketsSchema } from "@/drizzle/schema/tickets";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNewTickets } from "../hooks/use-new-tickets";
const formSchema = insertTicketsSchema.pick({
  name: true,
  gameday: true,
  email: true,
  phone: true,
  membershipNumber: true, 
  adress: true,
  others: true,
})

type FormValues = z.input<typeof formSchema>

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
}

export  const TicketForm =  ({id, defaultValues, onSubmit, onDelete, disabled}: Props) => {
  const { gameday, onClose } = useNewTickets(); // Hämta gameday från Zustand
  const {userId} =  useAuth();

  if(!userId) return null
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
      gameday: gameday,
      
    }
  })

const handleSubmit = (values: FormValues) => {
  onSubmit(values)
}
const handleDelete = () => {
  onDelete?.();
}
    return  (
      <Form {...form}>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
        <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                disabled={disabled}
                placeholder="Name"
                {...field}
              />
            </FormControl>
            <p className="text-red-500 text-sm mt-1">
                {form?.formState?.errors?.name?.message}
              </p>
          </FormItem>
        )}
      />

        <FormField
          name="gameday"
          control={form.control}
          render={({ field }) => 
            <FormItem>
              <FormLabel>Game Day</FormLabel>
              <FormControl>
                <Input disabled={true} placeholder="Game Day" {...field} />
              </FormControl>
              <p className="text-red-500 text-sm mt-1">
                  {form?.formState?.errors?.gameday?.message}
            </p>
            </FormItem>
          }
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <p className="text-red-500 text-sm mt-1">
                  {form?.formState?.errors?.email?.message}
                </p>
            </FormItem>
          )}
        />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={disabled}
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-red-500 text-sm mt-1">
                      {form?.formState?.errors?.phone?.message}
                    </p>
                </FormItem>
              )}
            />
            <FormField
              name="membershipNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membership Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={disabled}
                      placeholder="Membership Number"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-red-500 text-sm mt-1">
                      {form?.formState?.errors?.membershipNumber?.message}
                    </p>
                </FormItem>
              )}
            />
            <FormField
              name="adress"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={disabled}
                      placeholder="Address"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-red-500 text-sm mt-1">
                      {form?.formState?.errors?.adress?.message}
                    </p>
                </FormItem>
              )}
            />
             <FormField
              name="others"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>others</FormLabel>
                  <FormControl>
                    <Textarea
                     
                      placeholder="others"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <p className="text-red-500 text-sm mt-1">
                      {form?.formState?.errors?.others?.message}
                    </p>
                </FormItem>
              )}
            />
      <Button type="submit" className="w-full y-4" disabled={disabled}>
        Ansök om match
      </Button>
        </form>
      </Form>
    )
}