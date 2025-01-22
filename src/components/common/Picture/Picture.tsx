export interface pictureProps {
  srcset: string;
  imgSrc: string;
  imgClass: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
}

export default function Picture({
  srcset,
  imgSrc,
  imgClass,
  imgAlt,
  imgWidth,
  imgHeight,
}: pictureProps) {
  //Really Basic check of the image type
  //TODO: Please improve the checkType capability in future revisions.
  const checkType = (
    src: pictureProps["srcset"],
    type: string = "webp",
  ): boolean => {
    const pattern = new RegExp(`.${type}(?:[?].*)?$`, "i");
    return pattern.test(src);
  };

  const ErrorMessage = ({ message }: { message: string }) => {
    console.error(message);
    return <p className="text-red-500">{message}</p>;
  };

  const isWebp = checkType(srcset);

  if (!isWebp) {
    return <ErrorMessage message="Please provide a valid webp image." />;
  }

  if (srcset === imgSrc) {
    return <ErrorMessage message="You cannot use the WebP image twice." />;
  }

  return (
    <picture>
      <source srcSet={srcset} type="image/webp" />
      <img
        src={imgSrc}
        className={imgClass}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
      />
    </picture>
  );
}
