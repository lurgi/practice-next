import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={twMerge("bg-gradient-to-b from-emerald-800 h-fit p-6")}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-x-4">
          <button className="hidden transition md:flex rounded-full p-1.5 bg-neutral-950 hover:opacity-75 justify-center items-center">
            <FiChevronLeft size={25} />
          </button>
          <button className="hidden transition md:flex rounded-full p-1.5 bg-neutral-950 hover:opacity-75 justify-center items-center">
            <FiChevronRight size={25} />
          </button>
          <button className="flex md:hidden transition rounded-full p-2 bg-neutral-50 hover:opacity-75 justify-center items-center ">
            <AiFillHome size={21} className="text-neutral-900" />
          </button>
          <button className="flex md:hidden transition rounded-full p-2 bg-neutral-50 hover:opacity-75 justify-center items-center">
            <BiSearch size={21} className="text-neutral-900" />
          </button>
        </div>
        <div className="flex gap-x-4">
          <div>
            <Button className="bg-transparent text-neutral-300 font-medium">
              가입하기
            </Button>
          </div>
          <div>
            <Button className="py-3 px-6">로그인</Button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </header>
  );
};

export default Header;
