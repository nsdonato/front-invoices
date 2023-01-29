import { useState } from "react";
import { Status } from "../common";

export const useFilter = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const [filterType, setFilterType] = useState<Status[]>([]);

  const filterView = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newFilterType = [...filterType];
      newFilterType.push(event.target.name as Status);
      setFilterType(newFilterType);
    } else {
      setFilterType(filterType.filter((item) => item !== event.target.name));
    }
  };

  const clickHandler = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggleOpen: clickHandler,
    filtersType: filterType,
    selectFilter: filterView,
  };
};
