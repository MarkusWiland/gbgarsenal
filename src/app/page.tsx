
'use client'
import { useGetPosts } from "@/features/posts/api/use-get-posts";

export default   function Home() {
  const {data: posts, isPending, isError, error} =  useGetPosts();
  if(isPending) {
    return <span>Loading...</span>
  }
  if(isError) {
    return <span>Error: {error.message}</span>
  }
  return (
   <main className="max-w-screen-xl mx-auto"><h1>W3MW STACK</h1>
  
   {posts?.map((post:any) => (
    <div>
      {post.title}
    </div>
   ))}</main>
  );
}
 