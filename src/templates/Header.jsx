import Logo from "../components/(header)/Logo";
import Navigation from "../components/(header)/Navigation";
import NavIcons from "../components/(header)/NavIcons";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-4">
      <Logo></Logo>
      <Navigation></Navigation>
      <NavIcons></NavIcons>
    </header>
  );
};

export default Header;
