import React, { useEffect } from "react";
import { useState } from "react";
import StatisticItem from "../Statistics/StatisticItem";

import {
  dataAmount,
  priceIncreaseData,
  dataCityFake,
} from "../../datafake/DataFake";

const StatisticsPage = () => {
  const [amountData, setAmountData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    setAmountData(dataAmount);
  }, []);
  useEffect(() => {
    setPriceData(priceIncreaseData);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <StatisticItem
        type="bar"
        dataAmount={amountData}
        title="Thống kê số lượng bài đăng theo khu vực"
        desc="(Đánh giá độ năng động của thị trường theo từng khu vực cụ thể)"
        bgColor="#1186C9"
        dataCityFake={dataCityFake}
      />
      <StatisticItem
        type="bar"
        dataAmount={amountData}
        title="Thống kê trung bình theo khu vực"
        desc="(Đánh giá sự chênh lệch giá của thị trường theo từng khu vực cụ thể)"
        bgColor="#FA8701"
        dataCityFake={dataCityFake}
      />
      <StatisticItem
        type="line"
        priceData={priceData}
        title="Mức độ tăng giá theo giai đoạn của khu vực"
        desc="(Đánh giá độ biến động của thị trường theo từng khu vực cụ thể)"
        bgColor="#FB6E80"
        dataCityFake={dataCityFake}
      />
    </div>
  );
};

export default StatisticsPage;
