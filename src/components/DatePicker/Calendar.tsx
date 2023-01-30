import { useEffect, useState } from "react";
import { useDaysCalendar } from "../../hooks/useDaysCalendar";

interface CalendarProps {
  closeCalendar: () => void;
  handleClickDate: (day: number, month: number, year: number) => void;
  initialDate: Date;
}
export function Calendar({
  closeCalendar,
  handleClickDate,
  initialDate,
}: CalendarProps) {
  const dateFromInput = initialDate;
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
      initialDate.getDate() === day &&
      initialDate.getMonth() === month &&
      initialDate.getFullYear() === year
    );
  };
  const isWithinTheMonth = (day: number) => {
    return day < daysInMonth;
  };
  const getColorDay = (
    index: number,
    day: number,
    month: number,
    year: number
  ) => {
    return isWithinTheMonth(index)
      ? isDaySelected(day, month, year)
        ? "text-brand-violet"
        : "text-brand-text dark:text-brand-white"
      : "text-brand-text-muted pointer-events-none";
  };

  return (
    <div
      className={`w-full flex flex-col items-center gap-5 h-[243px] px-[18px] max-w-[240px] self-start brand-md:self-center rounded-lg mt-4 dark:bg-brand-gray-muted absolute bg-brand-white`}
    >
      <div className="flex justify-between tracking-tight	w-[193px] h-[15px] text-fontSize-xs line-height-[15px] pt-[25px] pb-[32px]">
        <div className="cursor-pointer font-bold p-1" onClick={handlePrevMonth}>
          <img src="./assets/images/icon-arrow-left.svg" alt="Left arrow" />
        </div>
        <p>
          {nameMonth} {year}
        </p>
        <div className="cursor-pointer font-bold p-1" onClick={handleNextMonth}>
          <img src="./assets/images/icon-arrow-right.svg" alt="Right arrow" />
        </div>
      </div>
      <div
        className={`text-lg grid grid-cols-7 w-[203px] h-[139px]
      `}
        role="calendar"
      >
        {totalDaysToRender.map((day, i) => {
          return (
            <div
              onClick={() => {
                handleClickDate(day, month, year);
                closeCalendar();
              }}
              key={i}
              className={`hover:cursor-pointer hover:text-brand-violet dark:hover:text-brand-violet text-center font-bold text-sm h-[15px] 
              ${getColorDay(i, day, month, year)}`}
              role="day"
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
