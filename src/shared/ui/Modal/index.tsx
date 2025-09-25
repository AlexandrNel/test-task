"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";
import Portal from "../Portal";

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const MODAL_CONTAINER_ID = "modal-container";

export function Modal({
  className,
  children,
  isOpen,
  header,
  footer,
  onClose,
}: Props) {
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

  React.useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("click", handleWrapperClick);
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("click", handleWrapperClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpen, handleWrapperClick, handleEscapePress]);
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
          <div
            ref={containerRef}
            className="fixed left-0 top-0 z-[998] h-screen w-full flex items-center justify-center backdrop-blur-[3px] backdrop-brightness-60"
          >
            <div
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
        </Portal>
      )}
    </>
  );
}
