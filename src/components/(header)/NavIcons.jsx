import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const NavIcons = () => {
  return (
    <div className="flex gap-2 items-center">
      <FiSearch size={25} />
      <p className="text-2xl">|</p>
      <FiShoppingBag size={25} />
    </div>
  );
};

export default NavIcons;
