// ====================
// data/skillsData.js
// ====================
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiMysql, 
  SiPytorch, SiFastapi, SiFlask, SiTailwindcss, SiPython, SiDocker, SiGit,
  SiNumpy, SiPandas, SiScikitlearn, SiBlockchaindotcom, SiSolidity
} from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

export const skillsData = {
  'ML/AI': [
    { icon: SiPython, name: 'Python', color: 'text-blue-500', level: 92 },
    { icon: SiPytorch, name: 'PyTorch', color: 'text-orange-600', level: 85 },
    { icon: SiNumpy, name: 'NumPy', color: 'text-blue-600', level: 88 },
    { icon: SiPandas, name: 'Pandas', color: 'text-blue-700', level: 90 },
    { icon: SiScikitlearn, name: 'Scikit-Learn', color: 'text-orange-500', level: 87 },
  ],
  'Frontend': [
    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500', level: 90 },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500', level: 88 },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', level: 90 },
    { icon: SiReact, name: 'React', color: 'text-cyan-400', level: 88 },
    { icon: TbBrandNextjs, name: 'Next.js', color: 'text-black dark:text-white', level: 85 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500', level: 92 },
    { icon: FaBootstrap, name: 'Bootstrap', color: 'text-purple-600', level: 85 },
  ],
  'Backend': [
    { icon: DiDjango, name: 'Django', color: 'text-green-700', level: 88 },
    { icon: SiFastapi, name: 'FastAPI', color: 'text-green-600', level: 85 },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-700 dark:text-gray-300', level: 87 },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600', level: 80 },
  ],
  'Database & Tools': [
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600', level: 85 },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600', level: 80 },
    { icon: SiDocker, name: 'Docker', color: 'text-blue-500', level: 82 },
    { icon: SiGit, name: 'Git', color: 'text-orange-600', level: 88 },
  ],
  'Web3/Blockchain': [
    { icon: SiBlockchaindotcom, name: 'Blockchain', color: 'text-blue-600', level: 75 },
    { icon: SiSolidity, name: 'Solidity', color: 'text-gray-700 dark:text-gray-300', level: 70 },
  ]
};
