
import { client } from "@/server/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
        const response = await client.api.posts.$get();
      
      if(!response.ok) { 
        throw new Error("Failed to fetch posts");
        
      }
      const { data } = await response.json();
      return data
    }
  })
  return query;
}