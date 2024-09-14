import { iconProps } from '../../CustomIcon/Icon';

// Interface
interface StackIcons extends Omit<iconProps, 'alt'> {
  stackName: string;
}

//Hardcoded Data
export const stackData: StackIcons[] = [
  { stackName: 'React', src: 'https://www.svgrepo.com/show/452092/react.svg' },
  {
    stackName: 'JavaScript',
    src: 'https://www.svgrepo.com/show/349419/javascript.svg',
  },
  {
    stackName: 'Redux',
    src: 'https://www.svgrepo.com/show/452093/redux.svg',
  },
  {
    stackName: 'Html 5',
    src: 'https://www.svgrepo.com/show/452228/html-5.svg',
  },
  {
    stackName: 'TypeScript',
    src: 'https://www.svgrepo.com/show/349540/typescript.svg',
  },
  {
    stackName: 'CSS 3',
    src: 'https://www.svgrepo.com/show/452185/css-3.svg',
  },
  {
    stackName: 'MySql',
    src: 'https://www.svgrepo.com/show/439233/mysql.svg',
  },
  {
    stackName: 'Tailwind CSS',
    src: 'https://www.svgrepo.com/show/374118/tailwind.svg',
  },
];
