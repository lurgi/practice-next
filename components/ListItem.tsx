"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface IListItemProps {
  image: string;
  name?: string;
  href?: string;
}

const ListItem = ({ image, name, href }: IListItemProps) => {
  const router = useRouter();
  return (
    <button
      className="
  relative
  group
  flex
  items-center
  rounded-md
  overflow-hidden
  gap-x-4
  bg-neutral-100/10
  hover:bg-neutral-100/20
  transition
  pr-4"
    >
      <div className="relative min-w-[64px] min-h-[64px]">
        <Image className="object-cover" alt="Image" src={image} fill></Image>
      </div>
      <p className="truncate py-5">{name}</p>
      <div
        className="absolute
      right-5
      bg-emerald-400
      rounded-full
      p-2
      flex
      justify-center
      items-center
      opacity-0
      group-hover:opacity-100
      hover:scale-110
      transition
      "
      >
        <FaPlay size={18}></FaPlay>
      </div>
    </button>
  );
};

export default ListItem;
