import { Filter } from "../components/Filter/Filter";
import { render, screen, vi } from "../utils/test-utils";

describe("Filter", () => {
  test("should render and open dropdown", async () => {
    const toggleOpen = () => vi.fn();
    const buttonText = "Filter by status";
    const isOpen = true;
    const selectFilter = vi.fn();

    render(
      <Filter
        toggleOpen={toggleOpen}
        buttonText={buttonText}
        isOpen={isOpen}
        selectFilter={selectFilter}
      />
    );

    const dropdown = screen.getByRole("listbox");

    expect(screen.getByText(buttonText)).toBeInTheDocument();

    expect(dropdown).toBeInTheDocument();

    screen.getByText("Draft");
    screen.getByText("Paid");
    screen.getByText("Pending");
  });
});
