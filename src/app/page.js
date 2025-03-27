import Image from "next/image";
import Header from "./templates/Header";
import Hero from "./templates/Hero";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
