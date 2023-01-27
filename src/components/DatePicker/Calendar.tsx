import { useEffect, useState } from "react";
import { useDaysCalendar } from "./helpers/useDaysCalendar";

interface CalendarProps {
  closeCalendar: () => void;
  handleClickDate: (day: number, month: number, year: number) => void;
  date: Date;
  theme: string;
  isDarkTheme: (theme: string) => boolean;
}
export function Calendar({
  closeCalendar,
  handleClickDate,
  date,
  theme,
  isDarkTheme,
}: CalendarProps) {
  const dateFromInput = date;
  const [dateInCalendar, setDateInCalendar] = useState<Date>(dateFromInput);
  const {
    handlePrevMonth,
    handleNextMonth,
    yearCounter,
    monthCounter,
    totalDaysToRender,
    daysInMonth,
    year,
    nameMonth,
    month,
  } = useDaysCalendar({
    dateToRenderInCalendar: dateInCalendar,
  });

  useEffect(() => {
    const firstDayMonth = 1;
    const newDateInCalendar = new Date(
      yearCounter,
      monthCounter,
      firstDayMonth
    );
    setDateInCalendar(newDateInCalendar);
  }, [monthCounter, yearCounter]);

  const isDaySelected = (day: number, month: number, year: number) => {
    return (
      date.getDate() === day &&
      date.getMonth() === month &&
      date.getFullYear() === year
    );
  };
  const isWithinTheMonth = (day: number) => {
    return day < daysInMonth;
  };

  return (
    <div
      className={`w-full flex flex-col items-center gap-5 h-[243px] px-[18px] max-w-[240px] self-start brand-md:self-center rounded-lg mt-4
      ${isDarkTheme(theme) ? "bg-[#252945]" : "border-[red]"} `}
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
              className={`hover:cursor-pointer text-center font-bold text-sm h-[15px] 
                ${
                  isDarkTheme(theme)
                    ? isDaySelected(day, month, year)
                      ? "text-brand-violet"
                      : isWithinTheMonth(i)
                      ? "text-brand-white"
                      : "text-brand-text-muted pointer-events-none"
                    : isDaySelected(day, month, year)
                    ? "text-brand-violet"
                    : isWithinTheMonth(i)
                    ? "text-brand-text"
                    : "text-brand-text-muted pointer-events-none"
                }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
