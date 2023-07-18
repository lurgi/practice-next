import { ImBooks } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  return (
    <div className="p-2 flex justify-between items-center text-neutral-400">
      <div className="flex gap-x-4 hover:text-white transition cursor-pointer">
        <ImBooks size={30}></ImBooks>
        <p>내 라이브러리</p>
      </div>
      <div className="hover:text-white transition cursor-pointer hover:bg-neutral-800 rounded-full p-1 flex justify-center items-center">
        <AiOutlinePlus size={20} />
      </div>
    </div>
  );
};

export default Library;
