// Monta o HTML self-contained do Artifact de aprovação (telas embutidas em data URI).
import { readFileSync, writeFileSync } from 'node:fs'

const ART = '/tmp/claude-0/-home-user-babystar/6397a579-0658-57f6-8e2c-afc045d39632/scratchpad/art'
const OUT = '/home/user/babystar/prototype/aprovacao.html'

const b64 = (f) => `data:image/jpeg;base64,${readFileSync(`${ART}/${f}`).toString('base64')}`

const phases = [
  { id: 'A', name: 'Chegada', emotion: 'Expectativa e insegurança' },
  { id: 'B', name: 'Rotina no minuto 1', emotion: 'Valor imediato — a rotina sai da 1ª interação, sem esperar 48h' },
  { id: 'C', name: 'Acompanhar o dia', emotion: 'O app tira a conta da cabeça da mãe' },
  { id: 'D', name: 'Aprender', emotion: 'Conteúdo da Dra. Denise — a mãe destrava com apoio' },
  { id: 'E', name: 'Personalizar', emotion: 'Método GPS — deixa a rotina mais precisa (opcional)' },
  { id: 'F', name: 'Evolução & conta', emotion: 'Hábito, evolução e monetização' },
  { id: 'G', name: 'Painel admin', emotion: 'Operação interna (desktop)' },
]

const screens = [
  { n: 1, f: '01-splash.jpg', phase: 'A', title: 'Boas-vindas', cap: 'A estrela e a promessa: o bebê permanecer dormindo.' },
  { n: 2, f: '02-onboarding.jpg', phase: 'A', title: 'Cadastro afetivo', cap: 'Nome da mãe, do bebê, nascimento e sexo.' },

  { n: 3, f: '03-despertar.jpg', phase: 'B', title: 'Despertar de hoje', cap: '“Que horas a Olivia acordou?” — a rotina sai daqui, na hora.' },
  { n: 4, f: '04-rotina.jpg', phase: 'B', title: 'Rotina do dia', us: 'US 2.2', cap: 'Gerada da idade + despertar. Sem esperar 48h.' },
  { n: 5, f: '05-home.jpg', phase: 'B', title: 'Home · anel do dia', us: 'US 2.3', cap: 'Zona de aprofundamento + a rotina do dia.' },
  { n: 6, f: '06-notificacoes.jpg', phase: 'B', title: 'Notificações proativas', us: 'US 2.4', cap: '30 min antes, na hora, e “2h sem novidade”.' },

  { n: 7, f: '07-timer.jpg', phase: 'C', title: 'Timer de soneca', us: 'US 2.5', cap: 'Play / pause / stop → recalcula as próximas.' },
  { n: 8, f: '08-diario.jpg', phase: 'C', title: 'Diário de anotações', us: 'US 2.7', cap: 'Mamada, fralda, peso, banho, despertares.' },
  { n: 9, f: '09-sons.jpg', phase: 'C', title: 'Biblioteca de sons', us: 'US 2.6', cap: 'Ruídos, natureza, canções + mini-player.' },
  { n: 10, f: '10-meusdias.jpg', phase: 'C', title: 'Meus dias', cap: 'O dia a dia calibra a rotina — sem gate de 48h.' },

  { n: 11, f: '11-conteudo.jpg', phase: 'D', title: 'Aprender · hub', cap: 'Aulas e artigos da Dra. Denise (texto + vídeo).' },
  { n: 12, f: '12-video.jpg', phase: 'D', title: 'Aula em vídeo', cap: 'Player com controles, progresso e trilha de aulas.' },
  { n: 13, f: '13-artigo.jpg', phase: 'D', title: 'Aula / artigo', cap: 'Leitor de conteúdo com dica e “a seguir”.' },

  { n: 14, f: '14-quiz.jpg', phase: 'E', title: 'Temperamento (opcional)', cap: 'Camada 1 do GPS — deixa a rotina mais precisa.' },
  { n: 15, f: '15-resultado.jpg', phase: 'E', title: 'Resultado do temperamento', cap: 'O perfil do bebê e o que muda no sono.' },
  { n: 16, f: '16-atividades.jpg', phase: 'E', title: 'Atividades do dia', cap: 'Camada 3 · gasto de energia por idade.' },

  { n: 17, f: '17-evolucao.jpg', phase: 'F', title: 'Estatísticas', cap: 'Sono total, hora de dormir, despertares.' },
  { n: 18, f: '18-chat.jpg', phase: 'F', title: 'Chat com a Dra. Denise', us: 'US 2.1', cap: 'IA treinada pela especialista.' },
  { n: 19, f: '19-perfil.jpg', phase: 'F', title: 'Perfil', cap: 'Bebê, rotina, notificações, assinatura.' },
  { n: 20, f: '20-paywall.jpg', phase: 'F', title: 'Paywall', cap: '7 dias grátis, planos em R$, garantia.' },

  { n: 21, f: '21-admin-prompts.jpg', phase: 'G', title: 'Editor de prompts', cap: 'CRUD dos prompts das camadas GPS.', wide: true },
  { n: 22, f: '22-admin-aulas.jpg', phase: 'G', title: 'Aulas & conteúdo', cap: 'Inserir e gerir aulas em vídeo e artigos.', wide: true },
  { n: 23, f: '23-admin-usuarias.jpg', phase: 'G', title: 'Usuárias', cap: 'Listagem e busca de usuárias.', wide: true },
]

