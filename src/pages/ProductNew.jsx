import "./ProductNew.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { useEffect } from "react";
import { apiGet } from "../utils/axios/apiUtil";
import { useNavigate } from "react-router-dom";

const ProductNew = () => {
  const navigate = useNavigate();

  useEffect(() => {
    apiGet("/member/isSeller")
      .then((res) => {
        if (res.isSeller == "" || res.isSeller == "N") {
          alert("판매자 등록을 먼저 해주세요!!");
          navigate("/");
        }
      })
      .catch((error) => console.error(error));
  }, [navigate]);

  return (
    <>
      <Header title="상품 등록" />
      <Menu />
      ProductNew
    </>
  );
};

export default ProductNew;
