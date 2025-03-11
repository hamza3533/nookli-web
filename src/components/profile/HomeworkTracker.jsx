import React from "react";
import Chart from "react-apexcharts";

const HomeworkTracker = ({ homeworkData }) => {
  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: homeworkData.map((item) => item.name),
    colors: ["#FF5733", "#343A40", "#FFB74D"],
    legend: { show: false },
  };

  const chartSeries = homeworkData.map((item) => item.value);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-100">
      <h3 className="text-lg font-bold mb-3">Homework Tracker</h3>
      <div className="flex items-center">
        <div className="flex flex-col space-y-2 mr-4">
          {homeworkData.map((entry, index) => (
            <div
              key={entry.name}
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: chartOptions.colors[index] }}
              ></div>
              {entry.name}
            </div>
          ))}
        </div>

        <div className="w-[220px]">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="pie"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeworkTracker;
