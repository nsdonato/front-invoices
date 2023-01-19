// import { Link } from 'react-router-dom'

type Status = "pending" | "paid" | "draft";

interface InvoiceItemProps {
  id: string;
  date: string;
  name: string;
  amount: number;
  status: Status;
}

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

const InvoiceItem = ({ id, date, name, amount, status }: InvoiceItemProps) => {
  const dateTransformed = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    // <Link to={`/${id}/detail`} className="bg-white lg:max-w-3xl md:max-w-2xl max-w-sm p-4 rounded-lg mx-auto my-4 dark:bg-brand-gray-dark grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 items-center text-center shadow-md cursor-pointer border transition-all hover:border-brand-violet">
    <div className="relative bg-white lg:max-w-3xl md:max-w-2xl max-w-sm py-4 lg:pr-6 md:pr-6 rounded-lg mx-auto my-4 dark:bg-brand-gray-dark grid md:grid-rows-1 lg:grid-rows-1 lg:grid-cols-5 md:grid-cols-5 grid-cols-2 items-center text-center shadow-md cursor-pointer text-sm border transition-all hover:border-brand-violet">
      <p className="font-bold text-brand-text dark:text-white lg:order-1 md:order-1 order-0 lg:mb-0 md:mb-0 mb-3">
        <span className="text-brand-violet-muted ">#</span>
        {id}
      </p>
      <p className="text-brand-violet-muted dark:text-brand-violet-highlight md:mr-[2px] lg:order-2 md:order-2 order-2">
        Due {dateTransformed.replaceAll(",", "")}
      </p>
      <p className="text-brand-text-light dark:text-white lg:order-3 md:order-3 order-1 lg:mb-0 md:mb-0 mb-3">
        {name}
      </p>
      <h4 className="font-bold text-base lg:order-4 md:order-4 order-4 ">
        <span>£</span>
        {amount.toFixed(2)}
      </h4>
      <div
        className={`${invoiceBackgrounds[status]} max-w-[104px] mx-auto w-full relative py-2 rounded-md lg:order-5 md:order-5 order-3 row-span-2`}
      >
        <p className={`${invoiceTexts[status]} relative font-bold`}>
          <span
            className={`absolute top-1 before:absolute ${invoiceDots[status]} before:rounded-full before:p-[3px] before:right-1`}
          ></span>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
      <span className="ml-2 w-fit right-5 absolute lg:block lg:order-6 md:block md:order-6 hidden">
        <Arrow />
      </span>
    </div>
  );
};

export default InvoiceItem;
