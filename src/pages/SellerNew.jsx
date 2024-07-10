import "./SellerNew.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { useEffect } from "react";
import { apiGet } from "../utils/axios/apiUtil";
import { useNavigate } from "react-router-dom";

const SellerNew = () => {
  const navigate = useNavigate();

  useEffect(() => {
    apiGet("/member/isSeller")
      .then((res) => {
        if (res.isSeller == "" || res.isSeller == "Y") {
          alert("이미 판매자 등록이 되어있습니다!");
          navigate("/");
        }
      })
      .catch((error) => console.error(error));
  }, [navigate]);
  return (
    <>
      <Header title="판매자 등록" />
      <Menu />
      SellerNew
    </>
  );
};

export default SellerNew;
