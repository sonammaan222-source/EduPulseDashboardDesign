import { tickerItems } from '../data'

export default function Ticker() {
  return (
    <div className="bg-slate-900 text-white py-2 overflow-hidden flex items-center gap-3">
      <div className="flex-shrink-0 flex items-center gap-2 bg-red-600 px-4 py-1 text-xs font-bold tracking-wider z-10">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot inline-block" />
        LIVE
      </div>
      <div className="overflow-hidden flex-1">
        <div className="animate-ticker whitespace-nowrap text-xs text-slate-200">
          {tickerItems.join('   ·   ')}
        </div>
      </div>
    </div>
  )
}
