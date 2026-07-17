import { useNavigate } from 'react-router-dom'
import { Play, FileText, Lock } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { ScreenHeader } from '../components/ui'
import { contentHub } from '../data/content'

export function Conteudo() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={161}>
      <ScreenHeader title="Aprender" />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-[22px] pb-4 pt-1">
        {/* destaque — aula em vídeo */}
        <button
          onClick={() => nav('/conteudo/video')}
          className="mb-4 flex flex-col overflow-hidden rounded-2xl border border-gold/25 bg-gold/[0.06] text-left"
        >
          <div className="relative flex h-[120px] items-center justify-center bg-gradient-to-br from-[#241C08] via-[#1A2350] to-[#141A38] text-4xl">
            🌙
            <span className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold">
              <Play size={22} fill="currentColor" />
            </span>
            <span className="absolute bottom-2 right-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10.5px] font-bold text-ink backdrop-blur">4:00</span>
          </div>
          <div className="p-4">
            <span className="bs-label">Aula em vídeo · Dra. Denise</span>
            <p className="mt-1 text-[16px] font-extrabold leading-tight">O que é pressão de sono</p>
            <p className="mt-1 text-[12.5px] text-ink2">De mãe pra mãe: o conceito que faz a rotina funcionar.</p>
          </div>
        </button>

        {contentHub.map((sec) => (
          <div key={sec.section} className="mb-4">
            <p className="mb-2.5 bs-label">{sec.section}</p>
            <div className="flex flex-col gap-2">
              {sec.items.map((it) => (
                <button
                  key={it.title}
                  onClick={() => nav(it.kind === 'vídeo' ? '/conteudo/video' : '/conteudo/artigo')}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-3 text-left"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.06] text-gold">
                    {it.kind === 'vídeo' ? <Play size={18} fill="currentColor" /> : <FileText size={18} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-bold leading-tight">{it.title}</p>
                    <p className="text-[11.5px] text-muted">
                      {it.kind === 'vídeo' ? 'Vídeo' : 'Leitura'} · {it.time}
                    </p>
                  </div>
                  {it.premium && (
                    <span className="flex items-center gap-1 rounded-full bg-gold/15 px-2 py-1 text-[10.5px] font-bold text-gold">
                      <Lock size={11} /> Premium
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <TabBar active="aprender" />
    </PhoneFrame>
  )
}
