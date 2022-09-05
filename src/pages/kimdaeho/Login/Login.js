import React, { useState } from 'react';
import '../Login/Login.scss';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [disabled, setdisabled] = useState(true);
  const idInput = e => setIdValue(e.target.value);
  const pwInput = e => setPwValue(e.target.value);

  const test = function () {
    if (idValue.includes('@') === true && pwValue.length > 3) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  return (
    <section className="section">
      <div className="w_body">
        <header>
          <h1>Westagram</h1>
        </header>
        <main className="login_main">
          <input
            type="text"
            className="id_input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idValue}
            onChange={e => {
              idInput(e);
              test();
            }}
          />
          <input
            type="password"
            className="pw_input"
            placeholder="비밀번호"
            value={pwValue}
            onChange={e => {
              pwInput(e);
              test();
            }}
          />
          <button disabled={disabled} id="loginBtn">
            로그인
          </button>
        </main>
        <footer className="footer">
          <a href="#!" className="loss_pw">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Login;
