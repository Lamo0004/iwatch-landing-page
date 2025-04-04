"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-16 text-xl font-semibold">
        <li>
          <Link href="imac" className={pathname === "/imac" ? "bg-white rounded-full text-[#b6ccda] py-2 px-8" : ""}>
            iMac
          </Link>
        </li>
        <li>
          <Link href="iphone" className={pathname === "/iphone" ? "bg-white rounded-full text-[#b6ccda] py-2 px-8" : ""}>
            iPhone
          </Link>
        </li>
        <li>
          <Link href="/ipad" className={pathname === "/ipad" ? "bg-white rounded-full text-[#b6ccda] py-2 px-4" : ""}>
            iPad
          </Link>
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
