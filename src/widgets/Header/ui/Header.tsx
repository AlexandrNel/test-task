"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { cn } from "@/shared/lib/utils";
import { navigation } from "../config/navigation";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn(className, "shadow p-2 mb-3")}>
      <ul className={clsx("font-medium text-[18px] flex justify-center")}>
        {navigation.map((n) => {
          return (
            <li key={n.to}>
              <Link
                className={cn(
                  "px-4 py-2 block border rounded border-transparent hover:border-gray-200 transition-all",
                  {
                    "border-gray-400": pathname.match(n.to),
                  },
                )}
                href={n.to}
              >
                {n.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
