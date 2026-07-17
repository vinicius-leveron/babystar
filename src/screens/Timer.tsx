import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Square } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { persona } from '../data/content'

export function Timer() {
  const [running, setRunning] = useState(true)
  const [sec, setSec] = useState(47 * 60 + 12)
  const ref = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      ref.current = window.setInterval(() => setSec((s) => s + 1), 1000)
    }
    return () => {
      if (ref.current) window.clearInterval(ref.current)
    }
  }, [running])

  const mm = String(Math.floor(sec / 60)).padStart(2, '0')
  const ss = String(sec % 60).padStart(2, '0')

  return (
    <PhoneFrame seed={81}>
      <ScreenHeader back title="Soneca em andamento" />
      <Body>
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="text-[15px] font-bold text-gold">{persona.babyName} está no sono profundo 💤</p>

          <div className="relative my-6 flex h-64 w-64 items-center justify-center">
            <div className={`absolute inset-0 rounded-full border-[3px] border-gold/60 ${running ? 'animate-[pulse_2.5s_ease-in-out_infinite]' : ''}`} style={{ boxShadow: '0 0 30px rgba(245,200,107,0.18)' }} />
            <div className="absolute inset-6 rounded-full border border-white/10 bg-white/[0.03]" />
            <div className="text-center">
              <p className="font-mono text-[52px] font-extrabold leading-none tracking-tight">
                {mm}:{ss}
              </p>
              <p className="mt-2 text-[13px] text-muted">início 13:08</p>
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[13px] text-ink2">
            Faixa esperada: <span className="font-bold text-gold">1h a 1h30</span> para a idade da {persona.babyName}
          </div>
        </div>

        <div className="flex items-end justify-center gap-8 pb-4">
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={() => setRunning((r) => !r)}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.07] text-ink"
            >
              {running ? <Pause size={26} /> : <Play size={26} />}
            </button>
            <span className="text-[11px] font-bold text-muted">{running ? 'Pausar' : 'Retomar'}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold">
              <Square size={30} fill="currentColor" />
            </button>
            <span className="text-[11px] font-bold text-gold">Encerrar</span>
          </div>
        </div>
        <p className="pb-4 text-center text-[12.5px] text-muted">
          Ao encerrar, eu salvo a soneca e <span className="font-semibold text-ink2">recalculo os horários das próximas</span> — você não precisa fazer conta.
        </p>
      </Body>
    </PhoneFrame>
  )
}
