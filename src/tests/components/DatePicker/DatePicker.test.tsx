import { fireEvent, render } from "@testing-library/react";
import DatePicker from "../../../components/DatePicker";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dateToday = new Date().getDate();
const month = months[new Date().getMonth()];
const year = new Date().getFullYear();

test("DatePicker should render", () => {
  const component = render(
    <DatePicker initialDate={new Date()} onChangeDate={() => {}} />
  );
  expect(component.getByRole("textbox")).toBeInTheDocument();
});

test("DatePicker should have value 'day shortMonth year'", () => {
  const component = render(
    <DatePicker initialDate={new Date()} onChangeDate={() => {}} />
  );
  const dateContent = `${dateToday} ${month} ${year}`;
  component.getByDisplayValue(dateContent);
});

test("Calendar should render after clicking the input", () => {
  const component = render(
    <DatePicker initialDate={new Date()} onChangeDate={() => {}} />
  );
  const input = component.getByRole("textbox");
  fireEvent.click(input);
  const dateContent = `${month} ${year}`;
  const calendar = component.getByText(dateContent);
  expect(calendar).toBeInTheDocument();
});

test("Calendar should close when a date is clicked", () => {
  const component = render(
    <DatePicker initialDate={new Date()} onChangeDate={() => {}} />
  );
  const input = component.getByRole("textbox");
  fireEvent.click(input);

  const calendar = component.getByRole("calendar");
  const firstDayElement = component.container.querySelector(
    '[role="calendar"] [role="day"]'
  ) as Element;
  fireEvent.click(firstDayElement);
  expect(calendar).not.toBeInTheDocument();
});
