import { LinearProgress } from "@mui/material";

const LearningSkills = ({ skills }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">Learning Skills</h3>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-2">
          <p className="text-sm">{skill.name} ({skill.progress}%)</p>
          <LinearProgress variant="determinate" value={skill.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
};

export default LearningSkills;
