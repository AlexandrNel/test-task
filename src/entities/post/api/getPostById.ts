import { notFound } from "next/navigation";
import type { Post } from "../types";

export async function getPostById(id: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const post: Post = await data.json();
  if (data.status === 404) {
    notFound();
  }
  if (!data.ok) {
    throw new Error("Ошибка при получении поста");
  }
  return post;
}
