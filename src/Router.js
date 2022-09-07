import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 김코드의 컴포넌트
import LoginDaeho from "./pages/kimdaeho/Login/Login";
import MainDaeho from "./pages/kimdaeho/Main/Main";
import LoginHyosung from "./pages/kimhyosung/Login/Login";
import MainHyosung from "./pages/kimhyosung/Main/Main";
import LoginSujin from "./pages/sujinAhn/Login/Login";
import MainSujin from "./pages/sujinAhn/Main/Main";
import LoginYujin from "./pages/yujinLee/Login/Login";
import MainYujin from "./pages/yujinLee/Main/Main";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-daeho" element={<LoginDaeho />} />
        <Route path="/main-daeho" element={<MainDaeho />} />
        <Route path="/login-hyosung" element={<LoginHyosung />} />
        <Route path="/main-hyosung" element={<MainHyosung />} />
        <Route path="/login-sujin" element={<LoginSujin />} />
        <Route path="/main-sujin" element={<MainSujin />} />
        <Route path="/login-yujin" element={<LoginYujin />} />
        <Route path="/main-yujin" element={<MainYujin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
