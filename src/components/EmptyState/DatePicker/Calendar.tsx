import { useRef } from "react";
import { useCalendar } from "./hooks/useCalendar";

export function Calendar({
  closeCalendar,
  isFocusedInput,
  handleClickDate,
  monthCounter,
  setMonthCounter,
  yearCounter,
  setFocusedInput,
  setYearCounter,
}: any = {}) {
  const { totalDaysToRender, daysInMonth, year, nameMonth } = useCalendar({
    incrementMonth: monthCounter,
    incrementYear: yearCounter,
  });
  const calendar = useRef<HTMLDivElement>(null);

  const handlePrevMonth = () => {
    let newMonth: number = monthCounter;
    if (monthCounter === 0) {
      newMonth = 11;
      setYearCounter((prevState: number) => prevState - 1);
    } else {
      newMonth -= 1;
    }
    setMonthCounter(newMonth);
  };
  const handleNextMonth = () => {
    let newMonth: number = monthCounter;
    if (monthCounter === 11) {
      newMonth = 0;
      setYearCounter((prevState: number) => prevState + 1);
    } else {
      newMonth += 1;
    }
    setMonthCounter(newMonth);
  };

  return (
    <div
      ref={calendar}
      className="border-4 border-solid border-fuchsia-500 w-full flex flex-col gap-5 h-[243px] px-[18px]"
    >
      <div className="flex justify-between tracking-tight	w-[193px] h-[15px] text-fontSize-xs line-height-[15px] pt-[25px] pb-[32px]">
        <div className="cursor-pointer font-bold" onClick={handlePrevMonth}>
          {"<"}
        </div>
        <p>{`${nameMonth} ${year}`}</p>
        <div className="cursor-pointer font-bold" onClick={handleNextMonth}>
          {">"}
        </div>
      </div>
      <div className="text-lg grid grid-cols-7 w-[203px] h-[139px]">
        {totalDaysToRender.map((day, i) => {
          return (
            <div
              onClick={() => {
                handleClickDate(day, nameMonth, year);
                closeCalendar();
              }}
              key={i}
              className={`hover:cursor-pointer text-center font-bold text-sm h-[15px] w-[18px] ${
                i < daysInMonth
                  ? "text-brand-text-DEFAULT"
                  : "text-brand-text-dull"
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
