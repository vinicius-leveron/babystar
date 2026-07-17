import { Send } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { ScreenHeader } from '../components/ui'
import { chat } from '../data/content'

export function Chat() {
  return (
    <PhoneFrame seed={121}>
      <ScreenHeader back title="Dra. Denise" />
      <div className="px-5 pb-1">
        <span className="bs-chip-on">IA treinada pela Dra. Denise Gurgel</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto no-scrollbar px-5 py-3">
        {chat.messages.map((m, i) =>
          m.from === 'bot' ? (
            <div key={i} className="flex items-end gap-2">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#2A2350] to-[#141A38] text-sm">
                👩🏻‍⚕️
              </span>
              <div className="max-w-[78%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-[13.5px] leading-snug text-ink">
                {m.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="max-w-[78%] rounded-2xl rounded-br-md bg-gold-grad px-3.5 py-2.5 text-[13.5px] leading-snug text-[#251A05]">
                {m.text}
              </div>
            </div>
          ),
        )}
      </div>

      <div className="border-t border-white/[0.06] px-4 pb-4 pt-3">
        <div className="mb-2.5 flex gap-2 overflow-x-auto no-scrollbar">
          {chat.chips.map((c) => (
            <span key={c} className="bs-chip flex-none">
              {c}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-4 pr-2">
          <span className="flex-1 text-[14px] text-muted">Escreva para a Denise…</span>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-grad text-[#251A05]">
            <Send size={17} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}
