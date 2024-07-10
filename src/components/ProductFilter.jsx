import "./ProductFilter.css";

const ProductFilter = () => {
  return (
    <select className="filter-select">
      <option value="">전체</option>
      <option value="전자책">전자책</option>
      <option value="교본">교본</option>
      <option value="일러스트">일러스트</option>
    </select>
  );
};

export default ProductFilter;
