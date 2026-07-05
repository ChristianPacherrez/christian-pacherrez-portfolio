interface BracketsHeartIconProps {
  className?: string;
}

export function BracketsHeartIcon({ className }: BracketsHeartIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8AFFD8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20" />
      <path d="M13.8272 8.5C15.3926 8.5 16.4444 9.99 16.4444 11.38C16.4444 14.195 12.079 16.5 12 16.5C11.921 16.5 7.55556 14.195 7.55556 11.38C7.55556 9.99 8.60741 8.5 10.1728 8.5C11.0716 8.5 11.6593 8.955 12 9.355C12.3407 8.955 12.9284 8.5 13.8272 8.5Z" />
    </svg>
  );
}
