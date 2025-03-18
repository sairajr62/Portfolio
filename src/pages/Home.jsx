import React from "react";
import image from "../assets/Image.gif";
import { TypeAnimation } from "react-type-animation";
import About from "./About";

const about = () =>{
  return (
    <About/>
  )
}



function Home() {
  return (
    <>
        <div className="lg:h-full flex flex-col lg:justify-center lg:items-stretch mt-40 text-center font-Garamond">
        <TypeAnimation
          sequence={[
            "Hi, I Am Sairaj Rane.",
            1000,
            "I Am A Frontend Web Developer!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="lg:text-4xl mr-11 md:text-xl sm:text-sm"
          repeat={Infinity}
        />
        <div className="lg:h-full md:flex-row flex flex-col lg:justify-center lg:items-stretch mt-8 text-center">
          <h2 className="font-mono text-xl">
            I Love to Learn The New Technologies.
          </h2>
        </div>
        <div className="lg:h-full mb-36 flex flex-row justify-end mx-10 ">
          <img
            className="h-48 w-48 md:justify-center sm:justify-center object-cover"
            src={image}
            alt="Coding"
          />
        </div>
        <div>
          <p></p>
          <button className="" onClick={about}>Read More</button>
        </div>
        </div>
    </>
  );
}

export default Home;
