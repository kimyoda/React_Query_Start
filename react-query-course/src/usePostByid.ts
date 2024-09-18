import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IPost } from "./post.types";

const getData = async (id: number) => {
  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/${id}`;
  return axios.get<IPost>(apiUrl);
};

export function usePost(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getData(id),
    select: (data) => data.data,
    enabled: !!id,
  });

  return { post: data, isLoading };
}
