import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales $",
        data: [18127, 22201, 19490, 17938, 24182, 22475],
        backgroundColor: "rgba(53, 162, 235, 0.4)",
        borderColor: "rgba(53, 162, 235)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Revenue",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      maintainAspectRatio: false,
      responsive: false,
    },
  };

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
