import "./Header.css";
import Button from "./Button";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiPost } from "../utils/axios/apiUtil";

const Header = ({ title, leftChild }) => {
  const authorizationToken = localStorage.getItem("authorizationToken");
  const nickname = localStorage.getItem("nickname");
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    if (code) {
      apiPost("/oauth/kakao", JSON.stringify({ code }))
        .then((res) => {
          if (res.token != "") {
            localStorage.setItem("authorizationToken", res.token);
            localStorage.setItem("nickname", res.nickname);
          }

          navigate("/");
        })
        .catch((error) => console.error(error));
    }
  }, [code, navigate]);

  if (code) {
    return <div>로그인 중....</div>;
  }
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init("6f9a170485b5056b067201ca1a487a14");
  }
  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/login/oauth2/code/kakao",
    });
  };

  return (
    <header className="Hedaer">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">
        {!authorizationToken ? (
          <Button onClick={loginWithKakao} text="로그인" type="LOGOUT"></Button>
        ) : (
          <Button text={nickname} type="LOGIN"></Button>
        )}
      </div>
    </header>
  );
};

export default Header;
