import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import KakaoCallback from "./KakaoCallback";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/login/oauth2/code/kakao" element={<KakaoCallback />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div>
        <h1>Welcome</h1>
        <a href="/login">Login with Kakao</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Logged In</h1>
      <p>Your JWT: {token}</p>
    </div>
  );
};

export default App;
