import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menus = [
    { menuPath: "/", title: "상품 리스트" },
    { menuPath: "/productNew", title: "상품 등록" },
    { menuPath: "/sellerNew", title: "판매자 관리" },
  ];
  return (
    <div className="menu">
      {menus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

export default Menu;
