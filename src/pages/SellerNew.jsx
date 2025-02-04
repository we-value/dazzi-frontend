import "./SellerNew.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import SellerEditor from "../components/SellerEditor";
import { useEffect } from "react";
import { apiGet, apiPost } from "../utils/axios/apiUtil";
import { nvl } from "../utils/formatUtils";
import { useNavigate } from "react-router-dom";

const SellerNew = () => {
  const nav = useNavigate();

  useEffect(() => {
    apiGet("/seller")
      .then((res) => {
        if (nvl(res.id) !== "") {
          nav(`/sellerEdit/${res.id}`);
        }
      })
      .catch((error) => console.error(error));
  }, [nav]);

  const onSubmit = (input) => {
    apiPost("/seller", {
      name: nvl(input.name),
      introduction: nvl(input.introduction),
    })
      .then((res) => {
        alert("판매자가 등록되었습니다.");
        if (nvl(res.id) !== "") {
          nav(`/sellerEdit/${res.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header title="판매자 관리" />
      <Menu />
      {<SellerEditor onSubmit={onSubmit} />}
    </>
  );
};

export default SellerNew;
