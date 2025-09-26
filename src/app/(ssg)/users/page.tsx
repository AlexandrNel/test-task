import type { User } from "@/entities/user/";
import { getUsers, UserCard } from "@/entities/user";
import { AddUserButton } from "@/features/user";

export const metadata = {
  title: "Пользователи",
  description: "Страница с пользователями, отрендеренная средствами SSG",
};
export default async function Page() {
  const data: User[] = await getUsers();
  return (
    <>
      <h1 className="text-lg font-bold">Пользователи</h1>
      <div className="pb-4">
        <AddUserButton />
      </div>
      <ul className=" grid grid-cols-3 gap-2">
        {data.slice(0, 10).map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
