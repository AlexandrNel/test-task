"use client";

import { Button } from "@/shared/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center grow container">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Что-то пошло не так</h2>
        <span className=" max-w-[400px] text-center">
          Ошибка: {error.message}
        </span>
        <Button className="mx-auto mt-2" onClick={() => reset()}>
          Попробовать еще раз
        </Button>
      </div>
    </div>
  );
}
