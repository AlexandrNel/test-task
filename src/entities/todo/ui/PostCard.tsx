"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import type { Todo } from "../types";
import { updateTodo } from "../api/updateTodo";
import { toast } from "react-toastify";
interface Props {
  className?: string;
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ className, todo }) => {
  const [checked, setChecked] = React.useState(todo.completed);
  const [isPending, setIsPending] = React.useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      console.log(e.target.value);
      const formData = {
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
      console.log(formData);
      setChecked(e.target.checked);
      toast.loading("Обновляем", { toastId: `todo-${todo.id}` });
      setIsPending(true);
      const data = await updateTodo(String(todo.id), formData);
      setChecked(data.completed);
    } catch (error) {
      setChecked((prev) => !prev);
      toast.error("Произошла ошибка, попробуйте повторить позднее");
      console.log(error);
    } finally {
      toast.done(`todo-${todo.id}`);
      setIsPending(false);
    }
  };
  return (
    <div
      className={cn(
        className,
        "border border-gray-200 hover:border-gray-500 p-4 h-full rounded-md flex items-center gap-5 justify-between",
      )}
    >
      <h2 className="text-lg font-bold w-full">
        <input className="w-full text-wrap text-ellipsis" value={todo.title} />
      </h2>
      <input
        name="complited"
        disabled={isPending}
        className="cursor-pointer"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};
