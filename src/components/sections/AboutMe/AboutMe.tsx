import Picture from "../../common/Picture";
import { aboutMeContent } from "../../../data/aboutMeData";
import { Images } from "../../../utils/assets";

export default function AboutMe() {
  const {
    ABOUT_ME: { WEBP, JPG, ALT },
  } = Images;

  return (
    <section id="aboutMe" className="max-w-screen-xl m-auto lg:pt-10">
      <div
        id="aboutMe_wrapper"
        className="flex flex-wrap justify-center items-center py-8 px-6"
      >
        <div id="aboutMe_desc" className="w-full lg:w-1/2">
          <h2 className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
            About Me
          </h2>
          {aboutMeContent.map(({ id, fragments }) => (
            <p key={id} className="my-5 text-lg md:px-9 lg:px-0">
              {fragments.map((fragment, index) =>
                fragment.bold ? (
                  <b key={index}>{fragment.text}</b>
                ) : (
                  <span key={index}>{fragment.text}</span>
                ),
              )}
            </p>
          ))}
        </div>
        <div
          id="aboutMe_picture"
          className="flex justify-around w-full lg:w-1/2"
        >
          <Picture
            srcset={WEBP}
            imgSrc={JPG}
            imgClass="rounded-lg"
            imgAlt={ALT}
            imgWidth={400}
            imgHeight={400}
          />
        </div>
      </div>
    </section>
  );
}
