import type { Metadata } from "next";
import type React from "react";
export const metadata: Metadata = {
  title: "Задачи",
  description: "Страница с задачами, отрендеренная средствами CSR ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container !mt-4">{children}</div>;
}
