import DarkMode from "../Darkmode";

const NavBar = () => {
  return (
    <nav
      data-testid="nav"
      className="flex items-center justify-between w-screen bg-brand-gray darkMode:bg-brand-gray-dark md:flex-col  md:w-[103px] md:h-screen md:rounded-r-[20px] "
    >
      <span>
        <img
          src="/logo.svg"
          className="flex md:h-[103px] h-[72px] cursor-pointer"
          alt="logo-invoice-app"
        />
      </span>
      <div className="border-brand-gray-light px-[24px] py-[20px] border-l-[1px] md:py-[24px] md:px-[31px] md:border-0 md:border-t-[1px]">
        <DarkMode />
        <span className="flex md:w-[40px] md:h-[40px] w-[32px] h-[32px] p-1.5 overflow-hidden bg-gray-200 rounded-full ">
          <img src="/avatar.svg" alt="avatar-skeleton" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
