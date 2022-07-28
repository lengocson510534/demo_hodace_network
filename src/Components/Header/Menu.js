import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const dataMenuFake = [
    {
      id: 1,
      name: "Trang Chủ",
      icon: "bx bxs-home",
      path: "/",
    },
    {
      id: 2,
      name: "Gói Vay",
      icon: "bx bxs-dollar-circle",
      path: "/",
    },
    {
      id: 3,
      name: "Chủ nhà",
      icon: "bx bxs-key",
      path: "/",
    },
    {
      id: 4,
      name: "Điện thoại",
      icon: "bx bxs-phone",
      path: "/phone",
    },
    {
      id: 5,
      name: "Thống kê",
      icon: "bx bxs-bar-chart-square",
      path: "/statistics",
    },
    {
      id: 6,
      name: "",
      icon: "bx bx-menu-alt-right",
      path: "/",
    },
  ];

  return (
    <ul className="flex items-center justify-between text-[#474747] max-w-5xl mx-auto">
      {dataMenuFake.map((item) => (
        <li
          key={item.id}
          className="text-center hover:text-main hover:cursor-pointer focus:text-main"
        >
          <Link to={item.path}>
            <i className={`${item.icon} text-3xl`} />
            <p className="text-sm">{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
