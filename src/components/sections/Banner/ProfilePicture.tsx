import Picture from "../../common/Picture";
import { Images } from "../../../utils/assets";

export function ProfilePicture() {
  const {
    PROFILE: { WEBP, JPG, ALT },
  } = Images;
  return (
    <div className="w-72 h-72 rounded-full overflow-hidden">
      <Picture
        srcset={WEBP}
        imgSrc={JPG}
        imgClass="aspect-square object-cover w-72 h-72"
        imgAlt={ALT}
        imgWidth={288}
        imgHeight={288}
      />
    </div>
  );
}
