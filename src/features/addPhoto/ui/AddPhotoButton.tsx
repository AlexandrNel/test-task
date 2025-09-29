"use client";
import { Modal } from "@/shared/ui/Modal";
import { AddPhotoForm } from "./AddPhotoForm";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Button } from "@/shared/ui/Button";

export function AddPhotoButton() {
  const [isOpen, handler] = useModal();
  return (
    <>
      <Modal isOpen={isOpen} onClose={handler.close}>
        <AddPhotoForm handler={() => handler.close()} />
      </Modal>
      <Button onClick={handler.open}>Добавить фото</Button>
    </>
  );
}
