import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertPostsSchema } from "@/drizzle/schema/posts";
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = insertPostsSchema.pick({
  name: true,

})

type FormValues = z.input<typeof formSchema>

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
}

export const PostForm = ({id, defaultValues, onSubmit, onDelete, disabled}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  })

const handleSubmit = (values: FormValues) => {
  onSubmit(values)
}
const handleDelete = () => {
  onDelete?.();
}
    return  (
      <Form {...form}>
<form onSubmit={form.handleSubmit(handleSubmit)}>
      <FormField 
      name="name" 
      control={form.control} 
      render={({field}) => (
        <FormItem>
          <FormLabel>
            Name
          </FormLabel>
          <FormControl>
            <Input
            disabled={disabled}
  placeholder="name"
  {...field}            
            />
          </FormControl>
        </FormItem>
      )}/>

      <Button className="w-full" disabled={disabled}
  >
        {id ? "Spara ändringar" : "Skapa post"}
      </Button>
     {!!id &&  (<Button className="w-full"
  type="button"
      disabled={disabled}
      onClick={handleDelete}
      variant="outline">
        <Trash className="size-4 mr-2" />
        Ta bort post
      </Button>)}
</form>
      </Form>
    )
}