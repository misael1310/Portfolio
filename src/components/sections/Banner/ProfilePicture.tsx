import Picture from "../../common/Picture";
import { Images } from "../../../utils/assets";

export function ProfilePicture() {
  return (
    <div className="w-72 h-72 rounded-full overflow-hidden dark:border-ebony dark:border-2">
      <Picture
        srcset={Images.PROFILE_PICTURE_WEBP}
        imgSrc={Images.PROFILE_PICTURE_JPG}
        imgClass="aspect-square object-cover w-72 h-72"
        imgAlt="Misael Perez Picture"
        imgWidth={288}
        imgHeight={288}
      />
    </div>
  );
}
