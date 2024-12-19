import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useFetchPostsQuery } from "../../../features/posts/postsApi-slice";
import { ProjectCard, projectPicture } from "./ProjectCard";
import { PostPageData } from "../../../pages/PostPage/postTypes";
import ProjectsLoading from "./Components/ProjectsLoading";

export default function Projects() {
  const { data, isLoading } = useFetchPostsQuery();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const ANIMATION_DURATION = 6200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const createProjectPicture = (post: PostPageData): projectPicture => ({
    srcset: post.bannerPicture,
    imgSrc: "",
    imgAlt: post.bannerAlt,
  });

  if (!isAnimationComplete || isLoading) return <ProjectsLoading />;
  return (
    <section
      id="projects"
      className="max-w-screen-xl m-auto pt-20 -mt-20 transition-all"
    >
      <div className="flex flex-col flex-wrap justify-center -mt-20 md:-mt-10 pb-10">
        <div className="my-10 px-6">
          <h2 className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
            {data?.map((Post) => {
              const { idpost, post_title } = Post;

              return (
                <Link key={idpost} to={`post/${String(idpost)}`}>
                  <ProjectCard
                    title={post_title}
                    picture={createProjectPicture(Post)}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
