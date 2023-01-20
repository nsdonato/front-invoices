import { render, screen } from "@testing-library/react";
import { userEvent } from "../../utils/test-utils";
import Modal from "./Modal";

describe("Modal", () => {
  let show = true;

  function handleClick() {
    show = false;
  }

  test("should render modal content and title", async () => {
    render(
      <Modal title="Modal test" show={true} onCloseRequest={handleClick}>
        Hola
      </Modal>
    );

    const modalContent = screen.getByText(/Hola/i);
    expect(modalContent).toBeInTheDocument();

    const modalTitle = screen.getByText(/Modal test/i);
    expect(modalTitle).toBeInTheDocument();
  });

  test("should render handle click", async () => {
    render(
      <Modal title="Modal test" show={true} onCloseRequest={handleClick}>
        Hola
      </Modal>
    );

    const backdrop = screen.getByRole("dialog");

    await userEvent.click(backdrop);
    expect(show).toBe(false);
  });
});
