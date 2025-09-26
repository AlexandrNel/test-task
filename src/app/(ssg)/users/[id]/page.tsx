import type { Metadata } from "next";
import { getUserById, getUsers } from "@/entities/user/";
import { capitalizeFirstLetter } from "@/shared/lib/utils/capitalizeFirstLetter";

type Props = {
  params: Promise<{ id: string }>;
};
export const dynamicParams = false;
export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({ id: String(user.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = await getUserById(id);
  return {
    title: user.name,
    description: user.email,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const user = await getUserById(id);
  return (
    <div>
      <h1 className="text-lg font-bold">{user.name}</h1>
      <p>{capitalizeFirstLetter(user.username)}</p>
    </div>
  );
}
