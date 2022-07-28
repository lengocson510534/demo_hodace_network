import React from "react";
import ZaloLogo from "../../assets/icon_svg/zalo.svg";

import { dataFooterFake } from "../../datafake/DataFake";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-f8 border-t-[1px] border-solid border-gray-blur shadow-inner">
      <div className="flex justify-between max-w-5xl mx-auto">
        {dataFooterFake.map((item) => (
          <ul key={item.id}>
            <h3 className="mb-[15px] font-bold text-lg uppercase border-b-4 border-solid border-main inline-block">
              {item.title}
            </h3>
            {item.listItem.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-70 mb-2 text-sm hover:cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ))}
        <div>
          <h3 className="mb-[15px] font-bold uppercase border-b-4 border-solid border-main inline-block">
            Liên hệ dịch vụ
          </h3>
          <div className="flex items-center">
            <img
              src={ZaloLogo}
              alt="Logo Zalo"
              className="w-[36px] hover:cursor-pointer"
            />
            <i className="bx bxl-messenger text-5xl text-main ml-4 hover:cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h3 className="mb-[15px] font-bold uppercase border-b-4 border-solid border-main inline-block">
            Liên kết
          </h3>
          <p className="text-gray-70 mb-2 text-sm hover:cursor-pointer flex items-center">
            Mạng xã hội:
            <span className="text-2xl ml-2">
              <i className="bx bxl-facebook"></i>
            </span>
            <span className="text-2xl ml-2">
              <i className="bx bxl-youtube"></i>
            </span>
            <span className="text-2xl ml-2">
              <i className="bx bxl-instagram"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative after:w-[60%] after:h-[2px] after:bg-gray-dark after:absolute after:top-[50%] after:right-[3rem] mt-10">
        <div className="uppercase text-2xl font-bold tracking-widest h-8 flex items-center">
          <h2 className="inline-block">hodace</h2>
          <p className="px-2 pt-1 ml-3 inline-block h-8 bg-main text-white font-medium text-base uppercase tracking-widest">
            network
          </p>
        </div>
        <p className="text-xs mt-2 inline-block ml-7">
          Giải pháp toàn diện cho dữ liệu BDS
        </p>
      </div>

      <p className="text-gray-70 text-center text-xs my-5">
        Copyright @2020 All rights reserved by HODACE NETWORK <br />
        Ghi rõ nguồn "Hodace.Network" khi phát hành thông tin từ website này.
      </p>
    </footer>
  );
};

export default Footer;
