import Button from "../../components/Button";
import PlusCircle from "../../components/Icons/PlusCircle";
import { render, screen, fireEvent } from "../../utils/test-utils";

describe("Button", () => {
  describe("rendering", () => {
    test("render button only text correctly", async () => {
      render(
        <Button
          onClick={() => {
            console.log("Mark as Paid");
          }}
        >
          Mark as Paid
        </Button>
      );
      expect(screen.getByText("Mark as Paid"));
    });
    test("render button [icon & text] correctly", async () => {
      render(
        <Button
          onClick={() => {
            console.log("New Invoice");
          }}
        >
          <PlusCircle size={32} color="white" />
          New Invoice
        </Button>
      );
      expect(screen.getByText("New Invoice"));
      expect(screen.queryByRole("svg", { name: /plus circle icon/i }));
      expect(screen.getByText("New Invoice")).toBeInTheDocument();
    });
  });

  describe("variant property", () => {
    test("change primary variant correctly", async () => {
      render(
        <Button
          variant="primary"
          onClick={() => {
            console.log("Click me");
          }}
        >
          Click me
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-brand-violet hover:bg-brand-violet-light text-brand-white"
      );
    });
    test("change secondary variant correctly", async () => {
      render(
        <Button
          variant="secondary"
          onClick={() => {
            console.log("Click me");
          }}
        >
          Click me
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-brand-violet-ghost hover:bg-brand-violet-highlight text-brand-violet-muted"
      );
    });
    test("change tertiary variant correctly", async () => {
      render(
        <Button
          variant="tertiary"
          onClick={() => {
            console.log("Click me");
          }}
        >
          Click me
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-brand-gray hover:bg-brand-text text-brand-text-muted"
      );
    });
    test("change delete variant correctly", async () => {
      render(
        <Button
          variant="delete"
          onClick={() => {
            console.log("Click me");
          }}
        >
          Click me
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-brand-red hover:bg-brand-red-light text-brand-white"
      );
    });
  });

  describe("text", () => {
    test("width full", async () => {
      render(
        <Button
          widthFull
          onClick={() => {
            console.log("Click me");
          }}
        >
          Click me
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("w-full justify-center");
    });
  });

  describe("onClick event", () => {
    test("onClick", async () => {
      let isClicked = false;
      const handleClick = () => {
        isClicked = true;
      };
      render(<Button onClick={handleClick}>Click me</Button>);
      fireEvent.click(screen.getByText("Click me"));
      expect(isClicked).toBe(true);
    });
  });
});
