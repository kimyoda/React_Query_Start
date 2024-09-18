import "./App.css";
import { usePost } from "./usePostByid";
import { usePosts } from "./usePosts";

const isAuth = true;

function App() {
  const { post } = usePost(1);
  const { data, isLoading } = usePosts(isAuth);

  console.log(post);

  return (
    <>
      <h1>React Query</h1>
      {isLoading
        ? "Loding..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Not found"}
    </>
  );
}

export default App;
