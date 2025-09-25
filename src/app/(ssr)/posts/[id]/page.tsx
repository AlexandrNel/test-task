import type { Metadata } from "next";
import { getPostById } from "@/entities/post/";
import { capitalizeFirstLetter } from "@/shared/lib/utils/capitalizeFirstLetter";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const post = await getPostById(id);
  return {
    title: capitalizeFirstLetter(post.title),
    description: capitalizeFirstLetter(post.body),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await getPostById(id);
  return (
    <div>
      <h1 className="text-lg font-bold">{capitalizeFirstLetter(post.title)}</h1>
      <p>{capitalizeFirstLetter(post.body)}</p>
    </div>
  );
}
