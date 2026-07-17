import { TrendingUp, TrendingDown, Users, DollarSign, Repeat, LogOut } from 'lucide-react'
import { BrowserFrame } from '../components/BrowserFrame'
import { adminDashboard as d } from '../data/content'

const kpiIcon = [Users, DollarSign, Repeat, LogOut]

export function AdminDashboard() {
  return (
    <BrowserFrame url="admin.babystar.app/painel" active="Painel">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-extrabold">Painel do negócio</h1>
          <p className="text-[13px] text-muted">Visão da Denise · últimos 30 dias</p>
        </div>
        <span className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[12.5px] font-bold text-ink2">Fevereiro 2026</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto no-scrollbar pr-1">
        {/* KPIs */}
        <div className="grid grid-cols-4 gap-3">
          {d.kpis.map((k, i) => {
            const Icon = kpiIcon[i]
            return (
              <div key={k.label} className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/12 text-gold">
                    <Icon size={16} />
                  </span>
                  <span className={`flex items-center gap-0.5 text-[11.5px] font-bold ${k.good ? 'text-ok' : 'text-alert'}`}>
                    {k.good ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {k.delta}
                  </span>
                </div>
                <p className="text-[22px] font-extrabold leading-none">{k.value}</p>
                <p className="mt-1 text-[12px] text-muted">{k.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* crescimento */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
            <p className="text-[13.5px] font-extrabold">Crescimento de assinantes</p>
            <p className="mb-2 text-[12px] text-muted">6 meses · +190% no período</p>
            <Growth data={d.growth} labels={d.growthMonths} />
          </div>

          {/* funil */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
            <p className="text-[13.5px] font-extrabold">Funil de ativação</p>
            <p className="mb-3 text-[12px] text-muted">Onde a mãe avança — e onde trava</p>
            <div className="flex flex-col gap-2">
              {d.funnel.map((f) => (
                <div key={f.step} className="flex items-center gap-3">
                  <span className="w-[132px] flex-none text-[12.5px] text-ink2">{f.step}</span>
                  <div className="h-5 flex-1 overflow-hidden rounded-md bg-white/[0.05]">
                    <div className="flex h-full items-center justify-end rounded-md bg-gradient-to-r from-gold-2 to-gold pr-2" style={{ width: `${f.pct}%` }}>
                      <span className="text-[10.5px] font-extrabold text-[#251A05]">{f.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* engajamento por módulo */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
            <p className="mb-3 text-[13.5px] font-extrabold">Engajamento por módulo</p>
            <div className="flex flex-col gap-2">
              {d.engagement.map((e) => (
                <div key={e.name} className="flex items-center gap-3">
                  <span className="w-[118px] flex-none text-[12.5px] text-ink2">{e.name}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-lav" style={{ width: `${e.pct}%` }} />
                  </div>
                  <span className="w-8 flex-none text-right text-[12px] font-bold text-ink2">{e.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* aulas + planos + idade */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
              <p className="mb-2.5 text-[13.5px] font-extrabold">Aulas mais assistidas</p>
              <div className="flex flex-col gap-2">
                {d.topAulas.map((a, i) => (
                  <div key={a.title} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-gold/15 text-[11px] font-extrabold text-gold">{i + 1}</span>
                    <span className="flex-1 truncate text-[12.5px] font-bold">{a.title}</span>
                    <span className="text-[12px] text-muted">{a.views} views</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
                <p className="mb-2 text-[12.5px] font-extrabold">Por plano</p>
                <div className="flex h-2.5 overflow-hidden rounded-full">
                  <div className="bg-gold" style={{ width: `${d.plans.anual}%` }} />
                  <div className="bg-lav" style={{ width: `${d.plans.mensal}%` }} />
                </div>
                <div className="mt-2 flex justify-between text-[11.5px]">
                  <span className="text-gold">Anual {d.plans.anual}%</span>
                  <span className="text-lav">Mensal {d.plans.mensal}%</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
                <p className="mb-2 text-[12.5px] font-extrabold">Idade do bebê</p>
                <div className="flex items-end justify-between gap-1.5" style={{ height: 48 }}>
                  {d.byAge.map((a) => (
                    <div key={a.faixa} className="flex flex-1 flex-col items-center justify-end gap-1">
                      <div className="w-full rounded-t bg-gradient-to-t from-lav/40 to-gold" style={{ height: `${a.pct * 1.4}px` }} />
                      <span className="text-[9px] text-muted">{a.faixa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function Growth({ data, labels }: { data: number[]; labels: string[] }) {
  const w = 380
  const h = 110
  const max = Math.max(...data) * 1.08
  const min = Math.min(...data) * 0.9
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / (max - min)) * h
    return [x, y] as const
  })
  const line = pts.map((p, i) => (i ? `L${p[0]},${p[1]}` : `M${p[0]},${p[1]}`)).join(' ')
  const area = `${line} L${w},${h} L0,${h} Z`
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: h }}>
        <defs>
          <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5C86B" stopOpacity="0.3" />
            <stop offset="1" stopColor="#F5C86B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="rgba(255,255,255,0.06)" />
        ))}
        <path d={area} fill="url(#dg)" />
        <path d={line} fill="none" stroke="#F5C86B" strokeWidth="2.5" strokeLinecap="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 4 : 2.5} fill="#F5C86B" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between">
        {labels.map((l) => (
          <span key={l} className="text-[10px] text-muted">{l}</span>
        ))}
      </div>
    </div>
  )
}
