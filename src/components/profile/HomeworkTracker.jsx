// import { PieChart, Pie, Cell, Legend } from "recharts";

// const COLORS = ["#FF5733", "#343A40", "#FFB74D"];

// const HomeworkTracker = ({ homeworkData }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <h3 className="text-lg font-bold mb-2">Homework Tracker</h3>
//       <PieChart width={200} height={200}>
//         <Legend />
//         <Pie
//           data={homeworkData}
//           dataKey="value"
//           cx="50%"
//           cy="50%"
//           outerRadius={50}
//           fill="#8884d8"
//         >
//           {homeworkData.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default HomeworkTracker;

import React from "react";
import Chart from "react-apexcharts";

const HomeworkTracker = ({ homeworkData }) => {
  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: homeworkData.map((item) => item.name),
    colors: ["#FF5733", "#343A40", "#FFB74D"],
    legend: { show: false }, // We create a custom legend
  };

  const chartSeries = homeworkData.map((item) => item.value);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      {/* Custom Vertical Legend on the Left */}
      <div className="flex flex-col space-y-2 mr-4">
        {homeworkData.map((entry, index) => (
          <div key={entry.name} className="flex items-center text-sm font-medium text-gray-700">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: chartOptions.colors[index] }}
            ></div>
            {entry.name}
          </div>
        ))}
      </div>

      {/* Pie Chart on the Right */}
      <div className="w-[200px]">
        <Chart options={chartOptions} series={chartSeries} type="pie" width="100%" />
      </div>
    </div>
  );
};

export default HomeworkTracker;
