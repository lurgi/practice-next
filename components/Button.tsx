import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className={twMerge(
          `hover:opacity-75
          transition
          w-full rounded-full border border-transparent bg-emerald-500 p-3 disabled:cursor-not-allowed disabled:opacity-75 text-black font-bold`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
