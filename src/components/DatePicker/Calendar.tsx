import { useEffect, useRef } from "react";
import { useDate } from "./hooks/useDate";

interface CalendarProps {
  theme: string;
  isDarkTheme: (theme: string) => boolean;
  date: Date;
  closeCalendar: () => void;
  handleClickDate: (day: number, month: number, year: number) => void;
  setMonthCounter: React.Dispatch<React.SetStateAction<number>>;
  monthCounter: number;
  yearCounter: number;
  setYearCounter: React.Dispatch<React.SetStateAction<number>>;
}

export function Calendar({
  closeCalendar,
  handleClickDate,
  monthCounter,
  setMonthCounter,
  yearCounter,
  setYearCounter,
  date,
  theme,
  isDarkTheme,
}: CalendarProps) {
  const { totalDaysToRender, daysInMonth, year, nameMonth, month } = useDate({
    incrementMonth: monthCounter,
    incrementYear: yearCounter,
    inputDate: date,
  });
  const calendar = useRef<HTMLDivElement>(null);

  const handlePrevMonth = () => {
    let newMonth: number = monthCounter;
    if (monthCounter === 0) {
      newMonth = 11;
      setYearCounter(yearCounter - 1);
    } else {
      newMonth -= 1;
    }
    setMonthCounter(newMonth);
  };
  const handleNextMonth = () => {
    let newMonth: number = monthCounter;
    if (monthCounter === 11) {
      newMonth = 0;
      setYearCounter(yearCounter + 1);
    } else {
      newMonth += 1;
    }
    setMonthCounter(newMonth);
  };

  useEffect(() => {
    return () => {
      setMonthCounter(date.getMonth());
      setYearCounter(0);
    };
  }, []);

  const isDaySelected = (day: number, month: number, year: number) => {
    return (
      date.getDate() === day &&
      date.getMonth() === month &&
      date.getFullYear() === year
    );
  };

  return (
    <div
      ref={calendar}
      className={`w-full flex flex-col gap-5 h-[243px] px-[18px] max-w-[240px] self-start brand-md:self-center rounded-lg mt-4
      ${isDarkTheme(theme) ? "bg-[#252945]" : ""} `}
    >
      <div className="flex justify-between tracking-tight	w-[193px] h-[15px] text-fontSize-xs line-height-[15px] pt-[25px] pb-[32px]">
        <div className="cursor-pointer font-bold p-1" onClick={handlePrevMonth}>
          <img src="./assets/icon-arrow-left.svg" alt="Left arrow" />
        </div>
        <p>
          {nameMonth} {year}
        </p>
        <div className="cursor-pointer font-bold p-1" onClick={handleNextMonth}>
          <img src="./assets/icon-arrow-right.svg" alt="Right arrow" />
        </div>
      </div>
      <div
        className={`text-lg grid grid-cols-7 w-[203px] h-[139px]
      `}
      >
        {totalDaysToRender.map((day, i) => {
          return (
            <div
              onClick={() => {
                handleClickDate(day, month, year);
                closeCalendar();
              }}
              key={i}
              className={`hover:cursor-pointer text-center font-bold text-sm h-[15px] w-[18px] ${
                i < daysInMonth
                  ? "text-brand-text"
                  : "text-brand-text-muted pointer-events-none"
              }
              ${isDaySelected(day, month, year) ? "text-brand-violet" : ""}
              ${isDarkTheme(theme) ? "text-brand-white" : ""}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
