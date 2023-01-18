const Button = () => {
  const handleClick = () => {
    // event
  };

  return (
    <button
      onClick={handleClick}
      className="bg-brand-violet hover:bg-brand-violet-light text-brand-white flex py-1.5 pl-1.5 pr-3.5 rounded-3xl md:py-2 md:pl-2 md:pr-4"
    >
      <svg
        className="text-xl mr-2.5 md:mr-4"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="white" />
        <path
          d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
          fill="#7C5DFA"
        />
      </svg>
      <span className="text-sm py-2 md:hidden">New</span>
      <span className="hidden md:block md:text-sm md:py-2">New Invoice</span>
    </button>
  );
};

export default Button;
