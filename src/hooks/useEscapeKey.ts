import { useCallback, useEffect } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keydown";

export function useEscapeKey(handleClose: () => void) {
  const handleEscKey = useCallback(
    (event: Event) => {
      if (event instanceof KeyboardEvent && event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );
  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
