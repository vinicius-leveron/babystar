import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { Wordmark } from '../components/StarLogo'
import { screens, phases, type Phase } from './registry'

const phaseEmotion: Record<Phase, string> = {
  'A · Chegada': 'Expectativa e insegurança',
  'B · Temperamento': 'Curiosidade — “meu bebê é único”',
  'C · Pressão de sono': 'Esforço recompensado — “o app entende meu bebê”',
  'D · GPS entregue': 'Momento aha — “existe uma causa oculta e agora tenho um guia”',
  'E · Vida com o app': 'Hábito e fidelização',
  'F · Admin': 'Operação interna (desktop)',
}

export function Gallery() {
  return (
    <div className="min-h-screen bg-sky-grad px-6 py-10 md:px-12">
      {/* hero */}
      <header className="mx-auto mb-10 max-w-[1200px]">
        <Wordmark size={26} />
        <h1 className="mt-6 max-w-[760px] text-[34px] font-extrabold leading-tight tracking-[-0.5px] md:text-[44px]">
          Jornada e telas do <span className="text-gradient-gold">BabyStar</span>
        </h1>
        <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-ink2">
          App de sono infantil guiado pelo Método GPS da Dra. Denise Gurgel. Protótipo navegável — <b className="font-semibold text-ink">teste o app</b> percorrendo o fluxo completo, ou clique em qualquer tela abaixo para abri-la direto. 17 telas de app + 2 de painel admin, cobrindo as histórias US 2.1 a 2.9.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/splash"
            className="flex items-center gap-2 rounded-full bg-gold-grad px-6 py-3 text-[15px] font-extrabold text-[#251A05] shadow-gold transition hover:brightness-105"
          >
            <Play size={17} fill="currentColor" /> Testar app
          </Link>
          <span className="text-[13px] text-muted">começa na tela de boas-vindas e avança tela a tela</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {['Método GPS', 'Pressão de sono', 'Zona de aprofundamento', 'IA da Denise'].map((t) => (
            <span key={t} className="bs-chip">{t}</span>
          ))}
        </div>
      </header>

      {/* jornada por fases */}
      {phases.map((phase) => {
        const items = screens.filter((s) => s.phase === phase)
        return (
          <section key={phase} className="mx-auto mb-14 max-w-[1200px]">
            <div className="mb-5 flex items-baseline gap-3 border-b border-white/[0.08] pb-3">
              <h2 className="text-[20px] font-extrabold text-gold">Fase {phase}</h2>
              <span className="text-[13.5px] text-muted">{phaseEmotion[phase]}</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-10">
              {items.map((s) => (
                <ScreenCard key={s.path} s={s} />
              ))}
            </div>
          </section>
        )
      })}

      <footer className="mx-auto max-w-[1200px] border-t border-white/[0.08] pt-6 text-[12.5px] text-muted">
        BabyStar · protótipo de front-end (sem back-end) · React + Vite + Tailwind + Framer Motion. Conteúdo baseado
        nos documentos oficiais do Método GPS.
      </footer>
    </div>
  )
}

function ScreenCard({ s }: { s: (typeof screens)[number] }) {
  const isAdmin = s.kind === 'admin'
  return (
    <Link to={s.path} className="group block">
      <div className="relative">
        {/* thumbnail: escala a tela real dentro de um contêiner */}
        <div
          className={`overflow-hidden rounded-[26px] ring-1 ring-white/[0.06] transition group-hover:ring-gold/40 ${
            isAdmin ? 'h-[210px] w-[336px]' : 'h-[300px] w-[173px]'
          }`}
        >
          <div
            className="origin-top-left"
            style={{
              transform: isAdmin ? 'scale(0.30)' : 'scale(0.443)',
              width: isAdmin ? 1120 : 390,
              height: isAdmin ? 700 : 844,
            }}
          >
            <s.Component />
          </div>
        </div>
        {s.us && (
          <span className="absolute -top-2.5 right-3 rounded-full bg-gold-grad px-2.5 py-1 text-[11px] font-extrabold text-[#251A05] shadow-md">
            {s.us}
          </span>
        )}
      </div>
      <div className={`mt-3 ${isAdmin ? 'w-[336px]' : 'w-[173px]'}`}>
        <p className="flex items-center gap-1.5 text-[14px] font-extrabold">
          <span className="text-muted">{String(s.n).padStart(2, '0')}</span>
          {s.title}
          <ArrowRight size={14} className="opacity-0 transition group-hover:opacity-100" />
        </p>
        <p className="mt-0.5 text-[12px] leading-snug text-muted">{s.caption}</p>
      </div>
    </Link>
  )
}
