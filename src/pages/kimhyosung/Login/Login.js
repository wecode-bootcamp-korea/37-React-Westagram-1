import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginHyosung = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  console.log(id);
  const login = e => {
    e.preventDefault();
    fetch('http://10.58.1.177:3000/auth/signin', {
      // 1
      method: 'POST', // 2
      headers: {
        // 3
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // 4
        email: id,
        password: pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json(); // 5
        }
        throw new Error('통신실패!'); // 6
      })
      .catch(error => console.log(error)) // 7
      .then(data => {
        if (data.accessToken) {
          // 8
          localStorage.setItem('Token', data.accessToken);
          alert('로그인 성공');
          goToMain();
        }
      });
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyosung');
  };

  const saveUserld = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
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
              onClick={login}
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
