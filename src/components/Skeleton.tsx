export function SkeletonCard() {
  return (
    <div className="glass card-shadow rounded-2xl overflow-hidden animate-pulse">
      <div className="h-44 bg-slate-200" />
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-4 w-20 bg-slate-200 rounded-full" />
          <div className="h-4 w-16 bg-slate-100 rounded-full" />
        </div>
        <div className="h-4 w-full bg-slate-200 rounded" />
        <div className="h-4 w-4/5 bg-slate-200 rounded" />
        <div className="h-3 w-3/4 bg-slate-100 rounded" />
        <div className="h-3 w-2/3 bg-slate-100 rounded" />
        <div className="h-4 w-20 bg-slate-200 rounded-full mt-2" />
      </div>
    </div>
  )
}

export function SkeletonStat() {
  return (
    <div className="glass card-shadow rounded-2xl p-5 animate-pulse">
      <div className="flex justify-between mb-3">
        <div className="w-8 h-8 bg-slate-200 rounded-lg" />
        <div className="w-12 h-5 bg-slate-100 rounded-full" />
      </div>
      <div className="h-7 w-24 bg-slate-200 rounded mb-2" />
      <div className="h-3 w-32 bg-slate-100 rounded" />
      <div className="mt-3 h-1 bg-slate-100 rounded-full" />
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-3 bg-slate-200 rounded ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  )
}
