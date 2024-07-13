import "./Header.css";
import Button from "./Button";
import React from "react";

const Header = ({ title, leftChild }) => {
  const authorizationToken = localStorage.getItem("authorizationToken");
  const nickname = localStorage.getItem("nickname");

  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init("6f9a170485b5056b067201ca1a487a14");
  }
  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/login/oauth2/code/kakao",
    });
  };

  return (
    <header className="header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">
        {!authorizationToken ? (
          <Button onClick={loginWithKakao} text="로그인"></Button>
        ) : (
          <Button text={`${nickname}님`} type="positive"></Button>
        )}
      </div>
    </header>
  );
};

export default Header;
