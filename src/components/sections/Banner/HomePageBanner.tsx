import { ProfilePicture } from "./ProfilePicture";
import { PersonalDetails } from "./PersonalDetails";
import SocialMedia from "../../common/SocialMedia";
import { socialLinks } from "../../../data/socialLinksData";
import { Description } from "./Description";

export default function HomePageBanner() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/3 flex justify-center">
        <ProfilePicture />
      </div>
      <div className="w-full lg:w-2/3 mt-6">
        <PersonalDetails />
        <Description />
        <div className="flex items-center gap-5 py-4 px-6 lg:px-0">
          <SocialMedia links={socialLinks} />
        </div>
      </div>
    </div>
  );
}
