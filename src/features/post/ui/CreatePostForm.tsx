"use client";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useActionState } from "react";
import type React from "react";
import { createPost } from "../actions/createPost";
import { useToastWithActionState } from "@/shared/lib/hooks/useToastWithActionState";
interface Props {
  className?: string;
  handler?: () => void;
}

export const CreatePostForm: React.FC<Props> = ({ handler }) => {
  const [state, action, pending] = useActionState(createPost, null);
  useToastWithActionState(state, handler);

  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        <Input required placeholder="Название" name="title" type="text" />
        <Input required placeholder="Текст" name="body" type="text" />
        <Input name="file" type="file" />
        {state?.message ? <p>{state.message}</p> : null}
        <Button disabled={pending} type="submit">
          {pending ? "Отправка.." : "Отправить"}
        </Button>
      </div>
    </form>
  );
};
