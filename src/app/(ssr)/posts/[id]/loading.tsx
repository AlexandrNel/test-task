export default function Loading() {
  return (
    <div className="container">
      <div className="flex flex-col pt-2">
        <div className="animate-pulse">
          <div className="h-6 max-w-1/2 bg-gray-200 rounded mb-2"></div>
          <div className="h-16 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    </div>
  );
}
