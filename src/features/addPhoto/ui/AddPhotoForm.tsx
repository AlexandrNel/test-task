"use client";
import { useToastWithActionState } from "@/shared/lib/hooks/useToastWithActionState";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useActionState } from "react";
import { addPhoto } from "../action";
import { useForm } from "@/shared/lib/hooks/useForm";

export function AddPhotoForm({ handler }: { handler: () => void }) {
  const [state, action, pending] = useActionState(addPhoto, null);
  const [error, { handleSubmit }] = useForm();
  useToastWithActionState(state, handler);
  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Input required placeholder="Название" name="title" type="text" />
        <Input required placeholder="Описание" name="description" type="text" />
        <Input required name="file" type="file" accept="image/*" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" disabled={pending}>
          {pending ? "Отправляем..." : "Отправить"}
        </Button>
      </div>
    </form>
  );
}
