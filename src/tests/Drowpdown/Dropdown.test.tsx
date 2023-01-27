import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Dropdown from "../../components/Dropdown/Dropdown";

test("renders Dropdown component correctly", () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("dropdown");
  expect(dropdownElement).toBeInTheDocument();
});

test("all values are in dropdown", () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("term-list");
  expect(dropdownElement).toHaveTextContent("Net 1 day");
  expect(dropdownElement).toHaveTextContent("Net 7 days");
  expect(dropdownElement).toHaveTextContent("Net 14 days");
  expect(dropdownElement).toHaveTextContent("Net 30 days");
});

test("verify dropdown default value is 30 days", () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("dropdown");
  expect(dropdownElement.children[0]).toHaveTextContent("Net 30 days");
});

test("dropdown has 4 options", () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("term-list");
  expect(dropdownElement.children.length).toBe(4);
});

test("verify on click on the dropdown should display a list containing values.", async () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("dropdown");
  await act(async () => {
    dropdownElement.click();
  });
  const dropdownList = screen.getByTestId("term-container");
  expect(dropdownList).toBeVisible();
});
