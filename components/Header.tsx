import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const Header = () => {
  return (
    <header className={twMerge("bg-gradient-to-b from-emerald-800 h-fit p-6")}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-x-4">
          <button className="rounded-full p-2 bg-neutral-950 flex justify-center items-center">
            <BsChevronLeft size={20} />
          </button>
          <button className="rounded-full p-2 bg-neutral-950 flex justify-center items-center">
            <BsChevronRight size={20} />
          </button>
        </div>
        <Button />
      </div>
    </header>
  );
};

export default Header;
