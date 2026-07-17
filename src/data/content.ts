// ============================================================
// BabyStar — dados mockados (front-end sem back-end)
// Conteúdo real extraído dos docs oficiais do Método GPS (Denise Gurgel).
// Persona-exemplo: mãe Amanda, bebê Olivia (9 meses) — nomes usados nos docs.
// ============================================================

export const persona = {
  motherName: 'Amanda',
  babyName: 'Olivia',
  babyAgeMonths: 9,
  chronotype: 'Intermediário',
  temperament: 'Anjo',
  learningPct: 75,
}

// ---------- Quiz de temperamento (C1) ----------
export type QuizOption = { letter: 'A' | 'B' | 'C' | 'D' | 'E'; text: string }
export type QuizQuestion = { id: number; prompt: string; options: QuizOption[] }

export const quiz: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Meu bebê:',
    options: [
      { letter: 'A', text: 'Raramente chora' },
      { letter: 'B', text: 'Chora apenas quando está com fome, cansado ou superestimulado' },
      { letter: 'C', text: 'Chora sem motivo aparente' },
      { letter: 'D', text: 'Chora muito alto e vai aumentando até ser atendido' },
      { letter: 'E', text: 'Chora grande parte do tempo' },
    ],
  },
  {
    id: 2,
    prompt: 'Na hora de dormir, meu bebê:',
    options: [
      { letter: 'A', text: 'Fica tranquilo no berço e logo dorme' },
      { letter: 'B', text: 'Dorme facilmente em até 20 minutos' },
      { letter: 'C', text: 'Reclama e parece sonolento, mas não mantém o sono' },
      { letter: 'D', text: 'É muito agitado e precisa ser embalado' },
      { letter: 'E', text: 'Chora muito e resiste ao berço' },
    ],
  },
  {
    id: 3,
    prompt: 'Meu bebê sorri:',
    options: [
      { letter: 'A', text: 'Para tudo e todos' },
      { letter: 'B', text: 'Quando estimulado' },
      { letter: 'C', text: 'Quando estimulado, mas logo chora' },
      { letter: 'D', text: 'Muito e com sons altos' },
      { letter: 'E', text: 'Apenas em situações específicas' },
    ],
  },
  {
    id: 4,
    prompt: 'Quando um desconhecido fala com ele:',
    options: [
      { letter: 'A', text: 'Sorri imediatamente' },
      { letter: 'B', text: 'Fica sério e depois sorri' },
      { letter: 'C', text: 'Geralmente chora' },
      { letter: 'D', text: 'Fica muito agitado' },
      { letter: 'E', text: 'Raramente sorri' },
    ],
  },
  {
    id: 5,
    prompt: 'Durante trocas e banho:',
    options: [
      { letter: 'A', text: 'Fica tranquilo' },
      { letter: 'B', text: 'Fica tranquilo se tudo for calmo' },
      { letter: 'C', text: 'Fica mal-humorado' },
      { letter: 'D', text: 'Se contorce muito' },
      { letter: 'E', text: 'Detesta trocar de roupa' },
    ],
  },
  {
    id: 6,
    prompt: 'Depois de passeios:',
    options: [
      { letter: 'A', text: 'Se adapta imediatamente' },
      { letter: 'B', text: 'Demora um pouco' },
      { letter: 'C', text: 'Fica agitado' },
      { letter: 'D', text: 'Fica superestimulado' },
      { letter: 'E', text: 'Fica bravo e infeliz' },
    ],
  },
]

export type Temperament = {
  key: string
  letter: string
  name: string
  emoji: string
  short: string
  sleep: string
}

export const temperaments: Record<string, Temperament> = {
  A: { key: 'anjo', letter: 'A', name: 'Bebê Anjo', emoji: '😇', short: 'Calmo, previsível, fácil adaptação.', sleep: 'Aceita bem os momentos de dormir e se acalma com os rituais. Responde muito bem à previsibilidade do dia.' },
  B: { key: 'livro', letter: 'B', name: 'Bebê Livro-texto', emoji: '📖', short: 'Responde muito bem à rotina estruturada.', sleep: 'Dorme melhor com horários organizados e rituais consistentes, do jeitinho que os livros descrevem.' },
  C: { key: 'sensivel', letter: 'C', name: 'Bebê Sensível', emoji: '🌙', short: 'Reage forte a estímulos, precisa de ambiente filtrado.', sleep: 'Dorme melhor em ambiente escuro e silencioso, com desaceleração precoce antes do sono.' },
  D: { key: 'energico', letter: 'D', name: 'Bebê Enérgico', emoji: '⚡', short: 'Ativo, precisa gastar energia e desacelerar.', sleep: 'Precisa gastar energia ao longo do dia e desacelerar com rituais calmos antes de dormir.' },
  E: { key: 'irritavel', letter: 'E', name: 'Bebê Irritável', emoji: '🫂', short: 'Emoções intensas, precisa de previsibilidade e acolhimento.', sleep: 'Precisa de rotina previsível e muito acolhimento para relaxar e aprofundar o sono.' },
}

