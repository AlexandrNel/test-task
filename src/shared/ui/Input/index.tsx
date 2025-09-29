import { cn } from "@/shared/lib/utils";
import type React from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input: React.FC<Props> = ({ className, label, id, ...props }) => {
  return (
    <div className={styles["input-wrapper"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={cn(className, styles.input)} {...props} />
    </div>
  );
};
