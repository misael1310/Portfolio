import { BannerSection, Media, breakPoints } from "../postTypes";

type PostBannerProps = BannerSection;

export default function PostBanner({
  bannerBackground,
  bannerPicture,
  bannerAlt,
  bannerSources,
}: PostBannerProps) {
  const breakPoints: breakPoints[] = ["initial", "sm", "md", "lg", "xl"];

  const medias: Media = {
    initial: "(max-width: 639px)",
    sm: "(min-width: 640px) and (max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 1023px)",
    lg: "(min-width: 1024px) and (max-width: 1279px)",
    xl: "(min-width: 1280px)",
  };

  return (
    <section id="post_banner" className="pt-4 md:pt-0">
      <div
        id="parallax_container"
        className={`relative bg-black/[0.7] bg-fixed bg-center bg-no-repeat bg-cover bg-blend-soft-light`}
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div
          id="parallax_content"
          className="max-w-screen-lg m-auto flex justify-center"
        >
          <div
            id="parallax_banner_container"
            className="w-11/12 md:w-auto max-w-screen-lg pt-10 pb-10 md:pb-0 md:-mb-16"
          >
            <picture className="aspect-[20/28] sm:aspect-[28/39] md:aspect-[31/36] lg:aspect-[31/27] xl:aspect-[33/23]">
              {breakPoints.map((bp) => (
                <source
                  key={bp}
                  srcSet={bannerSources[bp]}
                  media={medias[bp]}
                />
              ))}
              <img
                src={bannerPicture}
                className="rounded-xl w-full h-auto"
                alt={bannerAlt}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
