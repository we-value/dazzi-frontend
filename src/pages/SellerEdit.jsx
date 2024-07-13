import "./SellerEdit.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import SellerEditor from "../components/SellerEditor";
import { useEffect, useState } from "react";
import { apiGet, apiPatch } from "../utils/axios/apiUtil";
import { nvl } from "../utils/formatUtils";
import { useNavigate } from "react-router-dom";

const SellerEdit = () => {
  const nav = useNavigate();
  const [seller, setSeller] = useState({
    id: "",
    name: "",
    introduction: "",
  });

  useEffect(() => {
    apiGet("/seller")
      .then((res) => {
        if (nvl(res.id) === "") {
          nav("/sellerNew");
        }

        setSeller({
          id: nvl(res.id),
          name: nvl(res.name),
          introduction: nvl(res.introduction),
        });
      })
      .catch((error) => console.error(error));
  }, [nav]);

  const onSubmit = (input) => {
    apiPatch("/seller", {
      id: nvl(input.id),
      name: nvl(input.name),
      introduction: nvl(input.introduction),
    })
      .then((res) => {
        if (nvl(res.id) !== "") {
          alert("판매자가 수정되었습니다.");
          nav(`/sellerEdit/${res.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header title="판매자 관리" />
      <Menu />
      {<SellerEditor initData={seller} onSubmit={onSubmit} />}
    </>
  );
};

export default SellerEdit;
