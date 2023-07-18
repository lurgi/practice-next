"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    </button>
  );
};

export default ListItem;
