"use client";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import React, { useActionState } from "react";
import { addUser } from "../actions/addUser";
import { toast } from "react-toastify";
import { useForm } from "@/shared/lib/hooks/useForm";
interface Props {
  className?: string;
  handler?: () => void;
}

export const AddUserForm: React.FC<Props> = ({ handler }) => {
  const [state, action, pending] = useActionState(addUser, null);
  const [error, { handleSubmit }] = useForm();
  React.useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state?.message);
      toast.success(` username: ${state.data?.username}\n
        name: ${state.data?.name}\n
        id: ${state.data?.id}
        file: ${state.data?.file.name}
        `);
      handler?.();
    }
  }, [state, handler]);
  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Input required placeholder="Имя" name="name" type="text" />
        <Input required placeholder="Username" name="username" type="text" />
        <Input required placeholder="Email" name="email" type="email" />
        <Input name="file" type="file" />
        {state?.message || error ? (
          <p className="text-red-500 text-sm">{state?.message || error}</p>
        ) : null}
        <Button disabled={pending} type="submit">
          {pending ? "Отправка.." : "Отправить"}
        </Button>
      </div>
    </form>
  );
};
