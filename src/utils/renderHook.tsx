import { useEffect, useRef } from "react";
import { render } from "@testing-library/react";

// this function was made because the package is not yet updated with React 18.
function renderHook(renderCallback: any, options?: any) {
  const { initialProps, wrapper } = options;
  const result = useRef();

  function TestComponent({ renderCallbackProps }: any) {
    const pendingResult = renderCallback(renderCallbackProps);

    useEffect(() => {
      result.current = pendingResult;
    });

    return null;
  }

  const { rerender: baseRerender, unmount } = render(
    <TestComponent renderCallbackProps={initialProps} />,
    { wrapper }
  );

  function rerender(rerenderCallbackProps: any) {
    baseRerender(<TestComponent renderCallbackProps={rerenderCallbackProps} />);
  }

  return { result, rerender, unmount };
}

export default renderHook;
