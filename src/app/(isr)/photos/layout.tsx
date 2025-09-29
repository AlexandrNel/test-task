import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container !mt-4">{children}</div>;
}
