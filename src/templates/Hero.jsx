"use client";
import HeroText from "../components/(hero)/HeroText";
import HeroImage from "../components/(hero)/heroImage";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-[80vh]">
      <HeroText></HeroText>
      <HeroImage></HeroImage>
    </section>
  );
};

export default Hero;
