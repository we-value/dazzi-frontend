import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiPost } from "../utils/axios/apiUtil";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    if (code) {
      apiPost("/oauth/kakao", { code })
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

  return <div>로그인 중...</div>;
};

export default KakaoCallback;
