import { useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { usePost } from "./usePostByid";
import { usePosts } from "./usePosts";

const isAuth = true;

function App() {
  const { post } = usePost(1);
  const { data, isLoading } = usePosts(isAuth);

  const queryClient = useQueryClient();

  console.log(post);

  return (
    <>
      <h1>React Query</h1>

      <button
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ["posts"] });
        }}
      >
        Invalidate posts
      </button>

      {isLoading
        ? "Loding..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Not found"}
    </>
  );
}

export default App;
