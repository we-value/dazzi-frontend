import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("6f9a170485b5056b067201ca1a487a14");
    }
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/login/oauth2/code/kakao",
    });
  };

  return <button onClick={loginWithKakao}>Login with Kakao</button>;
};

export default KakaoLogin;
