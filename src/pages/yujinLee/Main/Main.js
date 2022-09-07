import Nav from '../../../components/Nav/Nav';
import Feed from '../MyComponent/Feed';
import FriendProfile from '../MyComponent/FriendProfile';
import AsideFooter from '../MyComponent/AsideFooter';
// import 'font-awesome/css/font-awesome.min.css';
import '../Main/Main.scss';

const Main = () => {
  return (
    <div className="mainWrapper">
      <Nav />
      <main>
        <article className="feedsContainer">
          <Feed />
        </article>
        <aside className="asideContainer">
          <header className="asideHeader">
            <img
              className="myProfileImg"
              src={`${process.env.PUBLIC_URL}/images/yujin/profile-02.png`}
              alt="나의 프로필사진"
            />
            <div className="myProfile">
              <div className="myProfileId">hellobear</div>
              <p calss="myProfileName">이유진</p>
            </div>
            <div className="checkout">
              <a href="#!">
                <p>전환</p>
              </a>
            </div>
          </header>
          <div className="friendRecommend">
            <span>회원님을 위한 추천</span>
            <a href="#!">
              <span>모두 보기</span>
            </a>
          </div>
          <ul>
            <FriendProfile />
          </ul>
          <AsideFooter />
        </aside>
      </main>
    </div>
  );
};

export default Main;
