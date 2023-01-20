import React, { useState } from "react";

interface Props {
  options: string[];
  value?: string;
  onChange: (option: string) => void;
}

const Dropdown = ({ options, value, onChange }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleChange = (option: string) => {
    onChange(option);
    setShowOptions(false);
  };

  return (
    <div className="w-1/2 text-left text-sm font-bold">
      <div
        className={`bg-brand-white rounded border-[1px] pl-3 py-2 hover:border-brand-violet-light ${
          showOptions ? "border-brand-violet-light" : "border-brand-gray"
        }`}
      >
        <button
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {value}
        </button>
      </div>
      {showOptions ? (
        <div className="flex flex-col rounded mt-2 shadow-lg">
          {options.map((option) => (
            <button
              className="text-left border-b-[1px] last:border-b-0 py-2 hover:text-brand-violet-light"
              key={option}
              value={option}
              onClick={() => {
                handleChange(option);
              }}
            >
              <span className="pl-3">{option}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
