import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate("./Main");
  // };

  return (
    <div className="wrapper">
      <h1 className="logo">Westagram</h1>
        <form className="inputContainer">
            <div>
                <input type="text" maxlength="20" className="login-id" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <input type="password" maxlength="11" className="login-pw" placeholder="비밀번호"/>
                <button type="submit" className="login-btn" name="login">로그인</button>
            </div>
            <a href="">
                <div className="forgotPw" >비밀번호를 잊으셨나요?</div>
            </a>
        </form>
    </div>
  );
};

export default Login;
