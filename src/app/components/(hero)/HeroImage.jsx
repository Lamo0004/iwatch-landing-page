"use client";
import { use, useState } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [watchColor, setWatchColor] = useState("/navy.png");
  return (
    <div className="hero_image">
      <div>
        <Image src={watchColor} alt="Picture of navy watch" width={500} height={500} />
        <div className="color_container">
          <div className={watchColor == "/navy.png" ? "active navy-color-icon" : "navy-color-icon"} onClick={() => setWatchColor("/navy.png")}></div>
          <div className={watchColor == "/mint.png" ? "active mint-color-icon" : "mint-color-icon"} onClick={() => setWatchColor("/mint.png")}></div>
          <div className={watchColor == "/ocean.png" ? "active ocean-color-icon" : "ocean-color-icon"} onClick={() => setWatchColor("/ocean.png")}></div>
        </div>
      </div>

      <div className="small_watches">
        <Image src="/navy.png" alt="Picture of navy watch" width={100} height={100} onClick={() => setWatchColor("/navy.png")} />
        <Image src="/mint.png" alt="Picture of mint watch" width={100} height={100} onClick={() => setWatchColor("/mint.png")} />
        <Image src="/ocean.png" alt="Picture of ocean watch" width={100} height={100} onClick={() => setWatchColor("/ocean.png")} />
      </div>
    </div>
  );
};

export default HeroImage;
