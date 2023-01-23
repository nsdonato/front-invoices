import { ComponentPropsWithoutRef, ElementType } from "react";
import { Link } from "react-router-dom";

export type Status = "pending" | "paid" | "draft";

type InvoiceItemProps<C extends ElementType> = {
  id: string;
  date: string;
  name: string;
  amount: number;
  status: Status;
  typeOfElement?: C extends "div" | "a" | typeof Link ? C : never;
} & ComponentPropsWithoutRef<C>;

const invoiceBackgrounds: Record<Status, string> = {
  paid: "bg-brand-green-ghost",
  pending: "bg-brand-orange-ghost",
  draft: "bg-brand-violet-ghost",
};

const invoiceDots: Record<Status, string> = {
  paid: "before:bg-brand-green",
  pending: "before:bg-brand-orange",
  draft: "before:bg-brand-violet-muted",
};

const invoiceTexts: Record<Status, string> = {
  paid: "text-brand-green",
  pending: "text-brand-orange",
  draft: "text-brand-gray",
};

const Arrow = () => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 5L1 9" stroke="#7C5DFA" strokeWidth="2" />
    </svg>
  );
};

export const InvoiceItem = <C extends ElementType>({
  id,
  date,
  name,
  amount,
  status,
  typeOfElement,
  ...props
}: InvoiceItemProps<C>) => {
  const MutableElement = typeOfElement ?? "div";

  const normalizedDate = (date: string) => {
    const formatDate = new Date(date);
    const day = formatDate.getDate();
    const dateTransformed = formatDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    return `${day} ${dateTransformed}`;
  };

  const normalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  const normalizedAmount = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <MutableElement
      {...props}
      className="relative bg-white lg:max-w-3xl md:max-w-2xl max-w-sm py-4 lg:pr-6 md:pr-6 rounded-lg mx-auto my-4 dark:bg-brand-gray-dark grid md:grid-rows-1 lg:grid-rows-1 lg:grid-cols-5 md:grid-cols-5 grid-cols-2 items-center text-center shadow-md cursor-pointer text-sm border transition-all hover:border-brand-violet"
    >
      <p className="font-bold text-brand-text dark:text-white lg:order-1 md:order-1 order-0 lg:mb-0 md:mb-0 mb-3">
        <span className="text-brand-violet-muted ">#</span>
        {id}
      </p>
      <p className="text-brand-violet-muted dark:text-brand-violet-highlight md:mr-[2px] lg:order-2 md:order-2 order-2">
        Due {normalizedDate(date)}
      </p>
      <p className="text-brand-text-light dark:text-white lg:order-3 md:order-3 order-1 lg:mb-0 md:mb-0 mb-3">
        {name}
      </p>
      <h4 className="font-bold text-base lg:order-4 md:order-4 order-4 ">
        {normalizedAmount}
      </h4>
      <div
        className={`${invoiceBackgrounds[status]} max-w-[104px] mx-auto w-full relative py-3 rounded-md lg:order-5 md:order-5 order-3 row-span-2`}
      >
        <p className={`${invoiceTexts[status]} relative font-bold`}>
          <span
            className={`absolute top-1 before:absolute ${invoiceDots[status]} before:rounded-full before:p-[3px] before:right-1`}
          ></span>
          {normalizedStatus}
        </p>
      </div>
      <span className="ml-2 w-fit right-5 absolute lg:block lg:order-6 md:block md:order-6 hidden">
        <Arrow />
      </span>
    </MutableElement>
  );
};

export default InvoiceItem;
