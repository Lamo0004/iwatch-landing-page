import HeroHeader from "./(hero_text)/HeroHeader";
import Button from "./(hero_text)/Button";
import Arrows from "./(hero_text)/Arrows";

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-between">
      <HeroHeader></HeroHeader>
      <Button></Button>
      <Arrows></Arrows>
    </div>
  );
};

export default HeroText;
