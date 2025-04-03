"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-16 text-xl font-semibold">
        <li>
          <a href="#"> Mac</a>
        </li>
        <li>
          <a href="#"> iPhone</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <Link href="/iwatch" className={pathname === "/iwatch" ? "bg-white rounded-full text-[#b6ccda] py-2 px-8" : ""}>
            iWatch
          </Link>
        </li>
        <li>
          <Link href="/support" className={pathname === "/support" ? "bg-white rounded-full text-[#b6ccda] py-2 px-4" : ""}>
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
