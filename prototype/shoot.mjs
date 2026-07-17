// Screenshot runner — captura cada tela do protótipo BabyStar via Chromium.
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const screens = [
  ['01-splash', '/splash', 430, 900],
  ['02-onboarding', '/onboarding', 430, 900],
  ['03-quiz', '/quiz', 430, 900],
  ['04-resultado', '/resultado', 430, 900],
  ['05-registro-intro', '/registro-intro', 430, 900],
  ['06-registro', '/registro', 430, 900],
  ['07-analise', '/analise', 430, 900],
  ['08-rotina', '/rotina', 430, 900],
  ['09-home', '/app/home', 430, 900],
  ['10-notificacoes', '/notificacoes', 430, 900],
  ['11-timer', '/timer', 430, 900],
  ['12-diario', '/app/diario', 430, 900],
  ['13-sons', '/app/sons', 430, 900],
  ['14-atividades', '/atividades', 430, 900],
  ['15-chat', '/chat', 430, 900],
  ['16-evolucao', '/app/evolucao', 430, 900],
  ['17-paywall', '/paywall', 430, 900],
  ['18-admin-prompts', '/admin/prompts', 1200, 760],
  ['19-admin-usuarias', '/admin/usuarias', 1200, 760],
  ['00-gallery', '/', 1300, 1600],
]

const base = process.env.BASE || 'http://localhost:4173'
const out = process.env.OUT || '/tmp/claude-0/-home-user-babystar/6397a579-0658-57f6-8e2c-afc045d39632/scratchpad/shots'
mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
})
for (const [name, path, w, h] of screens) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
  await page.goto(`${base}/#${path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1600) // deixa animações assentarem
  await page.screenshot({ path: `${out}/${name}.png` })
  await page.close()
  console.log('shot', name)
}
await browser.close()
console.log('done ->', out)
