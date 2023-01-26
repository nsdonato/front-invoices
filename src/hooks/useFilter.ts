import { useState } from "react";

export const useFilter = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const [filterType, setFilterType] = useState({
    draft: false,
    paid: false,
    pending: false,
  });

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
