"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";
import Portal from "../Portal";

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
interface ModalProps {
  className?: string;
  onClose: () => void;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const MODAL_CONTAINER_ID = "modal-container";

export function Modal({ children, isOpen, onClose }: Props) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style = "overflow: hidden; padding-right: 14px;";
    } else {
      document.body.style = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal id={MODAL_CONTAINER_ID}>
          <ModalL onClose={onClose}>{children}</ModalL>
        </Portal>
      )}
    </>
  );
}

const ModalL = ({
  onClose,
  children,
  className,
  header,
  footer,
}: ModalProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleWrapperClick = React.useCallback(
    (e: MouseEvent) => {
      if (e.target === containerRef.current) onClose?.();
    },
    [onClose],
  );
  const handleEscapePress = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose],
  );
  const handleFocus = React.useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    const elements = containerRef.current?.querySelectorAll("button, input");
    if (!elements || elements.length === 0) return;
    const first = elements[0];
    const last = elements[elements.length - 1];
    const active = document.activeElement;
    if (!containerRef.current?.contains(active)) {
      e.preventDefault();
      return (elements[0] as HTMLElement).focus();
    }
    if (active === last) {
      e.preventDefault();
      (first as HTMLElement).focus();
    }
  }, []);

  React.useEffect(() => {
    const last = document.activeElement;
    document.addEventListener("keydown", handleFocus);
    return () => {
      document.removeEventListener("keydown", handleFocus);
      (last as HTMLElement | null)?.focus();
    };
  }, [handleFocus]);

  React.useEffect(() => {
    document.addEventListener("click", handleWrapperClick);
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("click", handleWrapperClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [handleWrapperClick, handleEscapePress]);
  return (
    <div
      id="modal"
      ref={containerRef}
      className="fixed left-0 top-0 z-[998] h-screen w-full flex items-center justify-center backdrop-blur-[3px] backdrop-brightness-60"
    >
      <div
        id="modal"
        aria-description="modal"
        className={cn(
          className,
          "relative p-5 z-[999] rounded-[10px] w-[500px]  bg-white",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute max-[540px]:right-0 right-[-22px] top-[-27px] outline-white cursor-pointer hover:outline-2 focus:outline-2 rounded-[5px] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Close button</title>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        {header}
        {children}
        {footer}
      </div>
    </div>
  );
};
