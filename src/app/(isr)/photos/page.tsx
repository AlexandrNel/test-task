import { getPhotos, PhotoCard } from "@/entities/photo";
import { AddPhotoButton } from "@/features/addPhoto";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Фотографии",
  description:
    "Страница с фотографиями. Обновляется периодически (каждые 60 секунд)",
};

export default async function Page(props: PageProps<"/photos">) {
  const { page = 1 } = await props.searchParams;
  return (
    <div>
      <AddPhotoButton />
      <Suspense fallback={<>Загрузка...</>}>
        <PhotoList page={Number(page)} />
      </Suspense>
    </div>
  );
}

async function PhotoList({ page }: { page: number }) {
  const { photos, totalPages } = await getPhotos({ page });

  return (
    <div>
      <ul className="grid grid-cols-2 gap-2">
        {photos?.map((photo) => (
          <li key={photo.id}>
            <PhotoCard photo={photo} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {page > 1 && (
          <Link
            className="text-lg underline"
            href={`/photos?page=${+page - 1}`}
          >
            Назад
          </Link>
        )}
        {page < totalPages && (
          <Link
            className="text-lg underline ml-4"
            href={`/photos?page=${+page + 1}`}
          >
            Вперед
          </Link>
        )}
      </div>
    </div>
  );
}
