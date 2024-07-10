import "./ProductItem.css";
import useravatar from "../assets/useravatar.png";
import { moneyFormat } from "../utils/formatUtils.js";

const ProductItem = ({ category, time, title, content, price, orderCount }) => {
  return (
    <div className="post">
      <div className="post-header">
        <span>{category}</span>
        <span>{time}</span>
      </div>
      <div className="post-title">{title}</div>
      <div className="post-content">
        <div>{content}</div>
        <img src={useravatar} alt={category} />
      </div>
      <div className="post-footer">
        <div>{moneyFormat(price)}원</div>
        <div>{orderCount}명 구매</div>
      </div>
    </div>
  );
};

export default ProductItem;
