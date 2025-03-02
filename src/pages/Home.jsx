import React from "react";
import image from "../assets/Image.gif";
import { TypeAnimation } from "react-type-animation";
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
          className="text-4xl"
          repeat={Infinity}
        />
        <div className="lg:h-full md:flex-row flex flex-col lg:justify-center lg:items-stretch mt-8 text-center">
          <h2 className="font-mono text-xl">I Love to Learn The New Technologies.</h2>
        </div>
        <div className="lg:h-full flex flex-row justify-end mx-10 ">
          <img className="h-48 w-48  object-cover" src={image} alt="Coding" />
        </div>
      </div>
    </>
  );
}

export default Home;