import React from "react";

export function useForm(): [
  string | null,
  { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void },
] {
  const [error, setError] = React.useState<string | null>(null);
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setError(null);
      const target = e.target as HTMLElement;
      const inputFile: HTMLInputElement | null =
        target.querySelector("input[type=file]");
      if (inputFile) {
        const file: File | undefined = inputFile.files?.[0];
        if (file && file.size > 1024 * 1024) {
          e.preventDefault();
          setError("Размер файла не должен превышать 1 мб");
        }
      }
    },
    [],
  );
  return [error, { handleSubmit }];
}
