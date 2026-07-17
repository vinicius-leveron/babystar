import { useNavigate } from 'react-router-dom'
import { Play, Lightbulb, ArrowRight } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { article } from '../data/content'

export function ConteudoArtigo() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={162}>
      <ScreenHeader back title="" />
      <Body scroll>
        {/* capa */}
        <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#241C08] via-[#1A2350] to-[#141A38]">
          <span className="text-5xl">🌙</span>
          <button className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold">
            <Play size={24} fill="currentColor" />
          </button>
        </div>

        <div>
          <span className="bs-label">{article.category}</span>
          <h1 className="mt-1.5 text-[24px] font-extrabold leading-tight">{article.title}</h1>
          <div className="mt-2 flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2A2350] to-[#141A38] text-sm">
              👩🏻‍⚕️
            </span>
            <span className="text-[12.5px] text-ink2">{article.author}</span>
            <span className="text-[12.5px] text-muted">· {article.time}</span>
          </div>
        </div>

        <p className="text-[15px] font-semibold leading-relaxed text-ink">{article.lead}</p>

        {article.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed text-ink2">
            {p}
          </p>
        ))}

        <div className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/[0.06] p-4">
          <Lightbulb size={18} className="mt-0.5 flex-none text-gold" />
          <p className="text-[13px] leading-relaxed text-ink2">
            <span className="font-bold text-gold">Dica da Denise: </span>
            {article.tip}
          </p>
        </div>

        <button
          onClick={() => nav('/app/conteudo')}
          className="mb-1 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-left"
        >
          <div>
            <p className="text-[11.5px] text-muted">A seguir</p>
            <p className="text-[14px] font-bold">{article.nextUp}</p>
          </div>
          <ArrowRight size={18} className="text-gold" />
        </button>
      </Body>
    </PhoneFrame>
  )
}
