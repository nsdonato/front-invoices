import { useState } from "react";

export type PaymentTerms = 1 | 7 | 14 | 30;

const DropdownArrow = () => {
  return (
    <div className="absolute top-[40%] right-3">
      <svg
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5.2279 5.2279L9.4558 1"
          stroke="#7C5DFA"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [paymentTerm, setPaymentTerm] = useState<PaymentTerms>(30);

  const options: PaymentTerms[] = [1, 7, 14, 30];

  const handleSelectPaymentTerm = (option: PaymentTerms): void => {
    setPaymentTerm(option);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-testid="dropdown"
      onClick={handleToggleDropdown}
      className={`relative max-w-[327px] lg:w-60 md:w-60 mx-auto text-sm font-bold rounded border cursor-pointer transition border-brand-violet-highlight dark:text-brand-white dark:bg-brand-gray-dark dark:border-brand-gray-muted hover:border-brand-violet`}
    >
      <p className="pl-5 pr-4 py-2 select-none">
        Net {paymentTerm} {paymentTerm === 1 ? "day" : "days"}
      </p>
      <DropdownArrow />
      <div
        data-testid="term-container"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-10 left-0 w-full transition shadow-md rounded border border-brand-violet-highlight dark:text-brand-white dark:bg-brand-gray-dark dark:border-brand-gray-muted`}
      >
        <ul data-testid="term-list" className="">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  handleSelectPaymentTerm(option);
                }}
                className={`pl-5 pr-4 py-2 last:border-b-0 dark:border-b-brand-gray-muted border-b-[1px] hover:text-brand-violet `}
                key={option}
              >
                Net {option} {option === 1 ? "day" : "days"}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
