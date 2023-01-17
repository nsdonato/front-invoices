import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <button className="bg-brand-violet hover:bg-brand-violet-light text-brand-white flex py-1.5 pl-1.5 pr-3.5 rounded-3xl md:py-2 md:pl-2 md:pr-4">
      <FontAwesomeIcon className="text-xl mr-2.5 md:mr-4" icon={faCirclePlus} />
      <span className="text-sm py-2 md:hidden">New</span>
      <span className="hidden md:block md:text-sm md:py-2">New Invoice</span>
    </button>
  );
}

export default Button;
