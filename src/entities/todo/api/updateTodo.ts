import type { Todo } from "../types";
import { axios } from "@/shared/api/axios";

export async function updateTodo(id: string, todo: Partial<Todo>) {
  const data = await axios.put<Todo>(`/todos/${id}`, todo);
  return data.data;
}
