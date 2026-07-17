// Avatar da Dra. Denise (IA) — retrato ilustrado em SVG + selo de IA (estrelinha).
export function DeniseAvatar({ size = 40, showAI = true }: { size?: number; showAI?: boolean }) {
  return (
    <span className="relative inline-flex flex-none" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 64 64" className="rounded-full">
        <defs>
          <linearGradient id="da-bg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2A2350" />
            <stop offset="1" stopColor="#141A38" />
          </linearGradient>
          <linearGradient id="da-hair" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#5B4636" />
            <stop offset="1" stopColor="#3B2C22" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="32" fill="url(#da-bg)" />
        {/* ombro / jaleco */}
        <path d="M14 60c2-9 9.5-14 18-14s16 5 18 14v4H14v-4Z" fill="#EDF1FF" />
        <path d="M32 46c-3.4 3.2-6 3.2-6 3.2l3 8h6l3-8s-2.6 0-6-3.2Z" fill="#DBE2F5" />
        {/* pescoço */}
        <path d="M27 40h10v7c0 2.8-2.2 4.6-5 4.6s-5-1.8-5-4.6v-7Z" fill="#E8B48F" />
        {/* rosto */}
        <circle cx="32" cy="30" r="13" fill="#F2C29E" />
        {/* cabelo */}
        <path d="M18 30c0-9 6.4-15 14-15s14 6 14 15c0 2-.4 3.6-1 5 .2-8-4-13-13-13S18.8 27 19 35c-.6-1.4-1-3-1-5Z" fill="url(#da-hair)" />
        <path d="M18 30c1.4-3 3-5 3-5s-1 5-1 9c0 3 .6 5.4.6 5.4L18 36v-6ZM46 30c-1.4-3-3-5-3-5s1 5 1 9c0 3-.6 5.4-.6 5.4L46 36v-6Z" fill="url(#da-hair)" />
        {/* olhos + sorriso */}
        <circle cx="27" cy="30" r="1.6" fill="#3B2C22" />
        <circle cx="37" cy="30" r="1.6" fill="#3B2C22" />
        <path d="M28 35.5c1.6 1.5 6.4 1.5 8 0" stroke="#B9765A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        {/* estetoscópio */}
        <path d="M26 47c-1 5-6 6-6 11" stroke="#8FA0C8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="58.5" r="2.4" fill="#8FA0C8" />
      </svg>
      {showAI && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-gold-grad text-[#251A05]"
          style={{ width: size * 0.42, height: size * 0.42 }}
          title="Inteligência artificial"
        >
          <svg width={size * 0.24} height={size * 0.24} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c.7 4 1.7 6.8 3.5 8.5C17.2 12.3 20 13.3 24 14c-4 .7-6.8 1.7-8.5 3.5C13.7 19.2 12.7 22 12 26c-.7-4-1.7-6.8-3.5-8.5C6.8 15.7 4 14.7 0 14c4-.7 6.8-1.7 8.5-3.5C10.3 8.8 11.3 6 12 2Z" transform="translate(0 -2) scale(.92) translate(1 1)" />
          </svg>
        </span>
      )}
    </span>
  )
}
