import DarkMode from "../Darkmode";

const NavBar = () => {
  return (
    <nav
      data-testid="nav"
      className="flex items-center justify-between w-screen bg-brand-gray darkMode:bg-brand-gray-dark md:flex-col md:w-[103px] md:h-screen md:rounded-r-[20px]"
    >
      <span>
        <img
          src="/logo.svg"
          className="flex md:h-[103px] h-[72px] cursor-pointer"
          alt="logo-invoice-app"
        />
      </span>
      <div className="flex items-center md:flex-col gap-4">
        <DarkMode />
        <div className="border-brand-gray-light px-6 py-5 border-l md:py-6 md:px-8 md:border-0 md:border-t">
          <span className="flex md:w-10 md:h-10 w-8 h-8 p-1.5 overflow-hidden bg-gray-200 rounded-full">
            <img src="/avatar.svg" alt="avatar-skeleton" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
