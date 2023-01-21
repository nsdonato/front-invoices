import Button from "../../components/Button/Button";
import { render, screen } from "../../utils/test-utils";

describe("Button 1 display", () => {
  test("should render", () => {
    render(
      <Button
        buttonLabel="New Invoice"
        onClick={() => {
          console.log("Add New Item");
        }}
      />
    );
    const span = screen.getByText(/New Invoice/i);
    expect(span).toBeInTheDocument();
  });
});

describe("Button 3 display", () => {
  test("should render", () => {
    render(
      <Button
        variant="secondary"
        buttonLabel="Edit"
        onClick={() => {
          console.log("Edit");
        }}
      />
    );
    const button = screen.getByText("Edit");
    expect(button.classList.contains("my-2")).toBe(true);
    expect(button.textContent).toBe("Edit");
  });
});

describe("Button 4 display", () => {
  test("should render", () => {
    render(
      <Button
        variant="tertiary"
        buttonLabel="Save as Draft"
        onClick={() => {
          console.log("Save as Draft");
        }}
      />
    );
    const span = screen.getByText(/Save as Draft/i);
    expect(span).toBeInTheDocument();
  });
});

describe("Button 5 display", () => {
  test("should render", () => {
    render(
      <Button
        variant="delete"
        buttonLabel="Delete"
        onClick={() => {
          console.log("Delete");
        }}
      />
    );
    const span = screen.getByText(/Delete/i);
    expect(span).toBeInTheDocument();
  });
});
