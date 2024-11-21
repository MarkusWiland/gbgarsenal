
import { client } from "@/server/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetPodcast = () => {
  const query = useQuery({
    queryKey: ["use-get-podcast"],
    queryFn: async () => {
        const response = await client.api.podcast.$get();
      
      if(!response.ok) { 
        throw new Error("Failed to fetch posts");
        
      }
      const { data } = await response.json();
      return data
    }
  })
  return query;
}