// Ícone/logotipo BabyStar — estrela de 4 pontas com brilho (assinatura da marca)
export function StarLogo({ size = 64, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`star-glow ${className}`}
      aria-label="BabyStar"
    >
      <path
        d="M32 6c1.8 10.8 4.6 18.4 9.4 22.9C46.1 33.2 53 35.4 62 36.6 53 38.8 46.1 41 41.4 45.5 36.6 50 33.8 57.4 32 68c-1.8-10.6-4.6-18-9.4-22.5C17.9 41 11 38.8 2 36.6 11 35.4 17.9 33.2 22.6 28.9 27.4 24.4 30.2 16.8 32 6Z"
        transform="translate(0 -3) scale(.94)"
        fill="url(#bs-star)"
      />
      <circle cx="49" cy="14" r="2.2" fill="#F5C86B" opacity=".9" />
      <circle cx="13" cy="49" r="1.6" fill="#A9B2E8" opacity=".9" />
      <defs>
        <linearGradient id="bs-star" x1="10" y1="8" x2="52" y2="58">
          <stop stopColor="#FBDF9E" />
          <stop offset=".55" stopColor="#F5C86B" />
          <stop offset="1" stopColor="#E8A94E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <StarLogo size={size + 8} />
      <span style={{ fontSize: size }} className="font-extrabold tracking-[-0.3px] text-ink">
        Baby<span className="text-gold">Star</span>
      </span>
    </div>
  )
}
