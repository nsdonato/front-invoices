import { SvgImg } from "../SvgImg/SvgImg";
interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
  selectFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
}

export const Filter = ({
  isOpen,
  toggleOpen,
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
        className={` absolute z-20 bg-brand-bg dark:text-brand-white dark:bg-brand-gray-muted -bottom-32 right-30 w-44  flex-col gap-1  rounded-lg p-4 box-border shadow-md 
      ${isOpen ? "flex" : "hidden"} 
      
      `}
      >
        <label
          className={`group flex justify-start items-center gap-3 rounded-sm bg-center bg-no-repeat hover:cursor-pointer select-none 
        
        
        `}
        >
          <input
            onChange={selectFilter}
            className="appearance-none w-3 h-3 rounded-sm 
            bg-brand-violet-highlight
            dark:bg-brand-bg-dark
            dark:checked:bg-brand-violet 
            checked:bg-[url('/public/assets/images/icon-check.svg')]
             border-slate-600 border checked:bg-brand-violet 
            group-hover:border-brand-violet "
            type="checkbox"
            name="draft"
          />
          <span>Draft</span>
        </label>
        <label
          className={`group flex justify-start items-center gap-3 rounded-sm bg-center bg-no-repeat hover:cursor-pointer select-none 
        
        
        `}
        >
          <input
            onChange={selectFilter}
            className="appearance-none w-3 h-3 rounded-sm 
            bg-brand-violet-highlight
            dark:bg-brand-bg-dark
            dark:checked:bg-brand-violet 
            checked:bg-[url('/public/assets/images/icon-check.svg')]
             border-slate-600 border checked:bg-brand-violet 
            group-hover:border-brand-violet "
            type="checkbox"
            name="pending"
          />
          <span>Pending</span>
        </label>

        <label
          className={`group flex justify-start items-center gap-3 rounded-sm bg-center bg-no-repeat hover:cursor-pointer select-none 
        
        
        `}
        >
          <input
            onChange={selectFilter}
            className="appearance-none w-3 h-3 rounded-sm 
            bg-brand-violet-highlight
            dark:bg-brand-bg-dark
            dark:checked:bg-brand-violet 
            checked:bg-[url('/public/assets/images/icon-check.svg')]
             border-slate-600 border checked:bg-brand-violet 
            group-hover:border-brand-violet "
            type="checkbox"
            name="paid"
          />
          <span>Paid</span>
        </label>
      </div>
    </div>
  );
};
