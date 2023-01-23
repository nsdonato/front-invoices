import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-screen bg-brand-gray brand-lg:flex-col brand-lg:w-[103px] brand-lg:h-screen brand-lg:rounded-r-[20px] ">
      <span>
        <img
          src="/logo.svg"
          className="flex brand-lg:h-[103px] h-[72px] cursor-pointer"
          alt="logo-invoice-app"
        />
      </span>
      <div className="border-brand-gray-light px-[24px] py-[20px] border-l-[1px] brand-lg:py-[24px] brand-lg:px-[31px] brand-lg:border-0 brand-lg:border-t-[1px]">
        <span className="flex brand-lg:w-[40px] brand-lg:h-[40px] w-[32px] h-[32px] p-1.5 overflow-hidden bg-gray-200 rounded-full ">
          <img src="/avatar.svg" alt="avatar-skeleton" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
