import type { Post } from "../types";

export function PostPage({ post }: { post: Post }) {
  return (
    <div className="max-w-5xl mx-auto   ">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
