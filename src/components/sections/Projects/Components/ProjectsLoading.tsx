import { useState, useEffect } from "react";
import { PROJECTS_CARDS_LOADING } from "../../../../utils/assets";
import ProjectLoadingCard from "./ProjectLoadingCard";
import "../../../../pages/PostPage/Styles/PostLoading.css";

export default function ProjectsLoading() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const nextCardDuration = 1000;
  const fadeOutDuration = 500;

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      const hideTimeout = setTimeout(() => {
        setCurrentCardIndex(
          (prevIndex) => (prevIndex + 1) % PROJECTS_CARDS_LOADING.length,
        );
      }, fadeOutDuration);

      return () => {
        clearTimeout(hideTimeout);
      };
    }, nextCardDuration);

    return () => {
      clearTimeout(showTimeout);
    };
  }, [currentCardIndex, fadeOutDuration]);

  return (
    <section
      id="projects"
      className="max-w-screen-xl m-auto pt-20 -mt-20 transition-all"
    >
      <div className="flex flex-col flex-wrap justify-center -mt-20 md:-mt-10 pb-10">
        <div className="my-10 px-6">
          <h2 className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
            Loading<span className="dots"></span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
            {PROJECTS_CARDS_LOADING.map(({ passion, logo }, index) => (
              <ProjectLoadingCard
                key={index}
                index={String(index)}
                logo={logo}
                passion={passion}
                isActive={index === currentCardIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
