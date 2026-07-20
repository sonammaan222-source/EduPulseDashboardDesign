interface LiveBadgeProps {
  label: string
  color?: string
  pulse?: boolean
  size?: 'sm' | 'md'
}

export default function LiveBadge({ label, color = '#EF4444', pulse = false, size = 'sm' }: LiveBadgeProps) {
  const isLive = label === 'Live' || label === 'Breaking'
  const pad = size === 'md' ? 'px-3 py-1' : 'px-2 py-0.5'
  const text = size === 'md' ? 'text-xs' : 'text-[10px]'

  return (
    <span
      className={`inline-flex items-center gap-1 ${pad} rounded-full font-bold ${text} text-white`}
      style={{ background: color }}
    >
      {(isLive || pulse) && (
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot flex-shrink-0" />
      )}
      {label}
    </span>
  )
}
