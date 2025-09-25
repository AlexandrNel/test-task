import { useActionState } from "react";

export type Action<T> = (payload: FormData) => Promise<T>;

type ActionStateWithHandler = <T>(
  action: Action<T>,
  handler?: () => void,
) => (state: unknown, formData: FormData) => Promise<T | { message: string }>;

const actionStateWithHandler: ActionStateWithHandler =
  (action, handler) => async (_, formData) => {
    try {
      const data = await action(formData);
      handler?.();
      return data;
    } catch (error) {
      return { message: (error as Error).message };
    }
  };

export function useFormAction<T>(action: Action<T>, handler?: () => void) {
  return useActionState(actionStateWithHandler<T>(action, handler), null);
}
