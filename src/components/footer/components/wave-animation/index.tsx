const WaveAnimation = () => {
  return (
    <div>
      <svg
        className="relative max-h-32 w-full bg-transparent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,178,0,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,178,0,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,178,0,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,178,0,1)" />
        </g>
      </svg>
    </div>
  )
}

export default WaveAnimation
