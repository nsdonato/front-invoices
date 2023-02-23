import { useState, useRef, useEffect } from "react";
import { Calendar } from "./Calendar";
import { formatDate } from "./helpers";

interface DatePickerProps {
  onChangeDate: React.Dispatch<React.SetStateAction<Date>>;
  initialDate?: Date;
}

export default function DatePicker({
  initialDate = new Date(),
  onChangeDate,
}: DatePickerProps) {
  const [isFocusedInput, setFocusedInput] = useState<boolean>(false);
  const inputElement = useRef(null);
  const calendar = useRef<HTMLDivElement>(null);

  const handleClickInput = () => {
    setFocusedInput((prevState) => !prevState);
  };
  const handleClickDate = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day);
    onChangeDate(newDate);
  };
  const closeCalendar = () => {
    setFocusedInput((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickListener = (e: MouseEvent) => {
      const target = e.target as Element;

      if (!calendar.current?.contains(target as Node)) {
        closeCalendar();
      }
    };
    if (isFocusedInput) {
      window.addEventListener("click", handleClickListener);
    } else {
      window.removeEventListener("click", handleClickListener);
    }
    return () => {
      window.removeEventListener("click", handleClickListener);
    };
  }, [isFocusedInput]);

  return (
    <div
      ref={calendar}
      className="DatePicker dark:text-brand-white w-full brand-md:max-w-[15rem] relative"
    >
      <div
        onClick={handleClickInput}
        className={`mx-auto flex justify-between cursor-pointer items-center px-[1rem] h-[3rem] border-solid border-2 select-none rounded dark:bg-brand-gray-muted dark:border-transparent ${
          isFocusedInput
            ? "border-brand-violet"
            : "border-brand-violet-highlight"
        }`}
      >
        <input
          type="text"
          readOnly={true}
          className="input-calendar bg-transparent text-start cursor-pointer focus:outline-none caret-transparent"
          value={formatDate(initialDate)}
          ref={inputElement}
          name="dateComponentInput"
        />
        <div>
          <img src="./assets/images/icon-calendar.svg" alt="Calendar icon" />
        </div>
      </div>
      {isFocusedInput && (
        <Calendar
          initialDate={initialDate}
          closeCalendar={closeCalendar}
          handleClickDate={handleClickDate}
        />
      )}
    </div>
  );
}
