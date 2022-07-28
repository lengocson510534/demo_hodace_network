import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = (props) => {
  const { chartData } = props;
  console.log(chartData);
  const amountData = {
    labels: chartData.map((data) => data.district),
    datasets: [
      {
        label: null,
        data: chartData.map((data) => data.amount),
        backgroundColor: props.bgColor,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };
  const option = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={amountData} options={option} plugins={[ChartDataLabels]} />;
};

export default BarChart;
