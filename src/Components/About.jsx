import React from 'react'

const About = () => {
  return (
    <div id='about'
      name="about"
      className="aboutsec w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <p className="text-xl mt-5">
          I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p> */}

        <br />

        <p className="text-xl">
          I am a Front-End developer with a bachelor degree in computer applications from government Jaywanti Haksar college,Betul. <br />
          <br />
          My expertise lies in frontend development, where I have a strong command over HTML5, CSS3, Javascript, React, Redux, Bootstrap and Material UI. <br />

          <br />
          I am looking for an opportunity to apply my technical expertise, problem solving skills,and collaborative mindset to software development. i am motivated by transforming ideas into innovative solutions that can positively impact users and society. I am confident that i can add value to any organisation that shares my vision and values.
        </p>
        <br />
        <p> Contact- +91 9179855573 </p>
        <p> Email - pundepranita5@gmail.com</p>

      </div>
    </div>
  );
}

export default About
