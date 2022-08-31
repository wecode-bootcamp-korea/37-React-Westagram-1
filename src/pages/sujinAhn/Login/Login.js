import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login-wrap">
        <h1 className="logo">Westagram</h1>
        <form className="login-form">
          <div className="input-area">
            <input
              className="input-id"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="input-pw"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <p className="notice">올바른 아이디와 비밀번호를 입력해주세요</p>
          </div>
          {/* <Link className="btn-login" to="/main">로그인</Link> */}
          <button
            className="btn-login"
            onClick={() => {
              navigate('"/main"');
            }}
          >
            로그인
          </button>
        </form>
        <p className="link-text">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
