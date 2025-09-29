import { useToastWithActionState } from "@/shared/lib/hooks/useToastWithActionState";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useActionState } from "react";
import { addPhoto } from "../action";

export function AddPhotoForm({ handler }: { handler: () => void }) {
  const [state, action, pending] = useActionState(addPhoto, null);
  useToastWithActionState(state, handler);
  return (
    <form action={action}>
      <div className="flex flex-col gap-1">
        <Input required placeholder="Название" name="title" type="text" />
        <Input required placeholder="Описание" name="description" type="text" />
        <Input required name="file" type="file" accept="image/*" />
        <Button type="submit" disabled={pending}>
          {pending ? "Отправляем..." : "Отправить"}
        </Button>
      </div>
    </form>
  );
}
