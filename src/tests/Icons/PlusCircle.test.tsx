import PlusCircle from "../../components/Icons/PlusCircle";
import { render } from "../../utils/test-utils";

describe("rendering", () => {
  test("render PlusCircle component correctly", async () => {
    const size = 32;
    const color = "white";
    const { container } = render(<PlusCircle size={size} color={color} />);
    const icon = container.querySelector("svg");
    expect(icon).toHaveAttribute("width", size.toString());
    expect(icon).toHaveAttribute("height", size.toString());
    expect(container.querySelector("circle")).toHaveAttribute(
      "fill",
      color.toString()
    );
  });
});
