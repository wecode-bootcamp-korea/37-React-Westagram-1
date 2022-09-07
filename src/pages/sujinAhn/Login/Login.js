import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    id: "",
    password: "",
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUp = e => {
    e.preventDefault();
    fetch("http://10.58.1.177:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: inputValues.id,
        password: inputValues.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        // throw new Error("에러 발생!");
      })
      // .catch(error => console.log(error))
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          alert("로그인 성공");
          navigate("/main-sujin");
        } else {
          alert("로그인 실패");
        }
      });
  };

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
              autoComplete="new-password"
              onChange={handleInput}
            />
            <input
              className="input-pw"
              type="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="new-password"
              onChange={handleInput}
            />
            <p className="notice">올바른 아이디와 비밀번호를 입력해주세요</p>
          </div>
          {/* <Link className="btn-login" to="/main">로그인</Link> */}
          <button
            className="btn-login"
            onClick={signUp}
            disabled={
              inputValues.id.includes("@") && inputValues.password.length >= 5
                ? false
                : true
            }
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
