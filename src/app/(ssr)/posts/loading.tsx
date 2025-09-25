export default function Loading() {
  return (
    <div className="flex flex-col pt-4">
      <div className="animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div
            key={`loading-${i}`}
            className="h-25 bg-gray-200 rounded mb-2"
          ></div>
        ))}
      </div>
    </div>
  );
}
