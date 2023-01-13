import App from "../App";
import { render, screen } from "../utils/test-utils";

describe("App", () => {
  test("should render", () => {
    render(<App />);

    expect(screen.getByText(/invoice app/i)).toBeInTheDocument();
  });
});
