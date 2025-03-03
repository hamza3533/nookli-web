const AboutMe = ({ about }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">About Me</h3>
        <p className="text-gray-600">{about}</p>
      </div>
    );
  };
  
  export default AboutMe;
  