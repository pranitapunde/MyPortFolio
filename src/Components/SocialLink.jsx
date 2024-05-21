import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { MdPersonalInjury } from "react-icons/md";


const SocialLink = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pranita-punde-b0613627b/",

      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/pranitapunde",
    },
    {
      id: 3,
      child: (
        <>
          Email <CiMail size={30} />
        </>
      ),
      href: "mailto:pundepranita5@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <MdPersonalInjury  size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1_qaHH8fymDLJRpy9QRxuokFPfL1_hJAi/view?usp=sharing",
      download: true,
    },


    {
      id: 5,
      child: (
        <>
          Twitter <IoLogoTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/?lang=en",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>



    </div>
  )
}

export default SocialLink
