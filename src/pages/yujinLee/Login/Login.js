import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('전화번호, 사용자 이름 또는 이메일');
  const [userPw, setUserPw] = useState('비밀번호');

  const saveUserId = e => {
    setUserId(e.target.value);
  };
  console.log(userId);

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="loginBox">
        <div className="logo">westagram</div>
        <form className="Container">
          <input
            onChange={saveUserId}
            type="text"
            className="loginId"
            name="userID"
            minLength="5"
            maxLength="20"
            autoComplete="off"
            autoFocus="turu"
            placeholder={userId}
          />
          <input
            onChange={saveUserPw}
            type="password"
            className="loginPw"
            name="userPW"
            maxLength="11"
            autoComplete="off"
            placeholder={userPw}
          />
          <button
            // onClick={''}
            type="submit"
            className="loginBtn"
            // disabled="disabled"
            name="login"
          >
            로그인
          </button>
        </form>
        <a href="#!">
          <div className="forgotPw">비밀번호를 잊으셨나요?</div>
        </a>
      </div>
      <div className="createAcount">
        <p>
          계정이 없으신가요?
          <a href="#!">
            <span>가입하기</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
