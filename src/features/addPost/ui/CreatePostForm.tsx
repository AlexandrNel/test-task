"use client";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useActionState } from "react";
import type React from "react";
import { createPost } from "../actions/createPost";
import { useToastWithActionState } from "@/shared/lib/hooks/useToastWithActionState";
import { useForm } from "@/shared/lib/hooks/useForm";
interface Props {
  className?: string;
  handler?: () => void;
}

export const CreatePostForm: React.FC<Props> = ({ handler }) => {
  const [state, action, pending] = useActionState(createPost, null);
  const [error, { handleSubmit }] = useForm();
  useToastWithActionState(state, handler);

  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Input required placeholder="Название" name="title" type="text" />
        <Input required placeholder="Текст" name="body" type="text" />
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
