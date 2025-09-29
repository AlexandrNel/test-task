import type React from "react";
import { cn } from "@/shared/lib/utils";
import type { Photo } from "../types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  photo: Photo;
}

export const PhotoCard: React.FC<Props> = ({ className, photo }) => {
  return (
    <div
      className={cn(
        className,
        "border border-gray-200 hover:border-gray-500 rounded-md flex flex-col overflow-hidden",
      )}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold  ">
          <Link className="hover:text-blue-500" href={`/photos/${photo.id}`}>
            {photo.title}
          </Link>
        </h2>
        <p className=" text-sm">{photo.description}</p>
      </div>
      <Image
        className="w-full"
        width={photo.width}
        height={photo.height}
        alt={photo.description}
        title={photo.title}
        src={photo.url}
      />
    </div>
  );
};
