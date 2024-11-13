import { ProjectCard, ProjectCardProps, projectPicture } from "./ProjectCard";

//LOREM DATA
const picture: projectPicture = {
  srcset: "https://i.ibb.co/VNxV40M/239-400x400.webp",
  imgSrc:
    "https://fastly.picsum.photos/id/239/400/400.jpg?hmac=T8bNU3_e202n6I087QufFaJA3mh1pDYpe8vLh9eyERM",
  imgAlt: "Alt Text",
};

const projectCard: ProjectCardProps = {
  title: "Project Title",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ex adipisci omnis, debitis quas saepe.",
  picture,
};

export default function Projects() {
  const { title, description, picture } = projectCard;
  return (
    <div className="flex flex-col flex-wrap justify-center -mt-20 pb-10">
      <div className="flex flex-wrap justify-center my-10">
        <h2 className="text-4xl lg:text-5xl text-ebony font-bold">Projects</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ProjectCard
                key={index}
                title={title}
                description={description}
                picture={picture}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
