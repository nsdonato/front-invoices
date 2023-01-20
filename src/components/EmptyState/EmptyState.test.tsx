import EmptyState from ".";
import { render, screen } from "../../utils/test-utils";

describe("EmptyState", () => {
  const imageAlt = "Emtpy State Icon";
  const imagePath = "/empty_state.svg";
  const title = "There is nothing here";
  const description =
    "Create an invoice by clicking the New Invoice button and get started";

  test("should render an image with the correct source and alt text", () => {
    render(
      <EmptyState
        title={title}
        imagePath={imagePath}
        imageAlt={imageAlt}
        description={description}
      />
    );

    const img = screen.getByAltText(imageAlt);

    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toEqual(imagePath);
  });

  test("should render a title and a description", () => {
    render(
      <EmptyState
        title={title}
        imagePath={imagePath}
        imageAlt={imageAlt}
        description={description}
      />
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
