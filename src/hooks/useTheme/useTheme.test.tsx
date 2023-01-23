import useTheme from ".";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should set theme in state and localStorage", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");

    act(() => {
      result.current.handleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  test("should add the dark class to the HTML element when theme is set to dark", () => {
    const { result } = renderHook(() => useTheme());

    expect(document.documentElement.classList.contains("dark")).toBeFalsy();

    act(() => {
      result.current.handleTheme();
    });

    expect(document.documentElement.classList.contains("dark")).toBeTruthy();
  });
});
