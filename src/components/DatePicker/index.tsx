import { useState, useRef } from "react";
import { Calendar } from "./Calendar";
import { formatDate } from "./helpers";
import { useDate } from "./hooks/useDate";

interface CalendarProps {
  theme: string;
}

export default function DatePicker({ theme }: CalendarProps) {
  const { dateToday, month } = useDate();
  const { day, year } = dateToday;
  // const initialState = new Date(year, month, day);

  const initialState = new Date(year, month, day);

  const [date, setDate] = useState<Date>(initialState);
  const [isFocusedInput, setFocusedInput] = useState<boolean>(false);
  const [monthCounter, setMonthCounter] = useState<number>(month);
  const [yearCounter, setYearCounter] = useState<number>(0);
  const inputElement = useRef(null);

  const handleClickInput = () => {
    setFocusedInput((prevState) => !prevState);
  };
  const handleClickDate = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day);
    setDate(newDate);
  };
  const closeCalendar = () => {
    setFocusedInput(false);
  };

  const isDarkTheme = (theme: string): boolean => {
    console.log(theme);
    return theme === "dark";
  };

  return (
    <div
      className={`flex flex-col items-center w-full
    ${
      isDarkTheme(theme)
        ? "bg-brand-bg-dark text-brand-white"
        : "bg-brand-white"
    }
    `}
    >
      <div
        onClick={handleClickInput}
        className={`w-full mx-auto flex justify-between cursor-pointer items-center px-[1rem] h-[3rem] border-solid border-2 brand-md:max-w-[15rem] rounded
        ${
          isDarkTheme(theme)
            ? "bg-[#252945] border-transparent"
            : " border-brand-violet"
        }
        `}
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
          setDate={setDate}
          isFocusedInput={isFocusedInput}
          closeCalendar={closeCalendar}
          handleClickDate={handleClickDate}
          monthCounter={monthCounter}
          setMonthCounter={setMonthCounter}
          yearCounter={yearCounter}
          setYearCounter={setYearCounter}
          setFocusedInput={setFocusedInput}
        />
      )}
    </div>
  );
}
