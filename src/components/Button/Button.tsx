import { useState } from "react";

interface Props {
  variant?: string;
  buttonLabel: string;
  widthFull?: boolean;
  children?: JSX.Element;
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
  buttonLabel,
  widthFull,
  children,
  onClick,
}: Props) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  window.addEventListener("resize", () => {
    setDesktop(window.innerWidth > 768);
  });

  function renderLabel() {
    if (isDesktop) {
      return <span className="my-2 mx-4 pt-px">{buttonLabel}</span>;
    } else {
      return <span className="my-2 mx-2 pt-px">New</span>;
    }
  }

  return (
    <button
      onClick={onClick}
      className={`text-sm rounded-3xl flex py-2 px-2 
      ${variants[variant as keyof Variants]} 
      ${widthFull ? "w-full justify-center" : ""}`}
    >
      {children}
      {buttonLabel === "New Invoice" ? (
        renderLabel()
      ) : (
        <span className="my-2 mx-4 pt-px">{buttonLabel}</span>
      )}
    </button>
  );
};

export default Button;
