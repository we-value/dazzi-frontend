import "./SellerEdit.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ProductEditor from "../components/ProductEditor";
import { useEffect, useState } from "react";
import { apiGet, apiPatch } from "../utils/axios/apiUtil";
import { nvl } from "../utils/formatUtils";
import { useNavigate, useParams } from "react-router-dom";

const SellerEdit = () => {
  const nav = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({
    sellerId: "",
    productId: "",
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    apiGet(`/product/${params.id}`)
      .then((res) => {
        if (nvl(res.productId) === "") {
          nav("/productNew");
        }
        setProduct({
          sellerId: nvl(res.sellerId),
          productId: nvl(res.productId),
          title: nvl(res.title),
          price: nvl(res.price),
          description: nvl(res.description),
        });
      })
      .catch((error) => console.error(error));
  }, [nav, params]);

  const onSubmit = (input) => {
    apiPatch("/product", {
      sellerId: nvl(input.sellerId),
      productId: nvl(input.productId),
      title: nvl(input.title),
      price: nvl(input.price),
      description: nvl(input.description),
    })
      .then((res) => {
        if (nvl(res.id) !== "") {
          alert("상품이 수정되었습니다.");
          nav(`/productEdit/${res.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header title="상품 관리" />
      <Menu />
      {<ProductEditor initData={product} onSubmit={onSubmit} />}
    </>
  );
};

export default SellerEdit;
