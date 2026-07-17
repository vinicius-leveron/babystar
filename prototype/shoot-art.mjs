// Gera JPEGs leves das telas para embutir no Artifact de aprovação.
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const screens = [
  ['01-splash', '/splash', 430, 900],
  ['02-onboarding', '/onboarding', 430, 900],
  ['03-despertar', '/despertar', 430, 900],
  ['04-rotina', '/rotina', 430, 900],
  ['05-home', '/app/home', 430, 900],
  ['06-notificacoes', '/notificacoes', 430, 900],
  ['07-timer', '/timer', 430, 900],
  ['08-diario', '/app/diario', 430, 900],
  ['09-sons', '/app/sons', 430, 900],
  ['10-meusdias', '/registro', 430, 900],
  ['11-conteudo', '/app/conteudo', 430, 900],
  ['12-artigo', '/conteudo/artigo', 430, 900],
  ['13-quiz', '/quiz', 430, 900],
  ['14-resultado', '/resultado', 430, 900],
  ['15-atividades', '/atividades', 430, 900],
  ['16-evolucao', '/app/evolucao', 430, 900],
  ['17-chat', '/chat', 430, 900],
  ['18-perfil', '/app/perfil', 430, 900],
  ['19-paywall', '/paywall', 430, 900],
  ['20-admin-prompts', '/admin/prompts', 1200, 760],
  ['21-admin-usuarias', '/admin/usuarias', 1200, 760],
]

const base = process.env.BASE || 'http://localhost:4173'
const out = process.env.OUT || '/tmp/claude-0/-home-user-babystar/6397a579-0658-57f6-8e2c-afc045d39632/scratchpad/art'
mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
})
for (const [name, path, w, h] of screens) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1.5 })
  await page.goto(`${base}/?bare=1#${path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${out}/${name}.jpg`, type: 'jpeg', quality: 82 })
  await page.close()
}
await browser.close()
console.log('done ->', out)
