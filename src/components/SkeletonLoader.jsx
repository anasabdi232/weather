function SkeletonBox({ className }) {
  return (
    <div className={`animate-pulse bg-slate-200 dark:bg-slate-700 rounded-2xl ${className}`} />
  )
}

function SkeletonLoader() {
  return (
    <div className="mt-8">

      {/* Current weather skeleton */}
      <div className="rounded-3xl p-8 bg-slate-200 dark:bg-slate-800 shadow-2xl">
        <SkeletonBox className="h-4 w-40 mb-6" />

        <div className="flex items-start justify-between">
          <div>
            <SkeletonBox className="h-24 w-36 mb-3" />
            <SkeletonBox className="h-5 w-28 mb-2" />
            <SkeletonBox className="h-4 w-24" />
          </div>
          <SkeletonBox className="h-24 w-24 rounded-full" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-300 dark:border-slate-600">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <SkeletonBox className="h-5 w-5 rounded-full" />
              <SkeletonBox className="h-5 w-12" />
              <SkeletonBox className="h-3 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Forecast skeleton */}
      <div className="mt-6">
        <SkeletonBox className="h-4 w-32 mb-4" />
        <div className="grid grid-cols-7 gap-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <SkeletonBox className="h-3 w-8" />
              <SkeletonBox className="h-3 w-10" />
              <SkeletonBox className="h-8 w-8 rounded-full" />
              <SkeletonBox className="h-3 w-12" />
              <SkeletonBox className="h-4 w-14" />
              <SkeletonBox className="h-3 w-8" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SkeletonLoader