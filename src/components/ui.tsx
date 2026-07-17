import type { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function ScreenHeader({
  title,
  back,
  right,
  onBack,
}: {
  title?: string
  back?: boolean
  right?: ReactNode
  onBack?: () => void
}) {
  const nav = useNavigate()
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-1">
      <div className="flex items-center gap-2">
        {back && (
          <button
            onClick={onBack ?? (() => nav(-1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink2"
            aria-label="Voltar"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {title && <h1 className="text-[22px] font-extrabold tracking-[-0.3px]">{title}</h1>}
      </div>
      {right}
    </div>
  )
}

export function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/[0.09]">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#F5C86B,#F0A987)' }}
      />
    </div>
  )
}

export function Body({
  children,
  scroll = false,
  className = '',
}: {
  children: ReactNode
  scroll?: boolean
  className?: string
}) {
  return (
    <div
      className={`flex flex-1 flex-col gap-3.5 px-[22px] pb-3 pt-2.5 ${
        scroll ? 'overflow-y-auto no-scrollbar' : 'min-h-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
