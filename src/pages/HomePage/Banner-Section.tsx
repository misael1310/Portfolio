import classNames from "classnames";
import Icon from "../../components/CustomIcon";
import Picture from "../../components/Picture";
import { SocialMediaType } from "../../components/SocialMedia/SocialMedia";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const socialLinks: SocialMediaType[] = [
  {
    url: "https://github.com/misael1310",
    mediaName: "Github Profile",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png",
    alt: "Github Logo",
    width: 24,
    height: 24,
  },
  {
    url: "https://linkedin.com/in/misael-perez-732a4814a/",
    mediaName: "Linkedin",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    alt: "Linkedin Logo",
    width: 24,
    height: 24,
  },
];

export default function HomePageBanner() {
  const personalDetailsClasses =
    "row flex flex-wrap w-full sm:justify-center sm:items-center lg:justify-normal lg:items-start";
  return (
    <div className="flex flex-wrap justify-center">
      <div className="col w-full lg:w-1/3 flex justify-center">
        <div className="w-72 h-72 rounded-full overflow-hidden dark:border-ebony dark:border-2">
          <Picture
            srcset="https://i.ibb.co/r7K5cKB/Profile.webp"
            imgSrc="https://i.ibb.co/JywVGH8/Profile.jpg"
            imgClass="aspect-square object-cover w-72 h-72"
            imgAlt="Misael Perez Picture"
            imgWidth={288}
            imgHeight={288}
          />
        </div>
      </div>
      <div className="col w-full lg:w-2/3 mt-6">
        <div
          className={classNames(personalDetailsClasses, "title px-6 lg:px-0")}
        >
          <h1 className="text-4xl lg:text-5xl text-ebony font-bold text-center sm:text-justify">
            Junior Front End Developer
          </h1>
        </div>

        <div
          className={classNames(
            personalDetailsClasses,
            "px-6 lg:px-0 pt-5 pb-2 lg:pb-0 gap-4 items-center"
          )}
        >
          <div className="flex items-center justify-center gap-1">
            <Icon
              src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
              alt="User Icon"
              width={24}
              height={24}
            />
            <p>Misael Perez</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Icon
              src="https://www.svgrepo.com/show/532540/location-pin-alt-1.svg"
              alt="Location Icon"
              width={24}
              height={24}
            />
            <p>Greensboro, United States</p>
          </div>
        </div>

        <div
          className={classNames(
            personalDetailsClasses,
            "mt-3 lg:mt-6 px-6 lg:px-0"
          )}
        >
          <div className="w-full md:w-3/4">
            <p className="text-ebony text-lg">
              I am a positive person who always seeks to compete with myself in
              order to become the best version of myself.
            </p>
            <div className="flex items-center gap-5 py-4">
              <SocialMedia links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
