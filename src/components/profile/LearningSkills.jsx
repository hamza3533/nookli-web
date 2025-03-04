import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const LearningSkills = ({ skills }) => {
  const [animatedProgress, setAnimatedProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setAnimatedProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          if (newProgress[index] < skill.progress) {
            newProgress[index] += 2; // Increment speed (adjust if needed)
          } else {
            clearInterval(intervals[index]);
          }
          return newProgress;
        });
      }, 30); // Interval time (smoother animation)
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-blue-300">
      <h3 className="text-lg font-bold mb-3 text-gray-800">Learning Skills</h3>
      {skills?.map((skill, index) => (
        <div key={skill.name} className="mb-3 flex items-center">
          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-800 font-medium">
              <p>
                {skill.icon}
                {skill.name}
              </p>
              <p>{skill.progress}%</p>
            </div>
            <LinearProgress
              variant="determinate"
              //   value={skill.progress}
              value={animatedProgress[index]}
              className="h-2"
              sx={{
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#ef4444",
                  transition: "width 1s ease-in-out",
                },
                backgroundColor: "#e5e7eb",
                borderRadius: "6px",
                height: "10px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningSkills;
