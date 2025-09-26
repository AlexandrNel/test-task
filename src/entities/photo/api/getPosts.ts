import type { Post } from "../types";

export async function getPosts() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  if (!data.ok) {
    throw new Error("Ошибка загрузки постов");
  }
  const posts: Post[] = await data.json();
  return posts;
}
