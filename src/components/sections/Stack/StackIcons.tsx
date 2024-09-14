import { Stack } from "./StackIcon";
import { StackIcon } from "./StackIcon";

interface StackIconsProps {
  stacks: Stack[];
}

export default function StackIcons({ stacks }: StackIconsProps) {
  return (
    <>
      {stacks.map((stack) => (
        <StackIcon key={stack.stackName} stack={stack} />
      ))}
    </>
  );
}
