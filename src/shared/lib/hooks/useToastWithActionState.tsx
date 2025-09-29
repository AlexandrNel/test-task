"use client";

import React from "react";
import { toast } from "react-toastify";

export function useToastWithActionState(
  state: { status: string; message: string; data?: unknown } | null,
  handler?: () => void,
) {
  React.useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state?.message);
      handler?.();
    }
  }, [state, handler]);
}
