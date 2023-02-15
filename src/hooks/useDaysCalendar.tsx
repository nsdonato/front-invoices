import { useState } from "react";
import { months } from "../components/DatePicker/helpers";

interface dateToRenderInCalendarProp {
  dateToRenderInCalendar: Date;
}
interface dateInNumbers {
  year: number;
  month: number;
  day: number;
}
export function useDaysCalendar({
  dateToRenderInCalendar,
}: dateToRenderInCalendarProp) {
  const dateInCalendar = dateToRenderInCalendar;
  const initialMonth = dateInCalendar.getMonth();
  const initialYear = dateInCalendar.getFullYear();
  const [monthCounter, setMonthCounter] = useState<number>(initialMonth);
  const [yearCounter, setYearCounter] = useState<number>(initialYear);

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
  const getDateInNumbers = (date: Date): dateInNumbers => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { year, month, day };
  };
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const { year, month } = getDateInNumbers(dateToRenderInCalendar);
  const daysInMonth = getDaysInMonth(month, year);
  const maxElementsInGrid = 35;
  const lastDayFourthRow = 28;
  const days = Array(daysInMonth)
    .fill("")
    .map((_, i) => {
      return i + 1;
    });
  let totalDaysToRender = [];

  if (days.length > lastDayFourthRow) {
    const diff = maxElementsInGrid - daysInMonth;
    const restOfDays = Array(diff)
      .fill("")
      .map((_, i) => i + 1);
    totalDaysToRender = days.concat(restOfDays);
  } else {
    totalDaysToRender = days;
  }

  return {
    handlePrevMonth,
    handleNextMonth,
    yearCounter,
    monthCounter,
    totalDaysToRender,
    daysInMonth,
    nameMonth: months[month],
    month,
    year,
  };
}
