import type React from "react";
import { cn } from "@/shared/lib/utils";
import type { Post } from "../types";

interface Props {
  className?: string;
  post: Post;
}

export const PostCard: React.FC<Props> = ({ className, post }) => {
  return (
    <div
      className={cn(
        className,
        "border border-gray-200 hover:border-gray-500 p-4 rounded-md",
      )}
    >
      <h2 className="text-lg font-bold">
        {post.title?.[0].toUpperCase() + post.title?.slice(1)}
      </h2>
      <p>{post.body?.[0].toUpperCase() + post.body?.slice(1)}</p>
    </div>
  );
};
