import type React from "react";
import { cn } from "@/shared/lib/utils";
import type { User } from "../types";
import { Button } from "@/shared/ui/Button";

interface Props {
  className?: string;
  user: User;
}

export const UserCard: React.FC<Props> = ({ className, user }) => {
  return (
    <div
      className={cn(
        className,
        "h-full flex flex-col border border-gray-200 hover:border-gray-500 p-4 rounded-md",
      )}
    >
      <h2 className="text-lg leading-[100%] mb-1 font-bold">{user.name}</h2>
      <span className="text-sm leading-[100%] mb-1 block text-gray-400">
        {user.username} | {user.email}
      </span>
      <div className="mb-4">
        <h3 className="text-sm font-bold">Адрес:</h3>
        <ul className=" list-disc pl-4 ">
          <li className="text-sm font-medium leading-[120%]">
            {user.address.city}, {user.address.street}, {user.address.suite},{" "}
            {user.address.zipcode}
          </li>
          <li className="text-sm font-medium leading-[120%]">
            {user.address.geo.lat} {user.address.geo.lng}
          </li>
        </ul>
      </div>
      <Button
        element="Link"
        href={`/users/${user.id}`}
        className="mt-auto"
        variant="outline"
        size="sm"
      >
        Подробнее
      </Button>
    </div>
  );
};
