import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiMongodb, SiMysql, SiPytorch, SiFastapi, SiFlask, SiTailwindcss } from 'react-icons/si';

function skills() {
  return (
    <div className="flex flex-col justify-center text-center">
              <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-700 ml-15 font-medium">Skills</h2>
              <p className="text-md py-5 leading-8 text-gray-800">I have experience in the following technologies:</p>
              </div>
 


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
  )
}

export default skills;