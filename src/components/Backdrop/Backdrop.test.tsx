import { render, screen } from "@testing-library/react";
import { userEvent } from "../../utils/test-utils";
import Backdrop from "./Backdrop";

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
  test("should render handle click", async () => {
    render(<Backdrop show={show} onClick={handleClick} />);

    const backdrop = screen.getByRole("dialog");

    await userEvent.click(backdrop);
    expect(show).toBe(false);
  });
});
