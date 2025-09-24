import type { Post } from "../types";

export async function getPostById(id: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  if (!data.ok) {
    throw new Error("Ошибка загрузки поста");
  }
  const post: Post = await data.json();
  return post;
}
