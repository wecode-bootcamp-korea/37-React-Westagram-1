import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginHyosung = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyosung');
  };

  const saveUserld = e => {
    setId(e.target.value);
    console.log(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
    console.log(e.target.value);
  };
  const isValid = id.includes('@') && pw.length > 4;

  return (
    <div>
      <div className="allWrap">
        <div className="wrap">
          <div className="header">
            <h1 className="logo">Westagram</h1>
          </div>
          <form className="loginpw" id="loginpw">
            <input
              id="id_form"
              type="email"
              onChange={saveUserld}
              placeholder="전화번호, 사용자 이름, 또는 이메일"
            />
            <input
              id="pw_form"
              type="password"
              onChange={saveUserPw}
              placeholder="비밀번호"
            />
            <button
              id="login_btn"
              disabled={isValid ? false : true}
              onClick={goToMain}
            >
              로그인
            </button>
          </form>
          <div className="foot">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </div>
  );
};

export default LoginHyosung;
