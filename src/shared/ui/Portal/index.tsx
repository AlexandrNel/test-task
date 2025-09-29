"use client";
import { createContainer } from "@/shared/lib/utils/createContainer";
import React from "react";
import { createPortal } from "react-dom";

interface Props {
  id: string;
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ id, children }) => {
  const [container, setContainer] = React.useState<HTMLElement>();

  React.useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);
      if (!portalContainer) {
        const container = createContainer({ id });
        setContainer(container);
      } else {
        setContainer(portalContainer);
      }
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export default Portal;
