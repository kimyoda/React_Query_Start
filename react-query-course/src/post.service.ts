import axios from "axios";
import { IPost } from "./post.types";

class PostService {
  private URL = import.meta.env.VITE_APP_API_URL;

  getPosts() {
    return axios.get<IPost[]>(this.URL);
  }

  getPostByid(id: number) {
    return axios.get<IPost>(`${this.URL}/${id}`);
  }
}

export const postService = new PostService();
