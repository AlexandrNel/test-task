"use server";
import { createAction } from "@/shared/lib/utils/createAction";
import { addPhotoApi } from "./api";

export const addPhoto = createAction(
  addPhotoApi,
  { error: "", success: "Фото успешно добавлено", revalidate: "/photos" },
  "title",
  "description",
  "file",
);
