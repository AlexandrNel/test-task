"use server";
import { createAction } from "@/shared/lib/utils/createAction";
import { addPhotoApi } from "./api";
import type { NewPhoto } from "@/entities/photo";

export const addPhoto = createAction<NewPhoto, NewPhoto>(
  addPhotoApi,
  { error: "", success: "Фото успешно добавлено", revalidate: "/photos" },
  "title",
  "description",
  "file",
);
