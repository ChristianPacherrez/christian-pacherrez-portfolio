interface IconProps {
  className?: string;
}

export function XIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1386 18.75L8.72425 12.458L3.19808 18.75H0.860161L7.68701 10.9793L0.860161 1.25H6.86262L11.0231 7.18013L16.2359 1.25H18.5738L12.0638 8.66084L19.141 18.75H13.1386ZM15.7421 16.9762H14.1681L4.20771 3.02386H5.78191L9.77112 8.61047L10.461 9.57989L15.7421 16.9762Z"
        fill="currentColor"
      />
    </svg>
  );
}
