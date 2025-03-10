import { LinearProgress } from "@mui/material";

const UpcomingTasks = ({ tasks }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full">
      {/* Title */}
      <h3 className="text-lg font-bold mb-4">Upcoming Tasks</h3>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-left">
            <th className="p-2 w-2/5">Unit Name</th> {/* More space for name */}
            <th className="p-2 w-1/4">Progress</th>
            <th className="p-2 w-1/6">Grade</th>
            <th className="p-2 w-1/6">Start Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="text-gray-700">
              {/* Unit Name with Red Dot */}
              <td className="p-3 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                <span>{task.name}</span>
              </td>

              {/* Progress Bar */}
              <td className="p-3">
                <div className="w-36 h-2 bg-gray-200 rounded-full">
                  <LinearProgress
                    variant="determinate"
                    value={task.progress}
                    className="h-2"
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#ef4444",
                        transition: "width 1s ease-in-out",
                      },
                      backgroundColor: "#e5e7eb",
                      borderRadius: "6px",
                      height: "8px",
                    }}
                  />
                </div>
              </td>

              {/* Grade */}
              <td className="p-3 font-semibold">{task.progress}% ({task.grade})</td>

              {/* Start Date */}
              <td className="p-3 text-gray-500">{task.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTasks;
