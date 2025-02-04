import "./ProductNew.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../utils/axios/apiUtil";
import { useNavigate } from "react-router-dom";
import { nvl } from "../utils/formatUtils";
import ProductEditor from "../components/ProductEditor";

const ProductNew = () => {
  const nav = useNavigate();
  const [product, setProduct] = useState({
    sellerId: "",
    productId: "",
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    apiGet("/seller")
      .then((res) => {
        if (nvl(res.id) === "") {
          alert("판매자 등록을 먼저 해주세요.");
          nav("/sellerNew");
        }
        setProduct({
          sellerId: res.id,
        });
      })
      .catch((error) => console.error(error));
  }, [nav]);

  const onSubmit = (input) => {
    apiPost("/product", {
      sellerId: nvl(input.sellerId),
      title: nvl(input.title),
      price: nvl(input.price),
      description: nvl(input.description),
    })
      .then((res) => {
        alert("상품이 등록되었습니다.");
        if (nvl(res.id) !== "") {
          nav(`/productEdit/${res.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header title="상품 등록" />
      <Menu />
      <ProductEditor initData={product} onSubmit={onSubmit} />
    </>
  );
};

export default ProductNew;
