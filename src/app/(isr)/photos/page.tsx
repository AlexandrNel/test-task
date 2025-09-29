import { getPhotos, PhotoCard } from "@/entities/photo";
import { AddPhotoButton } from "@/features/addPhoto";
import type { Metadata } from "next";

import { Suspense } from "react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Фотографии",
  description: "Страница с фотографиями",
};

export default async function Page() {
  return (
    <div>
      <AddPhotoButton />
      <Suspense fallback={<>Загрузка...</>}>
        <PhotoList />
      </Suspense>
    </div>
  );
}

async function PhotoList() {
  const data = await getPhotos();
  return (
    <div>
      <ul className="columns-2 max-[580px]:columns-1 gap-2">
        {data.photos?.map((photo) => (
          <li className="mb-2 last:mb-0" key={photo.id}>
            <PhotoCard photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