const card = (s) => `
  <a class="card ${s.wide ? 'wide' : ''}" href="${b64(s.f)}" target="_blank" rel="noopener">
    <div class="shot ${s.wide ? 'shot-wide' : ''}">
      <img loading="lazy" src="${b64(s.f)}" alt="${s.title}">
    </div>
    <div class="meta">
      <p class="ct"><span class="num">${String(s.n).padStart(2, '0')}</span>${s.title}</p>
      <p class="cc">${s.cap}</p>
    </div>
  </a>`

const section = (p) => {
  const items = screens.filter((s) => s.phase === p.id)
  return `
  <section class="phase">
    <div class="phase-head">
      <h2>Fase ${p.id} · ${p.name}</h2>
      <span>${p.emotion}</span>
    </div>
    <div class="grid ${p.id === 'G' ? 'grid-wide' : ''}">${items.map(card).join('')}</div>
  </section>`
}

const usTable = [
  ['US 2.1', 'Integração com modelo de IA', 'Chat com a Dra. Denise'],
  ['US 2.2', 'Engine de rotina por idade', 'Rotina do dia'],
  ['US 2.3', 'Tela principal com a rotina', 'Home · anel do dia'],
  ['US 2.4', 'Notificações proativas', 'Notificações'],
  ['US 2.5', 'Timer de soneca (play/pause/stop)', 'Timer de soneca'],
  ['US 2.6', 'Biblioteca de ruídos brancos', 'Biblioteca de sons'],
  ['US 2.7', 'Diário (mamada, fralda, peso…)', 'Diário de anotações'],
  ['US 2.8', 'Editor de prompts no admin', 'Editor de prompts'],
  ['US 2.9', 'Listagem/busca de usuárias', 'Usuárias'],
]

