import { twMerge } from "tailwind-merge";

interface IBoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: IBoxProps) => {
  return (
    <div
      className={twMerge(
        `bg-neutral-900 py-2 px-3 w-280 rounded-lg`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
