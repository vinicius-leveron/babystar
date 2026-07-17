// Barra de status estilo iOS (9:41 + sinal/wifi/bateria)
export function StatusBar({ dark = false }: { dark?: boolean }) {
  const fill = dark ? '#0B1026' : '#F4F3FF'
  return (
    <div
      className="relative z-40 flex h-[52px] flex-none items-end justify-between px-[30px] pb-1.5 text-[15px] font-bold"
      style={{ color: fill }}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="1" fill={fill} />
          <rect x="5" y="5" width="3" height="7" rx="1" fill={fill} />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" fill={fill} />
          <rect x="15" y="0" width="3" height="12" rx="1" fill={fill} opacity=".4" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M8.5 9.6a2.2 2.2 0 0 1 2.1 1.5L8.5 12 6.4 11.1a2.2 2.2 0 0 1 2.1-1.5Z" fill={fill} />
          <path d="M3.4 8.2a7.2 7.2 0 0 1 10.2 0l-1.6 1.6a5 5 0 0 0-7 0L3.4 8.2Z" fill={fill} />
          <path d="M.5 5.3a11.3 11.3 0 0 1 16 0l-1.6 1.6a9 9 0 0 0-12.8 0L.5 5.3Z" fill={fill} />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={fill} opacity=".5" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill="#F5C86B" />
          <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4Z" fill={fill} opacity=".5" />
        </svg>
      </span>
    </div>
  )
}
