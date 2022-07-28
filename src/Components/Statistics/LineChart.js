import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LineChart = (props) => {
  const data = {
    labels: props.data.map((data) => data.month),
    datasets: [
      {
        label: null,
        data: props.data.map((data) => data.price),
        fill: "start",
        backgroundColor: props.bgColor,
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

  return (
    <div>
      <Line data={data} options={option} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default LineChart;
