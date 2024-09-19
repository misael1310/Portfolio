import Icon from "../../common/CustomIcon/Icon";
import { Icons } from "../../../utils/assets";

const sectionWrapperClasses =
  "row flex flex-wrap w-full sm:justify-center sm:items-center lg:justify-normal lg:items-start";

export function PersonalDetails() {
  return (
    <>
      <div className={`${sectionWrapperClasses} title px-6 lg:px-0`}>
        <h1 className="text-4xl lg:text-5xl text-ebony font-bold text-center sm:text-justify">
          Junior Front End Developer
        </h1>
      </div>

      <div
        className={`${sectionWrapperClasses} px-6 lg:px-0 pt-5 pb-2 lg:pb-0 gap-4 items-center`}
      >
        <div className="flex items-center justify-center gap-1">
          <Icon src={Icons.USER} alt="User Icon" />
          <p>Misael Perez</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Icon src={Icons.LOCATION} alt="Location Icon" />
          <p>Greensboro, United States</p>
        </div>
      </div>
    </>
  );
}
