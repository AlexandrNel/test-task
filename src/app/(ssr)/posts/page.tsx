import Link from "next/link";
import { type Post, PostCard, getPosts } from "@/entities/post/";

export const metadata = {
  title: "Посты",
  description: "Страница постов, отрендеренная с помощью SSR",
};

export default async function Page() {
  const data: Post[] = await getPosts();
  return (
    <div className="container">
      <ul className="py-4 flex flex-col gap-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
