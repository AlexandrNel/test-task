import type { PhotosDto } from "../types";
import { PUBLIC_PHOTO_API_URL } from "@/shared/lib/consts";
import { mapPhotosDtoToPhotos } from "../utils";

export async function getPhotos() {
  const res = await fetch(`${PUBLIC_PHOTO_API_URL}`);
  if (!res.ok) {
    throw new Error("Произошла ошибка");
  }
  const data: PhotosDto = await res.json();
  return mapPhotosDtoToPhotos(data);
}

export const getCachedPhotos = getPhotos;
