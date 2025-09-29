"use client";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";
import type React from "react";
import { CreatePostForm } from "./CreatePostForm";

interface Props {
  className?: string;
}

export const CreatePostButton: React.FC<Props> = () => {
  const [isOpen, handler] = useModal();

  return (
    <>
      <Modal isOpen={isOpen} onClose={handler.close}>
        <CreatePostForm handler={handler.close} />
      </Modal>
      <Button onClick={() => handler.open()}>Создать пост</Button>
    </>
  );
};
