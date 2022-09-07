import { Link } from "react-router-dom";
import { INFO_LIST } from "./footerData";

const Etc = () => {
  return (
    <section className="etc">
      <div className="profile">
        <img
          className="profile-image large"
          src="./images/sujinAhn/feed01.jpg"
          alt="프로필사진"
        />
        <div className="profile-box">
          <p className="id">sujiny_829</p>
          <p className="name">안수진</p>
        </div>
      </div>
      <div className="etc-box scroll">
        <div className="title-wrap">
          <p className="title">스토리</p>
          <button className="btn-all">모두 보기</button>
        </div>
        <ul className="other-user">
          <li>
            <div className="profile small">
              <img
                className="profile-image story"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">sujiny_829</p>
                <p className="time">16분 전</p>
              </div>
            </div>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image story"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">sujiny_829</p>
                <p className="time">16분 전</p>
              </div>
            </div>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image story"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">sujiny_829</p>
                <p className="time">16분 전</p>
              </div>
            </div>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image story"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">sujiny_829</p>
                <p className="time">16분 전</p>
              </div>
            </div>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image story"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">sujiny_829</p>
                <p className="time">16분 전</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="etc-box">
        <div className="title-wrap">
          <p className="title">회원님을 위한 추천</p>
          <button className="btn-all">모두 보기</button>
        </div>
        <ul className="other-user">
          <li>
            <div className="profile small">
              <img
                className="profile-image"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">abc_1234</p>
                <p className="friend">
                  sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                </p>
              </div>
            </div>
            <button className="btn-push">팔로우</button>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">abc_1234</p>
                <p className="friend">
                  sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                </p>
              </div>
            </div>
            <button className="btn-push">팔로우</button>
          </li>
          <li>
            <div className="profile small">
              <img
                className="profile-image"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
              <div className="profile-box">
                <p className="id">abc_1234</p>
                <p className="friend">
                  sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                </p>
              </div>
            </div>
            <button className="btn-push">팔로우</button>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ul className="text">
          westagram
          {INFO_LIST.map(info => (
            <li key={info.id}>
              <Link to={info.url}>{info.content}</Link>
            </li>
          ))}
        </ul>
        <p className="text">© 2022 INSTAGRAM FROM META</p>
      </div>
    </section>
  );
};
export default Etc;
