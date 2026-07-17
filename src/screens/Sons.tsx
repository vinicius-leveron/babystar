import { Pause, Moon } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { ScreenHeader } from '../components/ui'
import { soundSections } from '../data/content'

export function Sons() {
  return (
    <PhoneFrame seed={101}>
      <ScreenHeader title="Sons" />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-[22px] pb-4 pt-1">
        {soundSections.map((sec) => (
          <div key={sec.section} className="mb-4">
            <p className="mb-2.5 bs-label">{sec.section}</p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {sec.items.map((s) => (
                <div
                  key={s.name}
                  className="flex w-[128px] flex-none flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                >
                  <div className="mb-2 flex h-[76px] items-center justify-center rounded-xl bg-gradient-to-br from-[#20285A] to-[#141A38] text-[36px]">
                    {s.emoji}
                  </div>
                  <p className="text-[13.5px] font-extrabold leading-tight">{s.name}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* mini-player persistente */}
      <div className="mx-4 mb-2 flex items-center gap-3 rounded-2xl border border-white/[0.16] bg-[#181F44]/95 px-4 py-3 shadow-card backdrop-blur-md">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#20285A] to-[#141A38] text-xl">
          ⭐
        </div>
        <div className="flex-1">
          <p className="text-[13.5px] font-extrabold leading-tight">Brilha, brilha estrelinha</p>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/3 rounded-full bg-gold" />
            </div>
            <span className="flex items-center gap-1 text-[11px] text-muted">
              <Moon size={12} /> 30 min
            </span>
          </div>
        </div>
        <button className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold-grad text-[#251A05]">
          <Pause size={20} fill="currentColor" />
        </button>
      </div>
      <TabBar active="sons" />
    </PhoneFrame>
  )
}
