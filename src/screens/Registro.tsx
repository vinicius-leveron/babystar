import { useState } from 'react'
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { ScreenHeader } from '../components/ui'
import { trackTimeline, persona } from '../data/content'

// "Meus dias": calendário do mês — escolha um dia e veja o que foi registrado.
const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const daysInMonth = 28 // Fevereiro 2026 (começa no domingo)
const withRecords = new Set([9, 10, 11, 12, 13, 15, 16, 17])

export function Registro() {
  const [selected, setSelected] = useState(17)
  return (
    <PhoneFrame seed={42}>
      <ScreenHeader
        back
        title="Meus dias"
        right={
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold-sm"
            aria-label="Adicionar evento"
          >
            <Plus size={22} strokeWidth={2.6} />
          </button>
        }
      />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-[22px] pb-5 pt-1">
        {/* calendário */}
        <div className="bs-card">
          <div className="mb-3 flex items-center justify-between">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-ink2">
              <ChevronLeft size={18} />
            </button>
            <p className="text-[15px] font-extrabold">Fevereiro 2026</p>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-ink2">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mb-1 grid grid-cols-7 gap-1">
            {weekdays.map((w, i) => (
              <span key={i} className="text-center text-[11px] font-bold text-muted">
                {w}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
              const on = selected === d
              const has = withRecords.has(d)
              return (
                <button
                  key={d}
                  onClick={() => setSelected(d)}
                  className={`relative flex aspect-square items-center justify-center rounded-xl text-[13.5px] font-bold ${
                    on ? 'bg-gold-grad text-[#251A05]' : has ? 'bg-white/[0.06] text-ink' : 'text-ink2'
                  }`}
                >
                  {d}
                  {has && !on && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-gold" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* dia selecionado */}
        <div className="mb-1 mt-4 flex items-baseline justify-between">
          <p className="text-[15px] font-extrabold">
            {selected === 17 ? 'Terça, 17 de fevereiro' : `${selected} de fevereiro`}
          </p>
          <span className="text-[12px] text-muted">{withRecords.has(selected) ? `${trackTimeline.length} eventos` : 'sem registros'}</span>
        </div>

        {withRecords.has(selected) ? (
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
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-center">
            <p className="text-[13px] text-muted">Nada registrado neste dia.</p>
            <p className="mt-1 text-[12px] text-muted">Toque no + para adicionar um evento da {persona.babyName}.</p>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
