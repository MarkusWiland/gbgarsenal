
import { client } from "@/server/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetTickets = () => {
  const query = useQuery({
    queryKey: ["use-get-tickets"],
    queryFn: async () => {
        const response = await client.api.tickets.$get();
      
      if(!response.ok) { 
        throw new Error("Failed to fetch posts");
        
      }
      const { data } = await response.json();
      return data
    }
  })
  return query;
}