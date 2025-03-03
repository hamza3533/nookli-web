const BookmarkedLessons = ({ lessons }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">My Bookmarked Lessons</h3>
        {lessons.map((lesson) => (
          <div key={lesson.title} className="bg-gray-100 p-2 rounded-md mb-2">
            <h4 className="font-semibold">{lesson.title}</h4>
            <p className="text-sm text-gray-500">{lesson.category}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BookmarkedLessons;  