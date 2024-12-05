import { iconProps } from "../CustomIcon/Icon";
import Icon from "../CustomIcon/Icon";

export interface SocialMediaType extends iconProps {
  url: string;
  mediaName: string;
}

interface SocialMediaProps {
  links: SocialMediaType[];
}

export default function SocialMedia({ links }: SocialMediaProps) {
  return (
    <div className="flex items-center gap-5 py-4">
      {links.map((media, index) => (
        <a
          key={index}
          className="flex items-center gap-3"
          href={media.url}
          target="__blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
          />
          <h2 className="text-ebony font-bold">{media.mediaName}</h2>
        </a>
      ))}
    </div>
  );
}
