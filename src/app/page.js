import Head from "next/head"
import {BsMoonStarsFill} from "react-icons/bs"
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"

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
            <p className="text-md py-5 leading-8 text-gray-800">Hi, I'm Mike. I'm a software developer based in Nairobi, Kenya. I have a passion for software development and love to fullstack applications.</p>
            
          </div>
          <div>
              <AiFillGithub className="text-2xl cursor-pointer"/>
              <AiFillTwitterCircle className="text-2xl cursor-pointer"/>
              <AiFillLinkedin className="text-2xl cursor-pointer"/>
            </div>
        </section>
      </main>
    </body>
   </div>
  )
}
