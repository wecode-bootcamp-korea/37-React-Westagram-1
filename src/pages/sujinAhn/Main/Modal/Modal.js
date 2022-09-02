const Modal = () => {
  return (
    <>
      <div className="dim-layer mypage">
        <div className="dim-bg" />
        <div className="modal">
          <p className="my-profile">프로필</p>
          <p className="save-list">저장됨</p>
          <p className="setting">설정</p>
          <p className="logout">로그아웃</p>
        </div>
      </div>
      <div className="dim-layer search-results">
        <div className="dim-bg" />
        <ul className="modal">
          <li className="result">
            <img src="./images/sujinAhn/feed01.jpg" alt="강아지" />
            <p>
              <span className="nickname">wecode_bootcamp</span>
              <span className="myname">부트캠프</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Modal;
