import Link from "next/link";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface ILinkProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}

const SidebarLink = ({ icon: Icon, label, active, href }: ILinkProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row items-center p-2 gap-x-4 text-neutral-400 transition hover:text-white",
        active && "text-white"
      )}
    >
      <Icon size={30} />
      <div className="truncate w-full">{label}</div>
    </Link>
  );
};

export default SidebarLink;
