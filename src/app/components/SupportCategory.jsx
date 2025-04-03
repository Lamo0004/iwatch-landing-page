import Image from "next/image";

const SupportCategory = () => {
  return (
    <section className="flex flex-wrap gap-16 justify-center items-end">
      <div className="flex flex-col gap-4">
        <Image src="/iphone.png" alt="Picture of iphone" width={50} height={100} />
        <p className="text-center">IPhone</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/mac.png" alt="Picture of mac" width={100} height={100} />
        <p className="text-center">Mac</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/ipad.png" alt="Picture of pad" width={100} height={100} />
        <p className="text-center">IPad</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/watch.png" alt="Picture of watch" width={50} height={100} />
        <p className="text-center">Watch</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/vision.png" alt="Picture of vision" width={100} height={100} />
        <p className="text-center">Vision</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/airpods.png" alt="Picture of airpods" width={100} height={100} />
        <p className="text-center">AirPods</p>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/tv.png" alt="Picture of tv" width={100} height={100} />
        <p className="text-center">TV</p>
      </div>
    </section>
  );
};

export default SupportCategory;
