import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { ScreenHeader } from '../components/ui'
import { stats, persona } from '../data/content'

export function Estatisticas() {
  return (
    <PhoneFrame seed={131}>
      <ScreenHeader title="Evolução" />
      <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto no-scrollbar px-[22px] pb-6 pt-1">
        {/* card sono total — linha */}
        <div className="bs-card">
          <div className="mb-2 flex items-center justify-center">
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[13px] font-bold">
              Sono ontem: <span className="text-gold">{stats.yesterdaySleep}</span>
            </span>
          </div>
          <LineChart data={stats.sleepCurve} labels={stats.week} sub={stats.dates} />
          <p className="mt-2 text-center text-[12.5px] text-ink2">
            Média da semana: <span className="font-bold text-gold">{stats.avgSleep}</span>
          </p>
        </div>

        {/* card despertares — tendência de queda */}
        <div className="rounded-card border border-gold/25 bg-gold/[0.05] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13.5px] font-extrabold">Despertares noturnos</p>
              <p className="text-[12px] text-ok">↓ caindo — pressão de sono melhorando</p>
            </div>
            <div className="flex items-end gap-1">
              {stats.nightWakings.map((n, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-2.5 rounded-full bg-gradient-to-t from-gold-2 to-gold"
                    style={{ height: 8 + n * 12 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* card hora de dormir — barras */}
        <div className="bs-card">
          <p className="mb-3 text-[13.5px] font-extrabold">Hora de dormir</p>
          <BarChart data={stats.bedtime} labels={stats.week} sub={stats.dates} valueLabels={stats.bedtimeLabels} />
        </div>

        <p className="px-2 pb-1 text-center text-[12.5px] leading-relaxed text-ink2">
          A {persona.babyName} está dormindo mais cedo e acordando menos à noite — sinal de que a pressão de sono está
          bem organizada. 💛
        </p>
      </div>
      <TabBar active="stats" />
    </PhoneFrame>
  )
}

function LineChart({ data, labels, sub }: { data: number[]; labels: string[]; sub: string[] }) {
  const w = 300
  const h = 118
  const min = Math.min(...data) - 0.4
  const max = Math.max(...data) + 0.4
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((d - min) / (max - min)) * h
    return [x, y] as const
  })
  const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ')
  const area = `${path} L${w},${h} L0,${h} Z`
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: h }}>
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5C86B" stopOpacity="0.28" />
            <stop offset="1" stopColor="#F5C86B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="rgba(255,255,255,0.07)" strokeDasharray="3 5" />
        ))}
        <path d={area} fill="url(#fill)" />
        <path d={path} fill="none" stroke="#F5C86B" strokeWidth="2.5" strokeLinecap="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={i === 3 ? 4.5 : 2.5} fill={i === 3 ? '#F5C86B' : '#A9B2E8'} />
        ))}
      </svg>
      <Axis labels={labels} sub={sub} />
    </div>
  )
}

function BarChart({
  data,
  labels,
  sub,
  valueLabels,
}: {
  data: number[]
  labels: string[]
  sub: string[]
  valueLabels: string[]
}) {
  const min = Math.min(...data) - 0.3
  const max = Math.max(...data) + 0.3
  return (
    <div>
      <div className="flex h-[124px] items-end justify-between gap-1.5">
        {data.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end">
            <span className="mb-1 text-[9.5px] font-bold text-ink2">{valueLabels[i]}</span>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-lav/40 to-lav"
              style={{ height: `${((d - min) / (max - min)) * 88}px` }}
            />
          </div>
        ))}
      </div>
      <Axis labels={labels} sub={sub} />
    </div>
  )
}

function Axis({ labels, sub }: { labels: string[]; sub: string[] }) {
  return (
    <div className="mt-2 flex justify-between">
      {labels.map((l, i) => (
        <div key={i} className="flex-1 text-center">
          <p className="text-[10.5px] font-bold text-ink2">{l}</p>
          <p className="text-[9.5px] text-muted">{sub[i]}</p>
        </div>
      ))}
    </div>
  )
}
