function Backdrop({
  children,
  show,
  onClick,
}: {
  children?: React.ReactNode;
  show: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`absolute top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center 
	  ${
      show ? "opacity-100" : "opacity-0 pointer-events-none"
    } transition-opacity ease-in duration-3000`}
      role="dialog"
    >
      {children}
    </div>
  );
}

export default Backdrop;
