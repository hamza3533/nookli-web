import ProfileHeader from "./ProfileHeader";
import AboutMe from "./AboutMe";
import LearningSkills from "./LearningSkills";
import HomeworkTracker from "./HomeworkTracker";
import UpcomingTasks from "./UpcomingTasks";
import BookmarkedLessons from "./BookmarkedLessons";
import { Code, PhoneAndroid, Search } from "@mui/icons-material";

const userData = {
  full_name: "John Doe",
  email: "johndoe@email.com",
  bio: "Master’s in Interaction Design, Certified UX Specialist",
  location: "New York, USA",
  phone: "+1 (555) 123-4567",
  image: "https://i.pravatar.cc/100",
  password: "**********",
};

const skillsData = [
  {
    name: "Web Development",
    progress: 78,
    icon: <Code className="text-red-500 mr-2 mb-1" />,
  },
  {
    name: "Mobile App Development",
    progress: 50,
    icon: <PhoneAndroid className="text-red-500 mr-2 mb-1" />,
  },
  {
    name: "User Research & Testing",
    progress: 30,
    icon: <Search className="text-red-500 mr-2 mb-1" />,
  },
];

const homeworkData = [
  { name: "Overdue Assignment", value: 40 },
  { name: "Completed Assignment", value: 30 },
  { name: "Pending Assignment", value: 30 },
];

const tasksData = [
  {
    name: "UI Design Essentials",
    progress: 85,
    grade: "B",
    startDate: "Jan 10, 2024",
  },
  {
    name: "Mastering UI/UX",
    progress: 65,
    grade: "D",
    startDate: "Dec 5, 2023",
  },
  {
    name: "AI-Powered UI",
    progress: 78,
    grade: "C+",
    startDate: "Feb 1, 2024",
  },
  {
    name: " UI Design Essentials",
    progress: 85,
    grade: "B",
    startDate: "Jan 10, 2024",
  },
];

const lessonsData = [
  { title: "Introduction to HTML", category: "Web Development" },
  { title: "Color Theory in Design", category: "Graphic Design" },
  { title: "SEO Fundamentals", category: "Digital Marketing" },
];

const ProfileDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-9 space-y-6">
          <ProfileHeader placeholderData={userData} />
          <AboutMe about="Passionate UI/UX designer and educator with over 5 years of experience in crafting intuitive digital experiences. I specialize in Figma, wireframing, and usability testing, helping students bridge the gap between design theory and real-world application. My goal is to empower learners with the skills they need to create user-friendly interfaces and excel in the design industry. 🚀" />
          <UpcomingTasks tasks={tasksData} />
        </div>

        <div className="md:col-span-3 space-y-6">
          <LearningSkills skills={skillsData} />
          <HomeworkTracker homeworkData={homeworkData} />
          <BookmarkedLessons lessons={lessonsData} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
