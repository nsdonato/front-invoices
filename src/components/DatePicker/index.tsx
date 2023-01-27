import { useState, useRef, useEffect } from "react";
import { Calendar } from "./Calendar";
import { formatDate } from "./helpers";
interface CalendarProps {
  theme: string;
}

export default function DatePicker({ theme }: CalendarProps) {
  // const { dateToday, month } = useDate();
  // const { day, year } = dateToday;
  // const initialState = new Date(year, month, day);

  // const initialState = new Date(year, month, day);
  const initialState = new Date();
  const [date, setDate] = useState<Date>(initialState);
  const [isFocusedInput, setFocusedInput] = useState<boolean>(false);
  const inputElement = useRef(null);
  const calendar = useRef<HTMLDivElement>(null);

  const handleClickInput = () => {
    setFocusedInput((prevState) => !prevState);
  };
  const handleClickDate = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day);
    setDate(newDate);
  };
  const closeCalendar = () => {
    setFocusedInput((prevState) => !prevState);
  };

  const isDarkTheme = (theme: string): boolean => {
    return theme === "dark";
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
      className={`flex flex-col items-center w-full ${
        isDarkTheme(theme)
          ? "bg-brand-bg-dark text-brand-white"
          : "bg-brand-white"
      }`}
    >
      <div ref={calendar} className="DatePicker w-full brand-md:max-w-[15rem]">
        <div
          onClick={handleClickInput}
          className={`mx-auto flex justify-between cursor-pointer items-center px-[1rem] h-[3rem] border-solid border-2 select-none rounded ${
            isDarkTheme(theme)
              ? "bg-[#252945] border-transparent"
              : isFocusedInput
              ? "border-brand-violet"
              : "border-brand-violet-highlight"
          }`}
        >
          <input
            type="text"
            readOnly={true}
            className="input-calendar bg-transparent text-start cursor-pointer focus:outline-none caret-transparent"
            value={formatDate(date)}
            ref={inputElement}
            name="dateComponentInput"
          />
          <div>
            <img src="./assets/icon-calendar.svg" alt="Calendar icon" />
          </div>
        </div>
        {isFocusedInput && (
          <Calendar
            theme={theme}
            isDarkTheme={isDarkTheme}
            date={date}
            closeCalendar={closeCalendar}
            handleClickDate={handleClickDate}
          />
        )}
      </div>
    </div>
  );
}
