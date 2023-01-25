import { Filter } from "../components/Filter/Filter";
import { render, screen, fireEvent } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe.only("Filter", () => {
  test("should render Filter component", () => {
    render(<Filter />);
  });

  test("should open dropdown", async () => {
    render(<Filter />);

    const filterButtonToOpen = screen.getByRole("button", {
      name: /filter/i,
    });

    await userEvent.click(filterButtonToOpen);

    const dropdown = screen.getByRole("listbox");

    expect(dropdown).toBeInTheDocument();
  });

  test("show options", () => {
    const component = render(<Filter />);

    component.getByText("Paid");
    component.getByText("Pending");
    component.getByText("Draft");
  });

  test(" dropdown toggle visibility at click", () => {
    const { container } = render(<Filter />);

    const filterButtonToOpen = screen.getByRole("button", {
      name: /filter/i,
    });

    fireEvent.click(filterButtonToOpen);

    const filterList = container.querySelector(".absolute.flex-col");
    expect(filterList).toHaveClass("flex");

    fireEvent.click(filterButtonToOpen);
    expect(filterList).not.toHaveClass("flex");
  });
});
