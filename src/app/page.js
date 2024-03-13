import Head from "next/head"
import {BsMoonStarsFill} from "react-icons/bs"
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import { SiHtml5 } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


export default function Home() {
  return (
   <div>
    <head>
      <title>Mikes Portfolio</title>
      <meta name="description" content="Page" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <main className="bg-white px-10"> 
        <section className=" min-h-screen">

          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" font-burtons text-xl">By Mike</h1>
            <ul className="flex items-center">
              <li><BsMoonStarsFill className="cursor-pointer text-2xl"/></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-700 font-medium">Michael Macharia</h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Hi, I'm Mike. I'm a software developer based in Nairobi, Kenya. I have a passion for software development and Ai/Machine Learning.</p>
            
          </div>
          <div>
              <AiFillGithub className="text-2xl cursor-pointer"/>
              <AiFillTwitterCircle className="text-2xl cursor-pointer"/>
              <AiFillLinkedin className="text-2xl cursor-pointer"/>
            </div>
            <div className="flex flex-col justify-center text-center">
              <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-700 ml-15 font-medium">Skills</h2>
              <p className="text-md py-5 leading-8 text-gray-800">I have experience in the following technologies:</p>
              </div>
              {/* generate icons for bootsrrap css react extjs tailwind nodejs django flask and fast api for react */}

              <div className=" flex justify-center ">
                <div className=" max-w-sm p-5 items-center">
                  <SiHtml5 className="text-5xl text-red-500"/>
                  <p>HTML5</p>
                </div>
                <div className="flex flex-col p-5 items-center">
                  <FaReact className="text-5xl text-red-500"/>
                  <p>React</p>
                </div>
                <div className= "flex flex-col p-5 items-center">
                  <DiDjango className="text-5xl text-teal-600"/>
                  <p>Django</p>
                </div>
                <div className=" flex flex-col p-5 items-center">
                  <TbBrandNextjs className="text-5xl text-teal-600"/>
                  <p>Nextjs</p>
                </div>
                <div className=" flex flex-col p-5 items-center">
                  <FaBootstrap className="text-5xl text-purple-600"/>
                  <p>Bootstrap</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <FaCss3Alt className="text-5xl text-blue-600"/>
                  <p>CSS3</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiFastapi className="text-5xl text-green-600"/>
                  <p>Fastapi</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiFlask className="text-5xl text-green-600"/>
                  <p>Flask</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiMysql className="text-5xl text-blue-600"/>
                  <p>Mysql</p>
                  </div>

                  <div className=" flex flex-col p-5 items-center">
                  <SiMongodb className="text-5xl text-green-600"/>
                  <p>Mongodb</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiPytorch className="text-5xl text-red-600"/>
                  <p>Pytorch</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <FaNodeJs className="text-5xl text-green-600"/>
                  <p>Nodejs</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiJavascript className="text-5xl text-yellow-600"/>
                  <p>Javascript</p>
                  </div>
                <div className=" flex flex-col p-5 items-center">
                  <SiTailwindcss className="text-5xl text-blue-600"/>
                  <p>Tailwindcss</p>
                  </div>

        
                </div>
              </div>
        </section>
      </main>
    </body>
   </div>
  )
}
