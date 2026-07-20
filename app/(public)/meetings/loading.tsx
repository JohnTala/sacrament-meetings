export default function Loading() {
  return (
    <div className="p-6">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200 mb-4" />
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}