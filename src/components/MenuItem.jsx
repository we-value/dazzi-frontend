import "./MenuItem.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, menuPath }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="menu-item" onClick={() => navigate(menuPath)}>
        {title}
      </div>
    </>
  );
};

export default MenuItem;
