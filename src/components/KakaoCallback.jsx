import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    if (code) {
      axios({
        method: "POST",
        url: "http://localhost:8080/oauth/kakao",
        data: JSON.stringify({ code }),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => {
          if (response.data.token != "") {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("nickname", response.data.nickname);
          }

          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search, navigate]);

  return <div>로그인 중...</div>;
};

export default KakaoCallback;
