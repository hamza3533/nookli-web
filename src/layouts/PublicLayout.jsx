import TopNavbar from "../components/TopNavbar.jsx";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
