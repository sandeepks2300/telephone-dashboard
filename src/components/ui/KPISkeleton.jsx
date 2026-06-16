import Skeleton from "./skeleton";

export default function KPISkeleton() {
  return (
    <div className="rounded-2xl border bg-white p-5 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-16" />
    </div>
  );
}