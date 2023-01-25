import { render } from "../utils/test-utils";
import { SvgImg } from "../components/SvgImg/SvgImg";

describe.only("SvgImg", () => {
  const src = "/public/assets/images/icon-arrow-up.svg";
  const alt = "testing-alt";

  test("should render SvgImg component", () => {
    render(<SvgImg src={src} alt={alt} />);
  });

  test("renders alt text", () => {
    const component = render(<SvgImg src={src} alt={alt} />);
    component.getByAltText(alt);
  });

  test("renders correct src", () => {
    render(<SvgImg src={src} alt={alt} />);

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain(src);
  });
});
