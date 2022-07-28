import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="bg-gray-f8 border-b-[1px] border-solid border-gray-blur shadow-inner pb-2">
      <div className="flex justify-between items-center h-24 max-w-5xl mx-auto">
        <div>
          <div className="uppercase text-2xl font-bold tracking-widest h-8 flex items-center">
            <h2 className="inline-block">hodace</h2>
            <p className="px-2 pt-1 ml-3 inline-block h-8 bg-main text-white font-medium text-base uppercase tracking-widest">
              network
            </p>
          </div>
          <p className="text-xs text-right mt-2">
            Giải pháp toàn diện cho dữ liệu BDS
          </p>
        </div>
        <div className="bg-gray-blur w-[20rem] h-12 px-4 flex items-center justify-between rounded-full">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="bg-inherit flex-1"
          />
          <i className="bx bx-search w-11 text-right text-main text-2xl relative after:w-[2px] after:h-full after:bg-[#B0B0B0] after:absolute after:top-0 after:left-0"></i>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
