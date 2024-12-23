export default function LogoIcon() {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 hover:scale-110"
    >
      <rect width="512" height="512" rx="256" fill="url(#paint0_linear)"/>
      <path d="M355.432 161H156.568C146.958 161 139 168.958 139 178.568V333.432C139 343.042 146.958 351 156.568 351H355.432C365.042 351 373 343.042 373 333.432V178.568C373 168.958 365.042 161 355.432 161Z" stroke="white" strokeWidth="12"/>
      <path d="M256 161V351" stroke="white" strokeWidth="12"/>
      <path d="M139 256H373" stroke="white" strokeWidth="12"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB"/>
          <stop offset="1" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
