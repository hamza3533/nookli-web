import { BookmarkAdd } from "@mui/icons-material";

const BookmarkedLessons = ({ lessons }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-100">
      {/* Title */}
      <h3 className="text-lg font-bold mb-3">My Bookmarked Lessons</h3>

      {/* Lessons List */}
      <div className="space-y-2">
        {lessons.map((lesson) => (
          <div
            key={lesson.title}
            className="flex items-center bg-gray-100 p-3 rounded-lg space-x-3"
          >
            {/* Bookmark Icon */}
            <div className="bg-red-100 p-2 rounded-full">
              <BookmarkAdd className="w-5 h-5 text-red-500" />
            </div>

            {/* Lesson Details */}
            <div>
              <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
              <p className="text-sm text-gray-500">{lesson.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkedLessons;
