import type { NewTodo, Todo } from "../types";
import { axios } from "@/shared/api/axios";

export async function addTodo(todo: NewTodo) {
  const data = await axios.post<Todo>(`/todos/`, todo);
  return data.data;
}
