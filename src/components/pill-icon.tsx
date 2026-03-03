export function PillIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="pill-rg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff2050" />
          <stop offset="100%" stopColor="#cc0030" />
        </linearGradient>
      </defs>
      <g transform="rotate(30 32 32)">
        {/* Red half */}
        <path d="M20,32 L20,18 A12,12 0 0,1 44,18 L44,32 Z" fill="url(#pill-rg)" />
        {/* Shine */}
        <path d="M25,30 L25,20 Q28,12 35,12 L35,30 Z" fill="white" opacity="0.15" />
        {/* Outline */}
        <rect x="20" y="6" width="24" height="52" rx="12" stroke="black" strokeWidth="3" fill="none" />
        {/* Divider */}
        <line x1="20" y1="32" x2="44" y2="32" stroke="black" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
