import StackIcons from "./StackIcons";
import { stackData } from "./stackData";

export default function StackSection() {
  return (
    <div className="flex flex-wrap bg-ebony justify-center space-y-10 py-10 px-6 mt-14">
      <div className="w-full pt-10 pb-1">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
          Stack
        </h2>
      </div>

      <div className="grid grid-cols-stack xl:grid-cols-stack-4 2xl:grid-cols-stack justify-center gap-2 auto-cols-auto container">
        <StackIcons stacks={stackData} />
      </div>
    </div>
  );
}
