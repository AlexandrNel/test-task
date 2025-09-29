import type { Todo } from "../types";
import { axios } from "@/shared/api/axios";

export async function getTodoById(id: string) {
  const data = await axios<Todo[]>(`/todos/${id}`);
  return data.data;
}
