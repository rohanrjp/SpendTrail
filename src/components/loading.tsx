import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-[200px]" />
      <Skeleton className="h-[300px] w-full max-w-md" />
    </div>
  )
}

