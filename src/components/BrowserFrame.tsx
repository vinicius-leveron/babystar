import type { ReactNode } from 'react'
import { Star, FileText, Users, LayoutDashboard, Settings } from 'lucide-react'

const nav = [
  { icon: LayoutDashboard, label: 'Painel' },
  { icon: FileText, label: 'Prompts' },
  { icon: Users, label: 'Usuárias' },
  { icon: Settings, label: 'Ajustes' },
]

export function BrowserFrame({
  url,
  active,
  children,
}: {
  url: string
  active: 'Prompts' | 'Usuárias'
  children: ReactNode
}) {
  return (
    <div className="flex h-[700px] w-[1120px] flex-none flex-col overflow-hidden rounded-2xl border border-white/[0.13] bg-sky-grad font-rounded text-ink shadow-phone">
      {/* chrome */}
      <div className="flex h-11 flex-none items-center gap-2.5 border-b border-white/[0.08] bg-[#0A0E22] px-4">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <div className="ml-2 flex h-[26px] max-w-[440px] flex-1 items-center rounded-lg border border-white/[0.08] bg-white/[0.06] px-3 text-[12px] text-muted">
          {url}
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* sidebar */}
        <aside className="flex w-[220px] flex-none flex-col gap-1 border-r border-white/[0.07] bg-white/[0.03] p-3">
          <div className="mb-4 flex items-center gap-2 px-2 pt-1">
            <Star size={20} className="text-gold" fill="currentColor" />
            <span className="text-[15px] font-extrabold">
              Baby<span className="text-gold">Star</span>
            </span>
            <span className="ml-1 rounded bg-white/[0.08] px-1.5 py-0.5 text-[9px] font-bold text-muted">ADMIN</span>
          </div>
          {nav.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] font-bold ${
                n.label === active ? 'bg-gold/[0.12] text-gold' : 'text-ink2'
              }`}
            >
              <n.icon size={17} />
              {n.label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2A2350] to-[#141A38] text-xs">
              DG
            </span>
            <span className="text-[12px] font-bold text-ink2">Equipe Denise</span>
          </div>
        </aside>

        {/* main */}
        <main className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-6">{children}</main>
      </div>
    </div>
  )
}
