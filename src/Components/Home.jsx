import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import selfie from "../assets/imagemy.jpeg"
import reactimage from "../assets/Skills/react.js-img-1-removebg-preview.png"
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      id='home'
      name="home"
      className="h-auto heroSec w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto px-4 md:flex-row pt-4">
        <div className="small-screen hidden">
          <img
            src={reactimage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="homeScreen flex flex-col justify-center  h-[32rem]">
          <h2 className=" text-Design text-4x1 sm:text-7xl font-bold text-white" >
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-3 max-w-md">
            I have 6th month of experience building websites and desgining software.
            I love to work on web application using technologies like
            HTML5, CSS3, Javascript, React, Redux, Bootstrap, Material UI, Tailwind CSS.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen h-[35rem] flex  items-center justify-center">
          <img
            src={reactimage}
            alt="profile"
            className="image-sec rounded-2xl mx-auto  md:w-full "
          />
        </div>

      </div>
    </div>
  );
}

export default Home
