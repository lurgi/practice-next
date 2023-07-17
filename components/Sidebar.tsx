"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Home",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  console.log(routes);
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>SideBar Navigation</Box>
      </div>
    </div>
  );
};

export default SideBar;
