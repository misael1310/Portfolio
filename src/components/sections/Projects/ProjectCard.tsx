import Picture from "../../common/Picture";
import { pictureProps } from "../../common/Picture/Picture";

export type projectPicture = Omit<
  pictureProps,
  "imgClass" | "imgWidth" | "imgHeight"
>;

export interface ProjectCardProps {
  title: string;
  picture: projectPicture;
  description?: string;
}

function ProjectCard({
  title,
  description,
  picture: { srcset, imgSrc, imgAlt },
}: ProjectCardProps) {
  return (
    <div id={`wrapper-${title}`} className="flex flex-row flex-wrap">
      <div
        id="Container"
        className="relative max-w-80 aspect-square rounded-lg overflow-hidden group"
      >
        <Picture
          srcset={srcset}
          imgSrc={imgSrc}
          imgClass="w-full h-full object-cover aspect-square"
          imgAlt={imgAlt}
        />
        <div
          id="overlay"
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-85 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="flex flex-col gap-2 items-center justify-center px-3">
            <h3 className="text-white text-3xl font-bold">{title}</h3>
            <p className="text-white text-center">{description}</p>
            <div className="viewProject">
              <button className="py-3 px-4 m-3 rounded-md bg-sky-900 text-white">
                View more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
