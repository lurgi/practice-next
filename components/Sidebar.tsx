"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarLink from "./SidebarLink";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SidebarProps) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "홈",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "검색하기",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          {routes.map((route) => (
            <SidebarLink key={route.label} {...route} />
          ))}
        </Box>
        <Box className="overflow-y-auto h-full w-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 pr-2 pb-2">
        {children}
      </main>
    </div>
  );
};

export default SideBar;
