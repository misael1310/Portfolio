import Picture from "../../../common/Picture";

interface ProjectLoadingCardProps {
  index: string;
  passion: string;
  logo: {
    src: string;
    srcPng: string;
    title: string;
    alt: string;
  };
  isActive: boolean;
}

export default function ProjectLoadingCard({
  index,
  passion,
  logo: { src, srcPng, title, alt },
  isActive,
}: ProjectLoadingCardProps) {
  return (
    <div
      key={index}
      id={`wrapper-${index}`}
      className="flex flex-row flex-wrap"
    >
      <div
        id="Container"
        className="relative max-w-80 aspect-square rounded-lg overflow-hidden group"
      >
        <div className="w-80 lg:w-60 xl:w-80 aspect-square shadow-lg flex flex-col flex-wrap items-center justify-center loading_animation">
          <p
            className={`text-7xl group-hover:hidden ${isActive ? "opacity-0" : "opacity-100"}`}
          >
            {passion}
          </p>
          <p
            className={`text-7xl group-hover:hidden ${isActive ? "opacity-0" : "opacity-100"}`}
          >
            <span className="dots"></span>
          </p>
        </div>
        <div
          id="overlay"
          className={`absolute inset-0 flex flex-col flex-wrap items-center justify-center bg-black bg-opacity-85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flip_card ${isActive ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col flex-wrap gap-2 items-center justify-center px-3">
            <Picture
              srcset={src}
              imgSrc={srcPng}
              imgClass={"h-[72px]"}
              imgAlt={alt}
            />
            <h3 className="text-white text-3xl font-bold">{title}</h3>
            <p className="text-white text-center"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
