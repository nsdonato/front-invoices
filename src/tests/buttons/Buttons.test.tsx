import Button from "../../components/buttons/Button1";
import { render, screen } from "../../utils/test-utils";

describe("Button display", () => {
  test("should render", () => {
    render(<Button />);
    const span = screen.getByText(/New Invoice/i);
    expect(span).toBeInTheDocument();
  });
});
