import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute  h-[800px] w-full left-0 z-[1] object-cover "
      >
        <source src="/GreenTech.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
