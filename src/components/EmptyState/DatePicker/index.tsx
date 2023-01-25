import { useState, useRef } from "react";
import { Calendar } from "./Calendar";
import { useCalendar } from "./hooks/useCalendar";

export default function DatePicker() {
  const { dateToday, nameMonth } = useCalendar();
  const { day, year } = dateToday;
  const initialState = `${day} ${nameMonth} ${year}`;

  const [date, setDate] = useState<string>(initialState);
  const [isFocusedInput, setFocusedInput] = useState<boolean>(false);
  const [monthCounter, setMonthCounter] = useState<number>(0);
  const [yearCounter, setYearCounter] = useState<number>(0);
  const inputElement = useRef(null);

  const handleClickInput = () => {
    setFocusedInput((prevState) => !prevState);
  };
  const handleClickDate = (day: number, nameMonth: string, year: number) => {
    setDate(`${day} ${nameMonth} ${year}`);
  };
  const closeCalendar = () => {
    setFocusedInput(false);
  };

  return (
    <div className="flex flex-col items-center border-solid border-4 border-cyan-500 w-[15rem]">
      <div className="w-full mx-auto">
        <input
          type="text"
          readOnly={true}
          className="input-calendar cursor-pointer text-center border-black border-solid border-2 w-full caret-transparent"
          onClick={handleClickInput}
          value={date}
          ref={inputElement}
          name="dateComponentInput"
        />
      </div>
      {isFocusedInput && (
        <Calendar
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
