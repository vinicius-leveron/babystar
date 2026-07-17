import { Send } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { DeniseAvatar } from '../components/DeniseAvatar'
import { chat } from '../data/content'

export function Chat() {
  return (
    <PhoneFrame seed={121}>
      {/* header com avatar da Denise IA */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 pb-3 pt-1">
        <DeniseAvatar size={44} />
        <div className="flex-1">
          <p className="flex items-center gap-1.5 text-[16px] font-extrabold leading-tight">
            Dra. Denise
            <span className="rounded-full bg-gold/15 px-1.5 py-0.5 text-[9.5px] font-bold text-gold">IA</span>
          </p>
          <p className="flex items-center gap-1 text-[11.5px] text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" /> online agora
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto no-scrollbar px-5 py-3">
        <p className="mx-auto rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-muted">
          IA treinada pela Dra. Denise Gurgel
        </p>
        {chat.messages.map((m, i) =>
          m.from === 'bot' ? (
            <div key={i} className="flex items-end gap-2">
              <DeniseAvatar size={28} showAI={false} />
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
