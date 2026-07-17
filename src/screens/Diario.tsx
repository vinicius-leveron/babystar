import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { ScreenHeader } from '../components/ui'
import { trackKinds, trackTimeline } from '../data/content'

export function Diario() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={91}>
      <ScreenHeader title="Diário" right={<span className="bs-chip">Hoje</span>} />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-[22px] pb-3 pt-1">
        <p className="mb-2.5 bs-label">Registrar</p>
        <div className="grid grid-cols-3 gap-2.5">
          {trackKinds.map((k) => (
            <button
              key={k.key}
              onClick={() => k.key === 'nap' && nav('/timer')}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border p-3 text-center ${
                k.done ? 'border-gold/30 bg-gold/[0.06]' : 'border-white/10 bg-white/[0.05]'
              }`}
            >
              <span className="text-[26px] leading-none">{k.emoji}</span>
              <span className="text-[12px] font-bold leading-tight">{k.label}</span>
              <span className={`text-[10px] leading-tight ${k.done ? 'text-gold' : 'text-muted'}`}>{k.status}</span>
            </button>
          ))}
        </div>

        <p className="mb-2.5 mt-4 bs-label">Linha do tempo de hoje</p>
        <div className="relative pl-1">
          <div className="absolute bottom-2 left-[18px] top-2 w-px bg-white/10" />
          <div className="flex flex-col gap-1">
            {trackTimeline.map((t, i) => (
              <div key={i} className="relative flex items-center gap-3 py-1.5">
                <div className="z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/[0.16] bg-bg-2 text-base">
                  {t.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] font-bold leading-tight">{t.label}</p>
                  <p className="text-[12px] text-muted">{t.detail}</p>
                </div>
                <span className="text-[13px] font-bold text-ink2">{t.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active="home" />
    </PhoneFrame>
  )
}
