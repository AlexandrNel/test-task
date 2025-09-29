import { revalidatePath } from "next/cache";

export function createAction<Input, Output>(
  fetcher: (input: Input) => Promise<Output>,
  options: { error: string; success: string; revalidate?: string },
  ...fields: string[]
) {
  return async (_: unknown, formData: FormData) => {
    const data = {} as Record<
      string,
      string | null | { name: string; file: File }
    >;
    fields.forEach((v) => {
      const formVal = formData.get(String(v));
      data[v] =
        typeof formVal === "string"
          ? formVal
          : formVal
            ? { name: formVal.name, file: formVal }
            : null;
    });
    try {
      const res = await fetcher(data as Input);
      options.revalidate && revalidatePath(options.revalidate);
      return {
        status: "success",
        message: options.success,
        data: res,
      };
    } catch (err) {
      console.log(err);
      return { status: "error", message: options.error };
    }
  };
}
