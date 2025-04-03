import { FaApple } from "react-icons/fa";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="landingpage">
      <FaApple size={50} />
    </Link>
  );
};

export default Logo;
