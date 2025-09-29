import type { PhotosDto } from "../types";
import { PUBLIC_PHOTO_API_URL } from "@/shared/lib/consts";
import { mapPhotosDtoToPhotos } from "../utils";

export async function getPhotos(params = { page: 1 }) {
  const { page = 1 } = params;
  const res = await fetch(`${PUBLIC_PHOTO_API_URL}?page=${page}`);
  const data: PhotosDto = await res.json();
  return mapPhotosDtoToPhotos(data);
}

export const getCachedPhotos = getPhotos;
