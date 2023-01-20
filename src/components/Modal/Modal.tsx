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
  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.nativeEvent.stopImmediatePropagation();
      event.stopPropagation();
      onCloseRequest();
    }
  };

  return (
    <Backdrop show={show} onClick={onCloseRequest}>
      <div
        aria-modal="true"
        onKeyDown={handleKeydown}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`h-[250px] w-[90%] max-w-[480px] brand-lg:min-w-0 bg-white rounded-lg flex flex-col p-12  ${
          show ? "translate-y-0 " : "-translate-y-[250%] opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <header>
          <h4 className="text-[24px] font-bold">{title}</h4>
        </header>
        {children}
      </div>
    </Backdrop>
  );
}
export default Modal;
