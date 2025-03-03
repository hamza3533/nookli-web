import TopNavbar from "../components/TopNavbar.jsx";
import SideNavbar from "../components/SideNavbar.jsx";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
