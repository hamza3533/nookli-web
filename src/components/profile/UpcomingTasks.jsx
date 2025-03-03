const UpcomingTasks = ({ tasks }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Upcoming Tasks</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Unit Name</th>
              <th className="text-left p-2">Progress</th>
              <th className="text-left p-2">Grade</th>
              <th className="text-left p-2">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{task.name}</td>
                <td className="p-2">{task.progress}%</td>
                <td className="p-2">{task.grade}</td>
                <td className="p-2">{task.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UpcomingTasks;
  