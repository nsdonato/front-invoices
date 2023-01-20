import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex fixed items-center justify-between w-screen bg-brand-gray brand-lg:flex-col brand-lg:w-[103px] brand-lg:h-screen brand-lg:rounded-r-[20px] ">
        <span>
          <img
            src="/logo.svg"
            className="flex brand-lg:h-[103px] h-[72px] cursor-pointer"
            alt="logo-invoice-app"
          />
        </span>
        <div className="border-brand-gray-light px-[24px] py-[20px] border-l-[1px] brand-lg:py-[24px] brand-lg:px-[31px] brand-lg:border-0 brand-lg:border-t-[1px] ">
          <span className="flex brand-lg:w-[40px] brand-lg:h-[40px] w-[32px] h-[32px] p-1.5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="flex w-auto h-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
