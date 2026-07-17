import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, Pause, RotateCcw, RotateCw, Maximize2, ChevronLeft, Lock, FileText } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { videoLesson } from '../data/content'

export function ConteudoVideo() {
  const nav = useNavigate()
  const [playing, setPlaying] = useState(true)
  const v = videoLesson
  return (
    <PhoneFrame seed={163} stars={false}>
      {/* player de vídeo */}
      <div className="relative flex-none">
        <div className="relative flex h-[248px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#241C08] via-[#141A38] to-[#0A0F26]">
          {/* estrelinhas de fundo do vídeo */}
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(1.4px 1.4px at 20% 30%,rgba(245,200,107,.7) 50%,transparent 51%),radial-gradient(1.2px 1.2px at 70% 25%,rgba(255,255,255,.6) 50%,transparent 51%),radial-gradient(1px 1px at 45% 60%,rgba(169,178,232,.6) 50%,transparent 51%),radial-gradient(1.3px 1.3px at 82% 68%,rgba(255,255,255,.5) 50%,transparent 51%)' }} />
          <span className="text-6xl">🌙</span>

          {/* topo do player */}
          <button
            onClick={() => nav('/app/conteudo')}
            className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-ink backdrop-blur"
            aria-label="Voltar"
          >
            <ChevronLeft size={20} />
          </button>

          {/* controles centrais */}
          <div className="absolute inset-0 flex items-center justify-center gap-7">
            <button className="text-ink/85"><RotateCcw size={26} /></button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold"
            >
              {playing ? <Pause size={26} fill="currentColor" /> : <Play size={26} fill="currentColor" />}
            </button>
            <button className="text-ink/85"><RotateCw size={26} /></button>
          </div>

          {/* barra de progresso */}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-bold tabular-nums text-ink">{v.current}</span>
              <div className="relative h-1.5 flex-1 rounded-full bg-white/20">
                <div className="absolute inset-y-0 left-0 rounded-full bg-gold" style={{ width: `${v.progressPct}%` }} />
                <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold shadow" style={{ left: `calc(${v.progressPct}% - 6px)` }} />
              </div>
              <span className="text-[11px] font-bold tabular-nums text-ink2">{v.duration}</span>
              <button className="text-ink2"><Maximize2 size={16} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* conteúdo abaixo do vídeo */}
      <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto no-scrollbar px-[22px] pb-5 pt-4">
        <div>
          <span className="bs-label">{v.category}</span>
          <h1 className="mt-1.5 text-[21px] font-extrabold leading-tight">{v.title}</h1>
          <div className="mt-2 flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2A2350] to-[#141A38] text-sm">
              👩🏻‍⚕️
            </span>
            <span className="text-[12.5px] text-ink2">{v.author}</span>
            <span className="text-[12.5px] text-muted">· vídeo {v.duration}</span>
          </div>
        </div>

        <p className="text-[13.5px] leading-relaxed text-ink2">{v.description}</p>

        <button className="flex items-center gap-2 self-start rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 text-[13px] font-bold text-ink2">
          <FileText size={15} className="text-gold" /> Material da aula (PDF)
        </button>

        <p className="mt-1 bs-label">Aulas desta trilha</p>
        <div className="flex flex-col gap-2">
          {v.chapters.map((c) => (
            <div
              key={c.title}
              className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 ${
                c.playing ? 'border-gold/40 bg-gold/[0.08]' : 'border-white/10 bg-white/[0.05]'
              }`}
            >
              <div className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl ${c.playing ? 'bg-gold-grad text-[#251A05]' : 'bg-white/[0.06] text-gold'}`}>
                {c.premium ? <Lock size={15} /> : <Play size={15} fill="currentColor" />}
              </div>
              <div className="flex-1">
                <p className="text-[13.5px] font-bold leading-tight">{c.title}</p>
                <p className="text-[11.5px] text-muted">{c.playing ? 'Tocando agora' : `Vídeo · ${c.time}`}</p>
              </div>
              {c.premium && <span className="rounded-full bg-gold/15 px-2 py-1 text-[10.5px] font-bold text-gold">Premium</span>}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}
