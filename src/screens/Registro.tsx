import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { sleepLog, persona } from '../data/content'

export function Registro() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={42} scroll>
      <ScreenHeader back title="Registro" right={<span className="bs-chip-on">24h / 48h</span>} />
      <Body scroll>
        <p className="px-1 text-[13.5px] text-ink2">
          Toque em <span className="font-bold text-gold">+</span> para adicionar um evento do dia da {persona.babyName}.
        </p>

        {sleepLog.map((d) => (
          <div key={d.day} className="bs-card">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[14px] font-extrabold">{d.day}</p>
              <span className="text-[12px] text-muted">{d.items.length} eventos</span>
            </div>
            <div className="relative flex flex-col gap-0">
              {d.items.map((it, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/[0.06] text-base">
                    {it.icon}
                  </div>
                  <span className="flex-1 text-[14px] text-ink2">{it.label}</span>
                  <span className="text-[13px] font-bold text-ink">{it.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] py-3.5 text-[14px] font-bold text-lav">
          <Plus size={18} /> Adicionar evento
        </button>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/analise')}>
          Concluí as 48h
        </button>
      </div>
    </PhoneFrame>
  )
}
