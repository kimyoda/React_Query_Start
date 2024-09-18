import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { IPost } from "./post.types";

const getData = async () => {
  return axios.get<IPost[]>(import.meta.env.VITE_APP_API_URL);
};

const initialData: { data: IPost[] } = {
  data: [
    {
      body: "Initial body",
      id: 0,
      title: "Initial title",
      userId: 0,
    },
  ],
};

export function usePosts(isEnabled: boolean) {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
    select: (data) => data.data,
    enabled: isEnabled,
    initialData,
  });

  useEffect(() => {
    if (isSuccess) console.log("Data fetched successfully");
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) console.log("Error fetching data");
  }, [isError]);

  return { data, isLoading, isSuccess, isError };
}
