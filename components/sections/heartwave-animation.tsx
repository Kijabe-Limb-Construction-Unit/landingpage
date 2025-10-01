"use client"

export function HeartbeatAnimation() {
  return (
    <div className="absolute inset-0 border">
      <svg width="100%" height="150" viewBox="0 0 800 200" className="overflow-visible">
        {/* Extended horizontal lines */}
        <path
          d="M 0 100 L 200 100 L 220 100 L 230 40 L 240 160 L 250 100 L 260 60 L 270 140 L 280 100 L 290 100 L 800 100"
          fill="none"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="heartbeat-line"
        />
      </svg>

      <style jsx>{`
        .heartbeat-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 3s ease-in-out infinite;
        }
        
        .heartbeat-dot {
          filter: drop-shadow(0 0 8px #10b981);
        }
        
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}
