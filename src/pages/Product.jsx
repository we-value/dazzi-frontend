import "./Product.css";
import ProductItem from "../components/ProductItem";
import ProductFilter from "../components/ProductFilter";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Product = () => {
  const posts = [
    {
      category: "동네맛집",
      time: "2분 전",
      title: "강남역 자취 10년차의 맛집 리스트",
      content: "저만 알고 싶은 맛집 리스트 공유해요!",
      price: "30000",
      orderCount: "5",
    },
    {
      category: "모임",
      time: "5분 전",
      title: "이번주 클라이밍 하러 가실분",
      content: "토요일 저녁에 도곡재에 하러가요. 초보자 환영!",
      price: "20000",
      orderCount: "3",
    },
    {
      category: "취미생활",
      time: "10분 전",
      title: "저희 댕이의 강아지 친구 구해요!",
      content: "동물 함께 산책 즐겁게 할 강아지 친구 있을까요?",
      price: "10000",
      orderCount: "8",
    },
  ];

  return (
    <>
      <Header title="상품리스트" />
      <Menu />
      <div className="filter-content">
        <ProductFilter />
      </div>
      <div className="main-content">
        {posts.map((post, index) => (
          <ProductItem key={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default Product;
