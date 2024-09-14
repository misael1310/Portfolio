const baseH3Title = "text-xl font-bold text-white";
import Icon from "../../CustomIcon/Icon";

export interface Stack {
  stackName: string;
  src: string;
}

interface StackIconProps {
  stack: Stack;
}

export function StackIcon({ stack }: StackIconProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center p-4 rounded-lg bg-slate-700 w-full`}
    >
      <Icon src={stack.src} alt={`${stack.src} Logo`} width={64} height={64} />
      <h3 className={`${baseH3Title} mt-2 radius text-center`}>
        {stack.stackName}
      </h3>
    </div>
  );
}
