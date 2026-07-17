# BabyStar ⭐

App de sono infantil guiado pelo **Método GPS (Guia de Sono Profundo)** da Dra. Denise Gurgel. Diferente de apps que só dizem “hora da soneca”, o BabyStar identifica a **janela neurológica** — o momento em que o cérebro do bebê está pronto para o sono profundo — a partir de 3 camadas:

- **C1 · Temperamento** — quiz de 6 perguntas (Bebê Anjo / Livro-texto / Sensível / Enérgico / Irritável)
- **C2 · Pressão de sono** — registro de 48h da rotina do bebê
- **C3 · Gasto energético** — atividades por faixa etária que constroem a pressão de sono

Este repositório contém o **protótipo de front-end navegável** (sem back-end), para validação de jornada e telas.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (design system BabyStar — céu noturno + estrela-guia dourada)
- **Framer Motion** (animações: anel do dia, transições)
- **React Router** (navegação entre telas, modo `HashRouter`)
- **lucide-react** (ícones)
- Dados 100% mockados em `src/data/content.ts`

## Como rodar

```bash
npm install
npm run dev        # http://localhost:5173
```

- A rota `/` é a **galeria da jornada** — todas as telas em molduras de iPhone/browser, organizadas por fase. Clique em qualquer tela para abri-la em tela cheia.
- `npm run build` gera o site estático em `dist/` (base relativa — serve de qualquer caminho).

## Deploy na Vercel

O projeto já está pronto para deploy (config em `vercel.json`). Duas formas:

**1. Painel da Vercel (recomendado, sem CLI)**
1. Acesse [vercel.com/new](https://vercel.com/new) e faça login com o GitHub.
2. Importe o repositório `vinicius-leveron/babystar`.
3. Selecione o branch `claude/napper-landing-page-exhojt` (ou faça merge para a branch padrão primeiro).
4. A Vercel detecta o Vite automaticamente — **Build:** `npm run build`, **Output:** `dist`. É só clicar em **Deploy**.
5. Cada novo push nesse branch redeploya sozinho.

**2. CLI (a partir da sua máquina)**
```bash
npm i -g vercel
vercel            # preview
vercel --prod     # produção
```

> Observação: é um front-end estático (sem back-end). Todo o conteúdo é mockado — nada é persistido.

## Telas (19) e cobertura das histórias

17 telas de app + 2 de painel admin. Mapeamento das US do ClickUp:

| US | Onde |
|----|------|
| US 2.1 — Integração com IA | Tela 15 · Chat com a Denise |
| US 2.2 — Engine de rotina por idade | Tela 8 · Rotina personalizada |
| US 2.3 — Tela principal com rotina | Tela 9 · Home (anel do dia) |
| US 2.4 — Notificações proativas | Tela 10 · Notificações |
| US 2.5 — Timer de soneca play/pause/stop | Tela 11 · Timer |
| US 2.6 — Biblioteca de ruídos brancos | Tela 13 · Sons |
| US 2.7 — Diário (mamada, fralda, peso, despertares) | Tela 12 · Diário |
| US 2.8 — Editor de prompts no admin | Tela 18 · Admin · Prompts |
| US 2.9 — Listagem/busca de usuárias | Tela 19 · Admin · Usuárias |

## Estrutura

```
src/
  components/   # PhoneFrame, BrowserFrame, StatusBar, TabBar, DayRing, StarLogo, StarField, ui
  data/         # content.ts — todo o conteúdo (do Método GPS)
  screens/      # 19 telas + registry.tsx (metadados/jornada) + Gallery.tsx
  App.tsx       # rotas (galeria + tela cheia)
prototype/      # material de referência: content.md, design tokens, shoot.mjs (screenshots)
```

## Identidade visual

Céu noturno (`#0B1026`) com **estrela-guia dourada** (`#F5C86B`) como assinatura — quente e acolhedora, diferenciando do roxo/lavanda do Napper. Tipografia arredondada; tom de voz mãe-pra-mãe com autoridade da Dra. Denise; sempre chamando mãe e bebê pelo nome. Tokens completos em `tailwind.config.js` e `src/index.css`.

> Conteúdo baseado nos documentos oficiais do Método GPS. Preços e textos comerciais são placeholders a validar com o negócio.
