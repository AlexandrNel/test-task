"use server";

import type { User } from "@/entities/user";
import { API_URL } from "@/shared/lib/consts";
import { revalidatePath } from "next/cache";

export async function addUser(_: unknown, formData: FormData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const file = formData.get("file") as File;

  const user = { name, email, username };
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok)
    return { status: "error", message: "Ошибка при отправке данных" };
  const data: User = await res.json();
  revalidatePath("/users");
  return {
    status: "success",
    message: "Данные успешно отправлены",
    data: {
      ...data,
      file: { name: file.name, data: file },
    },
  };
}
