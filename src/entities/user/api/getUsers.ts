import { API_URL } from "@/shared/lib/consts";
import type { User } from "../types";

export async function getUsers() {
  const data = await fetch(`${API_URL}/users/`);
  if (!data.ok) {
    throw new Error(
      "Произошла ошибка при загрузке пользоавтелей, попробуйте повторить позднее",
    );
  }
  const posts: User[] = await data.json();
  return posts;
}
