import React from "react";
import { render } from "@testing-library/react";

function renderHook(renderCallback, options = {}) {
  const { initialProps, wrapper } = options;
  const result = React.createRef();

  function TestComponent({ renderCallbackProps }: any) {
    const pendingResult = renderCallback(renderCallbackProps);

    React.useEffect(() => {
      result.current = pendingResult;
    });

    return null;
  }

  const { rerender: baseRerender, unmount } = render(
    <TestComponent renderCallbackProps={initialProps} />,
    { wrapper }
  );

  function rerender(rerenderCallbackProps) {
    baseRerender(<TestComponent renderCallbackProps={rerenderCallbackProps} />);
  }

  return { result, rerender, unmount };
}

export default renderHook;
