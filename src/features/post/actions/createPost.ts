"use server";

import { API_URL } from "@/shared/lib/consts";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("content");
  const file = formData.get("file") as File;

  const post = { title, body };
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Ошибка при отправке данных");
  const data = await res.json();
  revalidatePath("/posts");
  return { res: data, file: { name: file.name, data: file } };
}
