import { Filter } from "../components/Filter/Filter";
import { render, screen, vi } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe.only("Filter", () => {
  test("should render Filter component", () => {
    const toggleOpen = () => vi.fn();
    const buttonText = "Cracks";
    const filtersType = {
      draft: false,
      paid: false,
      pending: false,
    };
    const isOpen = true;
    const selectFilter = vi.fn();

    render(
      <Filter
        toggleOpen={toggleOpen}
        buttonText={buttonText}
        filtersType={filtersType}
        isOpen={isOpen}
        selectFilter={selectFilter}
      />
    );
  });

  test("should open dropdown", async () => {
    const toggleOpen = () => vi.fn();

    const filtersType = {
      draft: false,
      paid: false,
      pending: false,
    };
    const isOpen = true;
    const selectFilter = vi.fn();

    render(
      <Filter
        toggleOpen={toggleOpen}
        buttonText={"Filter by status"}
        filtersType={filtersType}
        isOpen={isOpen}
        selectFilter={selectFilter}
      />
    );

    const filterButtonToOpen = screen.getByRole("button", {
      name: /filter/i,
    });

    await userEvent.click(filterButtonToOpen);

    const dropdown = screen.getByRole("listbox");

    expect(dropdown).toBeInTheDocument();
  });

  test("show options", () => {
    const toggleOpen = () => vi.fn();

    const filtersType = {
      draft: false,
      paid: false,
      pending: false,
    };
    const isOpen = true;
    const selectFilter = vi.fn();

    const component = render(
      <Filter
        toggleOpen={toggleOpen}
        buttonText={"Filter by"}
        filtersType={filtersType}
        isOpen={isOpen}
        selectFilter={selectFilter}
      />
    );

    component.getByText("Paid");
    component.getByText("Pending");
    component.getByText("Draft");
  });
});
