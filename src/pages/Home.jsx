import React from "react";
import image from "../assets/coding p.png";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center mt-32 font-Garamond">
        <TypeAnimation
          sequence={[
            "Hi, I Am Sairaj Rane.",
            1000,
            "I Am A Frontend Web Developer!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl text-4xl"
          repeat={Infinity}
        />
        <div className="flex justify-center mt-8">
          <h2 className="font-mono text-base text-xl mt-4">I Love to Learn The New Technologies.</h2>
        </div>
        <div className="flex justify-end mx-24 ">
          <img className="h-40 w-40  object-cover" src={image} alt="Coding" />
        </div>
      </div>
    </>
  );
}

export default Home;