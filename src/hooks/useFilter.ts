import { useState } from "react";
import { Status } from "../common";

export const useFilter = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const [filterType, setFilterType] = useState<Status[]>([]);

  const filterView = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType({
      ...filterType,
      [event.target.name]: event.target.checked,
    });
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
