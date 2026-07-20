import { liveTickerItems } from '../utils/time'

export default function Ticker() {
  return (
    <div className="bg-slate-900 text-white py-2 overflow-hidden flex items-center gap-0">
      {/* Live badge — pinned left */}
      <div className="flex-shrink-0 flex items-center gap-2 bg-red-600 px-4 py-1 text-xs font-bold tracking-wider z-10 h-full">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot inline-block" />
        LIVE
      </div>

      {/* Scrolling ticker */}
      <div className="overflow-hidden flex-1 relative">
        <div className="animate-ticker whitespace-nowrap text-xs text-slate-200">
          {liveTickerItems.join('   ·   ')}
          &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
          {liveTickerItems.join('   ·   ')}
        </div>
      </div>

      {/* Right label */}
      <div className="flex-shrink-0 flex items-center gap-1.5 px-3 text-[10px] font-semibold text-slate-400 border-l border-slate-700 h-full">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Auto-updates
      </div>
    </div>
  )
}
