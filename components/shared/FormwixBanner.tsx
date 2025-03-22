import FormWizBadge from "./FormwixBadge";

export default function FormwixBanner() {
  return (
    <div className="relative">
      <FormWizBadge />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
        <rect width="800" height="300" fill="#f5f5f7" rx="8" />
        <g fill="#e0e0e5">
          <circle cx="50" cy="30" r="3" />
          <circle cx="90" cy="60" r="2" />
          <circle cx="150" cy="40" r="4" />
          <circle cx="200" cy="20" r="2" />
          <circle cx="250" cy="50" r="3" />
          <circle cx="300" cy="30" r="2" />
          <circle cx="350" cy="70" r="3" />
          <circle cx="400" cy="40" r="2" />
          <circle cx="450" cy="20" r="3" />
          <circle cx="500" cy="50" r="2" />
          <circle cx="550" cy="30" r="4" />
          <circle cx="600" cy="60" r="2" />
          <circle cx="650" cy="40" r="3" />
          <circle cx="700" cy="20" r="2" />
          <circle cx="750" cy="50" r="3" />

          <circle cx="50" cy="100" r="2" />
          <circle cx="100" cy="130" r="3" />
          <circle cx="150" cy="110" r="2" />
          <circle cx="200" cy="140" r="4" />
          <circle cx="250" cy="120" r="2" />
          <circle cx="300" cy="150" r="3" />
          <circle cx="350" cy="130" r="2" />
          <circle cx="400" cy="160" r="3" />
          <circle cx="450" cy="140" r="2" />
          <circle cx="500" cy="170" r="4" />
          <circle cx="550" cy="150" r="2" />
          <circle cx="600" cy="180" r="3" />
          <circle cx="650" cy="160" r="2" />
          <circle cx="700" cy="190" r="3" />
          <circle cx="750" cy="170" r="2" />
        </g>
        <rect
          x="180"
          y="75"
          width="100"
          height="100"
          rx="10"
          fill="white"
          stroke="#e0e0e5"
          stroke-width="1"
        />
        <g transform="translate(205, 96) scale(1.8)">
          <path
            d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"
            fill="#4a6cf7"
            transform="scale(0.12)"
          />
        </g>
        <text
          x="320"
          y="130"
          font-family="Arial, sans-serif"
          font-size="40"
          font-weight="bold"
          fill="#333"
        >
          Formwix
        </text>
        <text
          x="320"
          y="155"
          font-family="Arial, sans-serif"
          font-size="16"
          fill="#666"
        >
          Forms made easy
        </text>
      </svg>
    </div>
  );
}
