import React from "react";
import image from "../assets/coding p.png";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className="text-center mt-64 font-Garamond">
        <TypeAnimation
          sequence={[
            "Hi, I Am Sairaj Rane.",
            1000,
            "I Am A Frontend Web Developer!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex justify-center mt-8">
          <h2 className="font-mono">I Love to Learn The New Technologies.</h2>
        </div>
        <div className="flex justify-end -mt-64 mx-24 ">
          <img className="h-72 w-72 object-cover" src={image} alt="Coding" />
        </div>
      </div>
    </>
  );
}

export default Home;
