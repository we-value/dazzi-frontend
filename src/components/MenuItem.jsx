import "./MenuItem.css";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ title, menuPath }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (String(location.pathname) === String(menuPath)) {
    return;
  }

  return (
    <>
      <div className="menu-item" onClick={() => navigate(menuPath)}>
        {title}
      </div>
    </>
  );
};

export default MenuItem;
