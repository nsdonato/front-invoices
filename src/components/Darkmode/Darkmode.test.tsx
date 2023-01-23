import Darkmode from ".";
import { render } from "../../utils/test-utils";

describe("Darkmode", () => {
  test("Should render the correct icon based on the theme", () => {
    const { getByAltText } = render(<Darkmode />);

    expect(getByAltText("Light theme icon")).toBeTruthy();
  });
});
