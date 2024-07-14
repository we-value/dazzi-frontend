import "./SellerEditor.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductEditor = ({ sellerId, initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    sellerId: "",
    productId: "",
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="editor">
      <section className="content_section">
        <h4>상품 제목</h4>
        <input
          name="title"
          value={input.title}
          onChange={onChangeInput}
          placeholder="ex) 홍길동전 홍길동, 전자책 빌게이츠, 농장의 스티브 잡스"
        />
      </section>
      <section className="content_section">
        <h4>상품 가격</h4>
        <input
          name="price"
          value={input.price}
          onChange={onChangeInput}
          type="number"
          placeholder="숫자만 입력해주세요 ex) 10000"
        />
      </section>
      <section className="content_section">
        <h4>상품 설명</h4>
        <textarea
          name="description"
          value={input.description}
          onChange={onChangeInput}
          placeholder="ex) 제가 10년 동안 연구한 전자책입니다"
          maxLength="1000"
        />
      </section>
      <section className="button_section">
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"positive"}
        />
        <Button onClick={() => nav("/")} text={"취소하기"} type="negative" />
      </section>
    </div>
  );
};

export default ProductEditor;
