import React from "react";

interface Props {
  variant?: "primary" | "secondary" | "tertiary" | "delete";
  children: React.ReactNode;
  widthFull?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Variants {
  primary: string;
  secondary: string;
  tertiary: string;
  delete: string;
}

const variants: Variants = {
  primary: "bg-brand-violet hover:bg-brand-violet-light text-brand-white",
  secondary:
    "bg-brand-violet-ghost hover:bg-brand-violet-highlight text-brand-violet-muted",
  tertiary: "bg-brand-gray hover:bg-brand-text text-brand-text-muted",
  delete: "bg-brand-red hover:bg-brand-red-light text-brand-white",
};

const Button = ({
  variant = "primary",
  children,
  widthFull,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm rounded-3xl flex items-center py-2 px-2 h-12
      ${variants[variant as keyof Variants]} 
      ${widthFull ? "w-full justify-center" : ""}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return child;
        } else {
          return <span className="mt-[9px] mb-2 mx-4">{child}</span>;
        }
      })}
    </button>
  );
};

export default Button;