// ---------- Registro 48h (C2) ----------
export const sleepLog = [
  { day: 'Dia 1', items: [
    { icon: '☀️', label: 'Despertar', time: '6:42' },
    { icon: '☁️', label: 'Soneca 1', time: '9:05 – 10:20' },
    { icon: '☁️', label: 'Soneca 2', time: '13:10 – 14:25' },
    { icon: '☁️', label: 'Soneca 3', time: '16:40 – 17:15' },
    { icon: '🌙', label: 'Sono noturno', time: '19:20' },
    { icon: '⭐', label: 'Despertar madrugada', time: '2:10' },
  ]},
  { day: 'Dia 2', items: [
    { icon: '☀️', label: 'Despertar', time: '6:55' },
    { icon: '☁️', label: 'Soneca 1', time: '9:20 – 10:30' },
    { icon: '☁️', label: 'Soneca 2', time: '13:05 – 14:10' },
    { icon: '🌙', label: 'Sono noturno', time: '19:05' },
    { icon: '⭐', label: 'Despertar madrugada', time: '1:40' },
    { icon: '⭐', label: 'Despertar madrugada', time: '4:55' },
  ]},
]

// ---------- Rotina personalizada (US 2.2) ----------
export const routine = {
  analysis:
    'Pelos registros desses dois dias, percebo que a Olivia está acumulando pressão de sono excessiva no final da tarde, o que faz com que ela chegue muito cansada ao início da noite. Quando isso acontece, o corpo entra em estado de alerta em vez de descanso profundo — o que explica os despertares noturnos e o sono fragmentado.',
  steps: [
    { icon: '☀️', title: 'Despertar da manhã', time: 'entre 6:30 e 7:00', note: '' },
    { icon: '☁️', title: 'Soneca 1', time: 'entre 9:00 e 9:30', note: 'duração média 1h a 1h30' },
    { icon: '☁️', title: 'Soneca 2', time: 'entre 13:00 e 13:30', note: 'duração média 1h a 1h30' },
    { icon: '☁️', title: 'Soneca 3 (quando necessário)', time: 'entre 16:30 e 17:00', note: '30 a 40 minutos' },
    { icon: '🛁', title: 'Ritual noturno', time: 'entre 18:30 e 19:00', note: '' },
    { icon: '🌙', title: 'Sono noturno', time: 'entre 19:00 e 19:30', note: '' },
  ],
  why: [
    'Constrói a pressão de sono de forma progressiva',
    'Evita cansaço extremo no fim do dia',
    'Facilita adormecer e emendar ciclos',
    'Reduz os despertares noturnos',
  ],
  keyPhrase: 'Vamos organizar a pressão de sono ideal do seu bebê para ele dormir melhor — e você também.',
}

// ---------- Notificações proativas (US 2.4) ----------
export const notifications = [
  { emoji: '🌟', title: 'Entrando na zona de aprofundamento', body: 'O cérebro da Olivia está pronto para o sono profundo. Comece o ritual agora.', when: 'agora' },
  { emoji: '⭐', title: 'Prepare o ritual', body: 'Em 15 minutos a Olivia entra na zona de aprofundamento do sono.', when: '15 min' },
  { emoji: '🌙', title: 'Janela neurológica perdida', body: 'Sem culpa, Amanda. Já recalculei: a próxima zona da Olivia é às 15:40. Se precisar, use o sono em movimento.', when: '13:52' },
  { emoji: '🧸', title: 'Dica de hoje', body: 'Túnel de caixas para a Olivia atravessar engatinhando — gasta energia e constrói a pressão de sono da noite.', when: '10:00' },
  { emoji: '📈', title: 'Rotina pronta!', body: '48h completas! A rotina personalizada da Olivia está pronta.', when: 'ontem' },
]

