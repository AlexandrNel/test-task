import { getPhotoById, PhotoCard } from "@/entities/photo";
import { getPhotos } from "@/entities/photo/api/getPhotos";
import type { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const photo = await getPhotoById(id);
  return {
    title: photo.title,
    description: photo.description,
  };
}

export async function generateStaticParams() {
  const { photos } = await getPhotos();
  return photos.map((photo) => ({ id: String(photo.id) }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const data = await getPhotoById(id);

  return (
    <div>
      <PhotoCard photo={data} />
    </div>
  );
}
