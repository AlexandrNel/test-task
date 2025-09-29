import type { NewPhoto } from "@/entities/photo";

export const addPhotoApi = async (body: NewPhoto) => {
  return new Promise((res: (val: NewPhoto) => void) => res(body));
};
