import type { Todo } from "../types";
import { axios } from "@/shared/api/axios";

export async function getTodos() {
  const data = await axios<Todo[]>(`/todos`);
  return data.data;
}