const html = `<div class="wrap">
  <header class="hero">
    <div class="brand">
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 6c1.8 10.8 4.6 18.4 9.4 22.9C46.1 33.2 53 35.4 62 36.6 53 38.8 46.1 41 41.4 45.5 36.6 50 33.8 57.4 32 68c-1.8-10.6-4.6-18-9.4-22.5C17.9 41 11 38.8 2 36.6 11 35.4 17.9 33.2 22.6 28.9 27.4 24.4 30.2 16.8 32 6Z" fill="url(#g)"/><defs><linearGradient id="g" x1="10" y1="8" x2="52" y2="58"><stop stop-color="#FBDF9E"/><stop offset=".55" stop-color="#F5C86B"/><stop offset="1" stop-color="#E8A94E"/></linearGradient></defs></svg>
      <span>Baby<b>Star</b></span>
      <span class="tag">Protótipo · v2</span>
    </div>
    <h1>Jornada &amp; telas para aprovação</h1>
    <p class="lede">App de sono infantil guiado pelo <b>Método GPS</b> da Dra. Denise Gurgel — identidade própria: céu noturno e uma <b>estrela-guia dourada</b>. Modelo <b>valor no minuto 1</b>: a mãe informa o horário que o bebê acordou e recebe a rotina do dia na hora — sem esperar 48h. São <b>20 telas de app + 3 de painel admin</b>, cobrindo todos os módulos do produto. Clique em qualquer tela para vê-la em tamanho cheio.</p>
    <div class="facts">
      <div><b>23</b><span>telas desenhadas</span></div>
      <div><b>Minuto 1</b><span>rotina sem espera de 48h</span></div>
      <div><b>+ Aprender</b><span>módulo de conteúdo da Denise</span></div>
      <div><b>Admin</b><span>prompts · aulas · usuárias</span></div>
    </div>
  </header>

  ${phases.map(section).join('')}

  <section class="phase">
    <div class="phase-head"><h2>Cobertura das histórias</h2><span>ClickUp US 2.x → tela</span></div>
    <div class="ustable">
      ${usTable.map(([u, d, t]) => `<div class="usrow"><span class="ub">${u}</span><span class="ud">${d}</span><span class="ut">${t}</span></div>`).join('')}
    </div>
  </section>

  <footer class="foot">
    <p><b>Identidade visual.</b> Céu noturno <code>#0B1026</code> + estrela-guia dourada <code>#F5C86B</code> como assinatura (diferencia do roxo/lavanda do Napper). Tipografia arredondada; sempre chamando mãe e bebê pelo nome; vocabulário do método (“pressão de sono”, “zona de aprofundamento”). Sem promessa de cura.</p>
    <p><b>Como é feito.</b> Front-end real, sem back-end — React + Vite + TypeScript + Tailwind + Framer Motion. Protótipo navegável no repositório <code>babystar</code> e publicado na Vercel. Dados mockados (nada é persistido ainda).</p>
    <p class="fine">Persona de exemplo: mãe Amanda, bebê Olivia (9 meses). Preços e textos comerciais são placeholders a validar.</p>
  </footer>
</div>`