// ---------- Diário (US 2.7) ----------
export type TrackKind = { key: string; label: string; emoji: string; status: string; done?: boolean }
export const trackKinds: TrackKind[] = [
  { key: 'wake', label: 'Despertar', emoji: '☀️', status: 'Registrado às 6:42', done: true },
  { key: 'nap', label: 'Soneca', emoji: '☁️', status: 'Registrado às 9:05', done: true },
  { key: 'bedtime', label: 'Hora de dormir', emoji: '🌙', status: 'Nada registrado hoje' },
  { key: 'nightwake', label: 'Despertar noturno', emoji: '⭐', status: 'Nada registrado hoje' },
  { key: 'bottle', label: 'Mamadeira', emoji: '🍼', status: 'Registrado às 11:30', done: true },
  { key: 'nursing', label: 'Amamentação', emoji: '🤱', status: 'Registrado às 8:15', done: true },
  { key: 'pumping', label: 'Extração de leite', emoji: '🥛', status: 'Nada registrado hoje' },
  { key: 'solids', label: 'Sólidos', emoji: '🥣', status: 'Registrado às 12:10', done: true },
  { key: 'diaper', label: 'Fralda', emoji: '🧷', status: 'Registrado às 9:40', done: true },
  { key: 'weight', label: 'Peso', emoji: '⚖️', status: '8,4 kg · há 3 dias' },
  { key: 'temp', label: 'Temperatura', emoji: '🌡️', status: 'Nada registrado hoje' },
]

export const trackTimeline = [
  { emoji: '☀️', label: 'Despertar', time: '6:42', detail: 'Começou o dia tranquila' },
  { emoji: '🤱', label: 'Amamentação', time: '8:15', detail: 'Peito esquerdo · 15 min' },
  { emoji: '☁️', label: 'Soneca 1', time: '9:05', detail: '1h15 · sono profundo' },
  { emoji: '🧷', label: 'Fralda', time: '9:40', detail: 'Xixi + cocô' },
  { emoji: '🍼', label: 'Mamadeira', time: '11:30', detail: '120 ml' },
  { emoji: '🥣', label: 'Sólidos', time: '12:10', detail: 'Almoço · aceitou bem' },
]

// ---------- Sons (US 2.6) ----------
export const soundSections = [
  { section: 'Ruídos', items: [
    { name: 'Ruído branco', desc: 'O clássico que abraça', emoji: '🌫️' },
    { name: 'Ruído rosa', desc: 'Graves reforçados', emoji: '🎚️' },
    { name: 'Ruído marrom', desc: 'Frequência profunda, como ondas do mar', emoji: '🌊' },
  ]},
  { section: 'Natureza', items: [
    { name: 'Chuva no telhado', desc: 'Pingos suaves e constantes', emoji: '🌧️' },
    { name: 'Ondas do mar', desc: 'Vai e volta que acalma', emoji: '🏖️' },
    { name: 'Passarinhos', desc: 'Piu, piu, passarinho', emoji: '🐦' },
  ]},
  { section: 'Aconchego', items: [
    { name: 'Batimentos do coração', desc: 'Uma corrente constante de calma', emoji: '❤️' },
    { name: 'No útero', desc: 'Um som familiar para recém-nascidos', emoji: '🫧' },
    { name: 'Xiiiu da mamãe', desc: 'O shhh que todo bebê reconhece', emoji: '🤍' },
  ]},
  { section: 'Em casa', items: [
    { name: 'Secador de cabelo', desc: 'Ar quente e constante', emoji: '💨' },
    { name: 'Máquina de lavar', desc: 'Roda, roda e roda…', emoji: '🌀' },
    { name: 'Aspirador', desc: 'Zumbido que embala', emoji: '🧹' },
  ]},
  { section: 'Canções', items: [
    { name: 'Boa noite, durma bem', desc: 'Canção de ninar de Brahms', emoji: '🎵' },
    { name: 'Brilha, brilha estrelinha', desc: 'O tema da nossa estrela', emoji: '⭐' },
  ]},
]

// ---------- Atividades C3 (US do escopo) ----------
export const activities = {
  title: 'Brincar bem de dia = dormir melhor à noite.',
  babyLine: 'Atividades para a Olivia · 9 meses',
  groups: [
    { title: 'Para o corpo', subtitle: 'gasto de energia', emoji: '🤸', items: [
      'Espaço livre no chão para engatinhar',
      'Brinquedos um pouco mais longe para ela ir buscar',
      '“Cavalinho” na sua perna para fortalecer o tronco',
      'Túnel de caixas para atravessar engatinhando',
    ]},
    { title: 'Para os sentidos', subtitle: 'estímulo sensorial', emoji: '✋', items: [
      'Brinquedos com texturas diferentes',
      'Blocos para empilhar e derrubar',
      'Garrafinhas sensoriais com grãos',
      'Objetos que afundam e flutuam no banho',
    ]},
    { title: 'Para a mente', subtitle: 'cognição', emoji: '🧠', items: [
      'Esconder brinquedos parcialmente e incentivar a busca',
      'Músicas com palmas e movimentos',
      'Bater colheres em potes para ouvir sons',
    ]},
  ],
  connection:
    'Movimento + estímulo certo ao longo do dia = pressão de sono construída naturalmente → sono mais profundo → melhor emenda de ciclos.',
}

