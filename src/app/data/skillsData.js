// ====================
// data/skillsData.js
// ====================
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiMongodb, SiMysql, SiPytorch, SiFastapi, SiFlask, SiTailwindcss } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

export const skillsData = [
  { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500', level: 90 },
  { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500', level: 85 },
  { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', level: 88 },
  { icon: FaReact, name: 'React', color: 'text-cyan-400', level: 85 },
  { icon: TbBrandNextjs, name: 'Next.js', color: 'text-black dark:text-white', level: 80 },
  { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600', level: 75 },
  { icon: DiDjango, name: 'Django', color: 'text-green-700', level: 82 },
  { icon: SiFastapi, name: 'FastAPI', color: 'text-green-600', level: 78 },
  { icon: SiFlask, name: 'Flask', color: 'text-gray-700', level: 80 },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600', level: 75 },
  { icon: SiMysql, name: 'MySQL', color: 'text-blue-600', level: 85 },
  { icon: SiPytorch, name: 'PyTorch', color: 'text-red-600', level: 70 },
  { icon: FaBootstrap, name: 'Bootstrap', color: 'text-purple-600', level: 90 },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500', level: 92 }
];
