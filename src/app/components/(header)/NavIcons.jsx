import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const NavIcons = () => {
  return (
    <div className="NavIcons">
      <FiSearch size={25} />
      <p>|</p>
      <FiShoppingBag size={25} />
    </div>
  );
};

export default NavIcons;
