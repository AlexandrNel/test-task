import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex grow items-center justify-center">
      <div>
        <div className="flex items-end">
          <h2 className="text-6xl font-bold">404</h2>
          <p className="text-2xl ml-4 font-medium">Страница не найдена</p>
        </div>
        <Link className="text-blue-500 font-bold w-full" href="/">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
