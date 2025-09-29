import { API_URL } from "@/shared/lib/consts";
import type { User } from "../types";

export async function getUserById(id: string) {
  const data = await fetch(`${API_URL}/users/${id}`);
  if (!data.ok) {
    throw new Error("Ошибка загрузки поста");
  }
  const post: User = await data.json();
  return post;
}
