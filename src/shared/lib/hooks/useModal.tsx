import React from "react";

export function useModal(): [
  isOpen: boolean,
  handler: { open: () => void; close: () => void },
] {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalHandler = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
  return [isOpen, modalHandler];
}
