import Link from "next/link";
import { type Post, PostCard, getPosts } from "@/entities/post/";
import { CreatePostButton } from "@/features/addPost";
import { Suspense } from "react";
import Loading from "./loadingUi";

export const metadata = {
  title: "Посты",
  description: "Страница постов, отрендеренная с помощью SSR",
};

export default async function Page() {
  return (
    <>
      <h1 className="text-lg font-bold">Посты</h1>
      <div>
        <CreatePostButton />
      </div>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </>
  );
}

async function PostList() {
  const data: Post[] = await getPosts();
  return (
    <ul className="py-4 flex flex-col gap-2">
      {data.slice(0, 10).map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <PostCard post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
