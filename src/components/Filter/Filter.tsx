import { useState, ChangeEvent } from "react";
import { SvgImg } from "../SvgImg/SvgImg";

export const Filter = () => {
  const isMobile = false;

  const [isOpen, setisOpen] = useState(false);

  const [filterType, setFilterType] = useState({
    draft: false,
    paid: false,
    pending: false,
  });

  const filterView = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterType({
      ...filterType,
      [event.target.name]: event.target.checked,
    });
  };

  const clickHandler = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className=" relative flex  justify-center items-center gap-40 ">
      <button
        onClick={clickHandler}
        className="cursor-pointer flex  items-center justify-center gap-3"
      >
        <span className="text-brand-text dark:text-brand-white ">
          {isMobile ? "Filter" : "Filter by status"}
        </span>

        {isOpen ? (
          <SvgImg
            src="/public/assets/images/icon-arrow-up.svg"
            alt="arrow-up"
          />
        ) : (
          <SvgImg
            src="/public/assets/images/icon-arrow-down.svg"
            alt="arrow-down"
          />
        )}
      </button>
      <div
        role="listbox"
        className={` absolute  dark:text-brand-white dark:bg-brand-gray-muted -bottom-28 right-30 w-44  flex-col gap-3  rounded-lg p-6 box-border shadow-md 
      ${isOpen ? "flex" : "hidden"}
      
      `}
      >
        <label
          className={`flex justify-start items-center gap-3 h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
        ${filterType.draft ? " bg-brand-violet" : ""}
        `}
        >
          <input
            onChange={filterView}
            type="checkbox"
            className="accent-brand-violet"
            name="draft"
          />
          <span>Draft</span>
        </label>
        <label
          className={`flex justify-start items-center gap-3 h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filterType.pending ? " bg-brand-violet" : ""}
`}
        >
          <input
            onChange={filterView}
            type="checkbox"
            className="accent-brand-violet"
            name="pending"
          />
          <span>Pending</span>
        </label>

        <label
          className={`flex  justify-start items-center gap-3 h-3 w-3 bg-brand-violet-highlight  rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filterType.paid ? " bg-brand-violet" : ""}
`}
        >
          <input
            onChange={filterView}
            type="checkbox"
            className=" accent-brand-violet "
            name="paid"
          />
          <span>Paid</span>
        </label>
      </div>
    </div>
  );
};
