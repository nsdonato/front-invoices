import useTheme from ".";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set theme in state and localStorage", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");

    act(() => {
      result.current.handleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
