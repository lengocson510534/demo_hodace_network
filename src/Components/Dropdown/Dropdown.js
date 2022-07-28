import React, { useState } from "react";

const Dropdown = (props) => {
  const [active, setIsActive] = useState(false);

  const handlerClick = () => {
    setIsActive(!active);
  };

  return (
    <div className="relative">
      <div
        className=" mr-5 flex items-center justify-around hover:cursor-pointer bg-white shadow-md w-auto min-w-[205px] h-7 rounded-xl px-2"
        onClick={handlerClick}
      >
        <i className="bx bxs-bar-chart-alt-2 mx-2"></i>
        <span className="mx-2">{props.option}</span>
        <i className="bx bx-chevron-down text-2xl ml-3"></i>
      </div>
      <ul
        className={`absolute z-50 top-[34px] rounded-xl p-2 left-0 w-40 bg-white ${
          active ? "block" : "hidden"
        }`}
      >
        {props.listItem.map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-blur hover:cursor-pointer"
            onClick={() => {
              props.handlerClickOption(item.title);
              setIsActive(!active);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
