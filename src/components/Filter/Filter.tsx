import { SvgImg } from "../SvgImg/SvgImg";

interface Props {
  isOpen: boolean;
  toggleOpen: any;
  filtersType: any;
  selectFilter: any;
  buttonText: string;
}

export const Filter = ({
  isOpen,
  toggleOpen,
  filtersType,
  selectFilter,
  buttonText,
}: Props) => {
  return (
    <div className=" relative flex  justify-center items-center gap-40 ">
      <button
        onClick={toggleOpen}
        className="cursor-pointer flex  items-center justify-center gap-3"
      >
        <span className="text-brand-text dark:text-brand-white ">
          {buttonText}
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
        ${filtersType.draft ? " bg-brand-violet" : ""}
        `}
        >
          <input
            onChange={selectFilter}
            type="checkbox"
            className="accent-brand-violet"
            name="draft"
          />
          <span>Draft</span>
        </label>
        <label
          className={`flex justify-start items-center gap-3 h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filtersType.pending ? " bg-brand-violet" : ""}
`}
        >
          <input
            onChange={selectFilter}
            type="checkbox"
            className="accent-brand-violet"
            name="pending"
          />
          <span>Pending</span>
        </label>

        <label
          className={`flex  justify-start items-center gap-3 h-3 w-3 bg-brand-violet-highlight  rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filtersType.paid ? " bg-brand-violet" : ""}
`}
        >
          <input
            onChange={selectFilter}
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
