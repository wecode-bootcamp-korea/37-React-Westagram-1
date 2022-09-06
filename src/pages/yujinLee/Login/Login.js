import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  return (
    <div className="loginWrapper">
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
            autoFocus="turu"
            autoComplete="off"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={saveUserPw}
            type="password"
            className="loginPw"
            name="userPW"
            maxLength="11"
            autoComplete="new-password"
            placeholder="비밀번호"
          />
          {/* <Link to="/main"> */}
          <button
            onClick={() => {
              navigate('/main');
            }}
            type="submit"
            className="loginBtn"
            disabled={!(userId.indexOf('@') !== -1 && userPw.length >= 5)}
            autoComplete="off"
            name="login"
          >
            로그인
          </button>
          {/* </Link> */}
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
