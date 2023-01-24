import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Backdrop from "../../../components/Backdrop/Backdrop";

describe("Backdrop", () => {
  let show = true;

  function handleClick() {
    show = false;
  }

  test("should render backdorp", async () => {
    render(<Backdrop show={show} onClick={handleClick} />);

    const backdrop = screen.getByRole("dialog");
    expect(backdrop).toBeInTheDocument();
  });
  test("should handle click", async () => {
    render(<Backdrop show={show} onClick={handleClick} />);

    const backdrop = screen.getByRole("dialog");

    await userEvent.click(backdrop);
    expect(show).toBe(false);
  });
  test("should not be displayed", async () => {
    const { rerender } = render(<Backdrop show={show} onClick={handleClick} />);

    const backdrop = screen.getByRole("dialog");

    await userEvent.click(backdrop);
    expect(show).toBe(false);

    rerender(<Backdrop show={show} onClick={handleClick} />);
    expect(backdrop).toHaveClass("opacity-0 pointer-events-none");
  });
});
