import "./SellerEditor.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SellerEditor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    id: "",
    name: "",
    introduction: "",
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
        <h4>판매자 이름</h4>
        <input
          name="name"
          value={input.name}
          onChange={onChangeInput}
          placeholder="ex) 홍길동전 홍길동, 전자책 빌게이츠, 농장의 스티브 잡스"
        />
      </section>
      <section className="content_section">
        <h4>판매자 소개</h4>
        <textarea
          name="introduction"
          value={input.introduction}
          onChange={onChangeInput}
          placeholder="ex) 안녕하세요 전자책 잘쓰는 빌게이츠입니다."
          maxLength="500"
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

export default SellerEditor;
