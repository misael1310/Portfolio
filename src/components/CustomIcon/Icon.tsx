export interface iconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Icon({ src, alt, width = 24, height = 24 }: iconProps) {
  return (
    <img src={src} loading="lazy" alt={alt} width={width} height={height} />
  );
}
