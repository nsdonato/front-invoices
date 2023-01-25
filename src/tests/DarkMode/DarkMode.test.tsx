import DarkMode from "../../components/Darkmode";
import { render } from "../../utils/test-utils";

describe("DarkMode", () => {
  test("Should render the correct icon based on the theme", () => {
    const { getByAltText } = render(<DarkMode />);

    expect(getByAltText("Light theme icon")).toBeTruthy();
  });
});
