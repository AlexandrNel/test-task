import { API_URL } from "@/shared/lib/consts";
import type { User } from "../types";

export async function getUsers() {
  const data = await fetch(`${API_URL}/users/`);
  if (!data.ok) {
    throw new Error("Ошибка загрузки пользоавтелей");
  }
  const posts: User[] = await data.json();
  return posts;
}
