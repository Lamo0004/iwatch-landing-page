import HeroHeader from "./(hero_text)/HeroHeader";
import Button from "./(hero_text)/Button";
import Arrows from "./(hero_text)/Arrows";

const HeroText = () => {
  return (
    <div className="hero_text">
      <HeroHeader></HeroHeader>
      <Button></Button>
      <Arrows></Arrows>
    </div>
  );
};

export default HeroText;
