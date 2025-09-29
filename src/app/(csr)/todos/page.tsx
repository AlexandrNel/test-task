"use client";

import {
  addTodo,
  getTodos,
  type NewTodo,
  type Todo,
  TodoCard,
} from "@/entities/todo";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function TodoPage() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [isOpen, handler] = useModal();

  React.useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => handler.close()}>
        <NewTodoForm
          setTodo={(todo: Todo) => setTodos((prev) => [todo, ...prev])}
          removeTodo={(id: number) =>
            setTodos((prev) => prev.filter((t) => t.id !== id))
          }
          handler={handler.close}
        />
      </Modal>
      <ul className="grid grid-cols-2 gap-2">
        <li>
          <button
            onClick={() => handler.open()}
            type="button"
            className=" cursor-pointer w-full h-full text-2xl border border-dashed hover:bg-gray-200 rounded-md flex items-center gap-10 justify-center"
          >
            +
          </button>
        </li>
        {todos.slice(0, 10).map((t) => (
          <li key={t.id}>
            <TodoCard todo={t} />
          </li>
        ))}
      </ul>
    </>
  );
}

function NewTodoForm({
  handler,
  setTodo,
}: {
  handler: () => void;
  setTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
}) {
  type Inputs = NewTodo & { file: FileList };
  const { register, handleSubmit } = useForm<Inputs>();
  const [isPending, setPending] = React.useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setPending(true);
    try {
      console.log(data);

      const { file, ...other } = data;
      const newTodo = await addTodo(other);
      setTodo({ ...newTodo, id: 203 + Math.random() * 100 });
      toast.success("Задача успешно добавлена");
      toast.success(`
        title: ${newTodo.title},
        complited: ${newTodo.completed},
        file: ${file?.[0]?.name},
        `);
      handler?.();
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="mb-2"
        required
        placeholder="Название таски"
        {...register("title")}
      />
      <Input className="mb-2" {...register("file")} type="file" />
      <label className="flex items-center select-none" htmlFor="complited">
        Статус выполнения:
        <input
          className="ml-4"
          id="complited"
          type="checkbox"
          {...register("completed")}
        />
        <span className="ml-1 text-sm">да/нет</span>
      </label>

      <Button disabled={isPending} type="submit">
        {isPending ? "Отправляем.." : "Добавить таску"}
      </Button>
    </form>
  );
}
