interface iconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Icon(props: iconProps) {
  return (
    <img
      src={props.src}
      loading="lazy"
      alt={props.alt}
      width={props.width}
      height={props.height}
    ></img>
  );
}
