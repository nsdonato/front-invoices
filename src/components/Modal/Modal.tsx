import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import Backdrop from "../Backdrop/Backdrop";

interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  title: string;
  maxWidth?: number;
  onCloseRequest: () => void;
}

function Modal({
  children,
  show,
  title = "Confirm Deletion",
  onCloseRequest,
}: ModalProps) {
  useEscapeKey(onCloseRequest);
  return (
    <Backdrop show={show} onClick={onCloseRequest}>
      <div
        aria-modal="true"
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`min-h-[250px] w-[90%] max-w-[480px] brand-lg:min-w-0 bg-white rounded-lg flex flex-col p-12  ${
          show ? "translate-y-0 " : "-translate-y-[250%] opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <header>
          <h4 className="text-[24px] font-bold text-brand-text">{title}</h4>
        </header>
        {children}
      </div>
    </Backdrop>
  );
}
export default Modal;
