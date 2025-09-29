import type { PhotoDto } from "../types";
import { PUBLIC_PHOTO_API_URL } from "@/shared/lib/consts";
import { mapPhotoDtoToPhoto } from "../utils";

export async function getPhotoById(id: string) {
  const res = await fetch(`${PUBLIC_PHOTO_API_URL}/${id}`);
  const data: PhotoDto = await res.json();
  return mapPhotoDtoToPhoto(data);
}