// ---------- Chat com a Denise (US 2.1) ----------
export const chat = {
  intro:
    'Seja muito bem-vinda, Amanda! Eu sou a Denise, criada para te ajudar a buscar a pressão de sono ideal da Olivia. Em que posso ajudar hoje?',
  messages: [
    { from: 'bot', text: 'Seja muito bem-vinda, Amanda! Como foi a noite da Olivia?' },
    { from: 'user', text: 'Ela acordou 3x essa madrugada 😞' },
    { from: 'bot', text: 'Amanda, isso tem explicação — e não é culpa sua. Pelos registros, a Olivia chegou na noite com pressão de sono acumulada demais. Vamos ajustar a soneca 3 em 15 minutinhos? Amanhã me conta como foi. 💛' },
  ],
  chips: ['Analisar a madrugada', 'Ajustar rotina', 'Ideias de brincadeira', 'Falar do ritual'],
}

// ---------- Estatísticas ----------
export const stats = {
  totalSleep: '12h10',
  avgSleep: '13h15',
  week: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  dates: ['15/2', '16/2', '17/2', '18/2', '19/2', '20/2', '21/2'],
  sleepCurve: [9.0, 8.4, 8.0, 8.3, 8.9, 9.4, 9.6], // horas hora-de-acordar estilizada
  bedtime: [22.6, 21.7, 21.2, 22.8, 21.9, 20.3, 20.3], // 20-23h
  nightWakings: [3, 3, 2, 2, 1, 1, 1],
}

// ---------- Paywall ----------
export const paywall = {
  benefits: [
    'Rotina personalizada pelo Método GPS',
    'Notificações da zona de aprofundamento',
    'Sons ilimitados para dormir',
    'Chat com a Denise a qualquer hora',
    'Estatísticas completas do sono',
  ],
  monthly: 'R$ 29,90/mês',
  yearly: 'R$ 189,90/ano',
  yearlySave: 'economize 47%',
  guarantee: 'Cancele quando quiser. Sem cobrança nos 7 primeiros dias.',
  socialProof: 'Método aplicado por mais de 11 mil mães',
}

// ---------- Admin ----------
export const adminPrompts = [
  { id: 1, name: 'Camadas (orquestrador)', version: 'v1.4', status: 'Publicado', updated: 'há 2 dias' },
  { id: 2, name: 'Temperamento', version: 'v1.2', status: 'Publicado', updated: 'há 5 dias' },
  { id: 3, name: 'Para IA criar a rotina', version: 'v2.0', status: 'Publicado', updated: 'ontem' },
  { id: 4, name: 'As janelas de sono', version: 'v1.1', status: 'Publicado', updated: 'há 1 semana' },
  { id: 5, name: 'Tabelas de sono e sonecas', version: 'v1.0', status: 'Publicado', updated: 'há 2 semanas' },
  { id: 6, name: 'Entrega da rotina', version: 'v1.3', status: 'Rascunho', updated: 'há 1 hora' },
  { id: 7, name: 'Rotina exemplos — até 3 meses', version: 'v1.0', status: 'Publicado', updated: 'há 3 semanas' },
  { id: 8, name: 'Rotina exemplos — 4 meses a 2 anos', version: 'v1.1', status: 'Publicado', updated: 'há 2 semanas' },
  { id: 9, name: 'Desenvolvimento e brincadeiras', version: 'v1.2', status: 'Publicado', updated: 'há 4 dias' },
  { id: 10, name: 'Orientações por faixa etária', version: 'v1.0', status: 'Rascunho', updated: 'há 3 dias' },
]

export const adminUsers = [
  { mother: 'Amanda', baby: 'Olivia', age: '9 meses', temperament: 'Anjo', layer: 'C3', plan: 'Anual', last: 'hoje' },
  { mother: 'Juliana', baby: 'Theo', age: '4 meses', temperament: 'Enérgico', layer: 'C2', plan: 'Trial', last: 'ontem' },
  { mother: 'Camila', baby: 'Maria Alice', age: '11 meses', temperament: 'Sensível', layer: 'C3', plan: 'Mensal', last: 'há 3 dias' },
  { mother: 'Patrícia', baby: 'Bento', age: '2 meses', temperament: 'Livro-texto', layer: 'C1', plan: 'Trial', last: 'hoje' },
  { mother: 'Fernanda', baby: 'Alice', age: '7 meses', temperament: 'Irritável', layer: 'C2', plan: 'Mensal', last: 'há 1 semana' },
  { mother: 'Beatriz', baby: 'Miguel', age: '5 meses', temperament: 'Anjo', layer: 'C3', plan: 'Anual', last: 'hoje' },
]
