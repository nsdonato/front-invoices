import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../../../components/Modal/Modal";

describe("Modal", () => {
  let show = true;

  function onCloseRequest() {
    show = false;
  }

  test("should render modal content and title", async () => {
    render(
      <Modal title="Modal test" show={true} onCloseRequest={onCloseRequest}>
        Hola
      </Modal>
    );

    const modalContent = screen.getByText(/Hola/i);
    expect(modalContent).toBeInTheDocument();

    const modalTitle = screen.getByText(/Modal test/i);
    expect(modalTitle).toBeInTheDocument();
  });

  test("should handle click", async () => {
    render(
      <Modal title="Modal test" show={true} onCloseRequest={onCloseRequest}>
        Hola
      </Modal>
    );

    const backdrop = screen.getByRole("dialog");

    await userEvent.click(backdrop);
    expect(show).toBe(false);
  });
  test("should handle esc key", async () => {
    render(
      <Modal title="Modal test" show={true} onCloseRequest={onCloseRequest}>
        Hola
      </Modal>
    );

    await userEvent.keyboard("{Escape}");
    expect(show).toBe(false);
  });
});
