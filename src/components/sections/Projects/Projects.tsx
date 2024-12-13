import { Link } from "react-router";
import { useFetchPostsQuery } from "../../../features/posts/postsApi-slice";
import { ProjectCard, projectPicture } from "./ProjectCard";

export default function Projects() {
  const { data, error, isLoading } = useFetchPostsQuery();
  if (isLoading) return "Loading... Please Wait.";
  if (error) return "Something went wrong.";
  return (
    <section id="projects" className="max-w-screen-xl m-auto pt-20 -mt-20">
      <div className="flex flex-col flex-wrap justify-center -mt-20 md:-mt-10 pb-10">
        <div className="my-10 px-6">
          <h2 className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
            {data?.map((Post) => {
              const { idpost, bannerPicture, bannerAlt, post_title } = Post;
              const picture: projectPicture = {
                srcset: bannerPicture,
                imgSrc: "",
                imgAlt: bannerAlt,
              };
              return (
                <Link key={idpost} to={`post/${String(idpost)}`}>
                  <ProjectCard
                    title={post_title}
                    description={""}
                    picture={picture}
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
