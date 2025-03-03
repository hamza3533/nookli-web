import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#FF5733", "#343A40", "#FFB74D"];

const HomeworkTracker = ({ homeworkData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">Homework Tracker</h3>
      <PieChart width={200} height={200}>
        <Pie data={homeworkData} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
          {homeworkData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default HomeworkTracker;