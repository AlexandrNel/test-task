"use client";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";
import type React from "react";
import { AddUserForm } from "./AddUserForm";

interface Props {
  className?: string;
}

export const AddUserButton: React.FC<Props> = () => {
  const [isOpen, handler] = useModal();

  return (
    <>
      <Modal isOpen={isOpen} onClose={handler.close}>
        <AddUserForm handler={handler.close} />
      </Modal>
      <Button onClick={() => handler.open()}>Добавить пользователя</Button>
    </>
  );
};