const style = `
:root{
  --bg0:#05081A; --bg1:#0B1026; --bg2:#111A38; --card:#0F1730;
  --gold:#F5C86B; --gold2:#E8A94E; --peach:#F0A987; --lav:#A9B2E8;
  --ink:#F4F3FF; --ink2:#C3C9E4; --muted:#7C86AE; --line:rgba(255,255,255,.08);
  --rounded:ui-rounded,'SF Pro Rounded','Nunito','Varela Round','Quicksand',system-ui,sans-serif;
}
*{box-sizing:border-box}
body{margin:0}
.wrap{
  font-family:var(--rounded); color:var(--ink);
  background:
    radial-gradient(120% 60% at 80% -5%, rgba(125,140,240,.10), transparent 60%),
    radial-gradient(90% 50% at 10% 0%, rgba(245,200,107,.07), transparent 55%),
    linear-gradient(180deg,var(--bg1),var(--bg0));
  min-height:100vh; padding:clamp(20px,5vw,64px);
}
.wrap::before{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:radial-gradient(1.3px 1.3px at 15% 12%,rgba(255,255,255,.5) 50%,transparent 51%),radial-gradient(1.5px 1.5px at 72% 8%,rgba(245,200,107,.6) 50%,transparent 51%),radial-gradient(1px 1px at 42% 22%,rgba(169,178,232,.5) 50%,transparent 51%),radial-gradient(1.2px 1.2px at 88% 30%,rgba(255,255,255,.4) 50%,transparent 51%),radial-gradient(1px 1px at 25% 40%,rgba(255,255,255,.35) 50%,transparent 51%);}
.wrap>*{position:relative;z-index:1}
.hero{max-width:1180px;margin:0 auto 48px}
.brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:800;letter-spacing:-.3px}
.brand b{color:var(--gold);font-weight:800}
.brand .tag{margin-left:8px;font-size:11.5px;font-weight:700;color:var(--muted);border:1px solid var(--line);border-radius:99px;padding:3px 10px;letter-spacing:.3px}
.hero h1{font-size:clamp(30px,5vw,46px);line-height:1.06;letter-spacing:-.6px;margin:26px 0 0;text-wrap:balance}
.lede{max-width:700px;font-size:16px;line-height:1.6;color:var(--ink2);margin:16px 0 0}
.lede b{color:var(--ink);font-weight:700}
.facts{display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}
.facts>div{flex:1;min-width:150px;border:1px solid var(--line);border-radius:16px;padding:14px 16px;background:rgba(255,255,255,.03)}
.facts b{display:block;font-size:19px;color:var(--gold)}
.facts span{display:block;font-size:12.5px;color:var(--muted);margin-top:3px}
.phase{max-width:1180px;margin:0 auto 46px}
.phase-head{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;border-bottom:1px solid var(--line);padding-bottom:12px;margin-bottom:26px}
.phase-head h2{font-size:21px;font-weight:800;color:var(--gold);margin:0}
.phase-head span{font-size:13.5px;color:var(--muted)}
.grid{display:flex;flex-wrap:wrap;gap:30px 26px}
.card{text-decoration:none;color:inherit;display:block;width:190px}
.card.wide{width:min(520px,100%)}
.shot{border-radius:24px;overflow:hidden;border:1px solid var(--line);box-shadow:0 18px 40px rgba(0,0,0,.4);position:relative;transition:transform .18s ease,box-shadow .18s ease}
.shot img{display:block;width:100%;height:auto}
.card:hover .shot{transform:translateY(-4px);box-shadow:0 24px 54px rgba(0,0,0,.55)}
.us{position:absolute;top:10px;right:10px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#251A05;font-size:11px;font-weight:800;padding:4px 9px;border-radius:99px;box-shadow:0 3px 10px rgba(0,0,0,.4)}
.meta{margin-top:12px}
.ct{margin:0;font-size:14.5px;font-weight:800;display:flex;align-items:baseline;gap:7px}
.num{color:var(--muted);font-variant-numeric:tabular-nums;font-size:13px}
.cc{margin:4px 0 0;font-size:12.5px;line-height:1.4;color:var(--muted)}
.grid-wide{gap:30px}
.ustable{display:flex;flex-direction:column;gap:8px;max-width:760px}
.usrow{display:grid;grid-template-columns:76px 1fr 1fr;gap:14px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:11px 14px;background:rgba(255,255,255,.02)}
.ub{font-size:12px;font-weight:800;color:var(--gold)}
.ud{font-size:13.5px;color:var(--ink2)}
.ut{font-size:13.5px;color:var(--ink);font-weight:700}
.foot{max-width:1180px;margin:8px auto 0;border-top:1px solid var(--line);padding-top:22px;display:flex;flex-direction:column;gap:12px}
.foot p{margin:0;font-size:13.5px;line-height:1.6;color:var(--ink2);max-width:820px}
.foot b{color:var(--ink)}
.foot code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:6px;color:var(--gold)}
.fine{color:var(--muted);font-size:12.5px}
@media (max-width:560px){.card{width:100%;max-width:320px;margin:0 auto}.usrow{grid-template-columns:66px 1fr;gap:8px}.usrow .ut{grid-column:2}}
`

// O Artifact envelopa head/body automaticamente: emitimos só <style> + conteúdo.
const doc = `<style>${style}</style>\n${html}`

writeFileSync(OUT, doc)
console.log('wrote', OUT, (doc.length / 1024 / 1024).toFixed(2), 'MB')
