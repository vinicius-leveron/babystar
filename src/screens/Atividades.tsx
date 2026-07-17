import { Sparkles } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { activities } from '../data/content'

export function Atividades() {
  return (
    <PhoneFrame seed={111} scroll>
      <ScreenHeader back title="Atividades" />
      <Body scroll>
        <div className="bs-card-gold">
          <p className="text-[15px] font-extrabold leading-snug">{activities.title}</p>
          <p className="mt-1 text-[12.5px] text-muted">{activities.babyLine}</p>
        </div>

        {activities.groups.map((g) => (
          <div key={g.title} className="bs-card">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-lg">{g.emoji}</span>
              <div>
                <p className="text-[14.5px] font-extrabold leading-tight">{g.title}</p>
                <p className="text-[11.5px] text-lav">{g.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {g.items.map((it) => (
                <div key={it} className="flex items-start gap-2 text-[13.5px] text-ink2">
                  <Sparkles size={14} className="mt-0.5 flex-none text-gold" />
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-lav/20 bg-lav/[0.06] p-4">
          <p className="text-[13px] leading-relaxed text-ink2">{activities.connection}</p>
        </div>
      </Body>
    </PhoneFrame>
  )
}
