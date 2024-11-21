import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";


import { client } from "@/server/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";


type ResponseType = InferResponseType<typeof client.api.tickets.$post>
type RequestType = InferRequestType<typeof client.api.tickets.$post>["json"]



export const useCreateTickets = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.tickets.$post({ json })
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Du har nu skickat ansökan")
      queryClient.invalidateQueries({queryKey: ["tickets"]})
    },
    onError(error, variables, context) {
      toast.error("Du misslyckades med ansöka")
    },
  })
  return mutation
}