import React from "react";

function About() {
  return (
    <>
      <div>
        <div className="text-center mt-8">
          <h2 className="font-mono font-medium ml-16 md:mt-0 text-center mr-14 sm:text-center">About Me</h2>
        </div>
        <div className="p-14">
          <p className="md:text-balance lg:ml-16 text-center font-medium ">
            Hi, I'm Sairaj Sunil Rane, a passionate web developer with a strong
            interest in building dynamic and user-friendly websites.
            I specialize in WordPress, JavaScript, React, and MongoDB, with
            experience in frontend technologies like HTML, CSS, and Bootstrap. I
            enjoy exploring trending technologies and continuously improving my
            skills.</p> 
            <p className="md:text-balance lg:text-center font-medium">Currently, I am expanding my expertise in React, Vite, and
            Three.js, aiming to create interactive web applications. 
            Beyond coding, I love experimenting with freelancing website development
            and food order & delivery platforms. My goal is to create efficient
            and scalable digital solutions that enhance user experience. Feel
            free to check out my work on GitHub <a href="https://github.com/Sairajr62">Sairajr62</a> and connect with me
            for collaborations!</p>
            <span className="md:text-balance lg:text-balance font-medium">
              Feel free to connect me for :- 
              <ul className="list-item lg:text-center">
                <li>Website Development</li>
                <li>Freelancing Projects</li>
                <li>Collaborations</li>
                </ul>
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Download Resume</button>
        </div>
      </div>
    </>
  );
}

export default About;
