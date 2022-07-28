import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import BarChart from "../Statistics/BarChart";
import LineChart from "./LineChart";

const StatisticItem = (props) => {
  const { dataAmount, priceData, dataCityFake } = props;
  const [option, setOption] = useState("Chọn tỉnh");

  const handlerClickOption = (option) => {
    setOption(option);
  };

  const handlerClickOptionDistrict = (option) => {
    setOptionDistrict(option);
  };

  const [optionDistrict, setOptionDistrict] = useState("Chọn Quận/ Huyện");

  const [listDistricts, setListDistricts] = useState([]);

  useEffect(() => {
    dataCityFake.map((item) => {
      if (item.title === option) setListDistricts([item]);
    });
  }, [option]);

  return (
    <div className="bg-gray-blur shadow-inner rounded-lg my-8 px-4 pb-10">
      <div className="pt-10 flex justify-between">
        <div>
          <h2 className="uppercase text-lg font-semibold text-blue">
            {props.title}
          </h2>
          <p className="text-sm text-gray-70 italic">{props.desc}</p>
        </div>
        <div className="text-main flex items-center">
          <Dropdown
            listItem={dataCityFake}
            option={option}
            handlerClickOption={handlerClickOption}
          />
          <Dropdown
            listItem={listDistricts.length > 0 ? listDistricts[0].district : []}
            option={optionDistrict}
            handlerClickOption={handlerClickOptionDistrict}
          />
        </div>
      </div>
      <div className="mx-auto mt-8 w-[80%] h-full">
        {props.type === "bar" ? (
          <BarChart chartData={dataAmount} bgColor={props.bgColor} />
        ) : (
          <LineChart data={priceData} bgColor={props.bgColor} />
        )}
      </div>
    </div>
  );
};

export default StatisticItem;
