import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const getData = async () => {
  return axios.get(import.meta.env.VITE_APP_API_URL);
};

function App() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isSuccess) console.log("Data fetched successfully");
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) console.log("Error fetching data");
  }, [isError]);

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
