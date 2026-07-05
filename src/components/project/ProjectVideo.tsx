interface ProjectVideoProps {
  src: string;
  className?: string;
}

/**
 * Standard video player for every case study: autoplay muted + loop + inline,
 * with the essential native controls (play/pause, seek, volume) but no
 * fullscreen or picture-in-picture escape hatch. Reuse this component for any
 * future project's video so the behavior never diverges between case studies.
 */
export function ProjectVideo({ src, className }: ProjectVideoProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      controlsList="nofullscreen"
      disablePictureInPicture
      preload="auto"
      aria-label="Demostración en video del proyecto"
      className={className}
    >
      <source src={src} />
    </video>
  );
}
