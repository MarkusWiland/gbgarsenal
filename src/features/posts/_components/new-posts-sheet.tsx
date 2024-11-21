import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { insertPostsSchema } from "@/drizzle/schema/posts";
import { useNewPost } from "@/features/posts/hooks/use-new-posts";
import { z } from "zod";
import { PostForm } from "./post-form";
const formSchema = insertPostsSchema.pick({
  name: true,
})

type FormValues = z.input<typeof formSchema>

export const NewPostsSheet = () => {
  const {isOpen, onClose} = useNewPost();


  const onSubmit = (values: FormValues) => {
        console.log({values})
  }
  return (
  

    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ny Post</SheetTitle>
          <SheetDescription>Skapa ny post</SheetDescription>
        </SheetHeader>
        <PostForm onSubmit={onSubmit} disabled={false}/>
      </SheetContent>
    </Sheet>
  
  )
}