"use client";
import { use, useState } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [watchColor, setWatchColor] = useState("/navy.png");
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Image src={watchColor} alt="Picture of navy watch" width={500} height={500} />
        <div className="flex flex-col cursor-pointer self-center ms-auto gap-6 w-auto">
          <div className={watchColor == "/navy.png" ? "border-3 w-6 aspect-square border-white rounded-full bg-gray-700" : "w-6 aspect-square border border-white rounded-full bg-gray-700"} onClick={() => setWatchColor("/navy.png")}></div>
          <div className={watchColor == "/mint.png" ? "border-3 w-6 aspect-square border-white rounded-full bg-teal-400" : "w-6 aspect-square border border-white rounded-full bg-teal-400"} onClick={() => setWatchColor("/mint.png")}></div>
          <div className={watchColor == "/ocean.png" ? "border-3 w-6 aspect-square border-white rounded-full bg-cyan-100" : "w-6 aspect-square border border-white rounded-full bg-cyan-100"} onClick={() => setWatchColor("/ocean.png")}></div>
        </div>
      </div>

      <div className="flex justify-evenly cursor-pointer w-[500px]">
        <Image src="/navy.png" alt="Picture of navy watch" width={100} height={100} onClick={() => setWatchColor("/navy.png")} />
        <Image src="/mint.png" alt="Picture of mint watch" width={100} height={100} onClick={() => setWatchColor("/mint.png")} />
        <Image src="/ocean.png" alt="Picture of ocean watch" width={100} height={100} onClick={() => setWatchColor("/ocean.png")} />
      </div>
    </div>
  );
};

export default HeroImage;
