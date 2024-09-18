import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { usePost } from "./usePostByid";
import { usePosts } from "./usePosts";
import axios from "axios";
import { IPost } from "./post.types";

// const isAuth = true;

function App() {
  // const { post } = usePost(1);

  const queryClient = useQueryClient();

  // useMutation
  const { mutate, isPending } = useMutation({
    mutationKey: ["add post"],
    mutationFn: async (newPost: Omit<IPost, "id">) =>
      axios.post(import.meta.env.VITE_APP_API_URL, newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // const { data, isLoading } = usePosts(isAuth);

  // console.log(post);

  return (
    <>
      <h1>React Query</h1>

      <button
        onClick={() => {
          mutate({
            body: "New body",
            title: "New title",
            userId: 1,
          });
        }}
        disabled={isPending}
      >
        {/* Invalidate posts */}
        {isPending ? "Loding..." : "Create"}
      </button>

      {/* {isLoading
        ? "Loding..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Not found"} */}
    </>
  );
}

export default App;
