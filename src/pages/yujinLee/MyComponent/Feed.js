import './Feed.scss';

const Feed = () => {
  return (
    <div className="feeds-parts">
      <header className="feeds-parts-header ">
        <img
          className="profile-img"
          src={require('../../assects/profile-01.png')}
          alt="프로필사진"
        />
        <div className="profile">
          <div className="profile-name">hellobear</div>
          <div className="profile-des">
            BTS<span>I'm fine</span>
          </div>
        </div>
        <div className="more">
          <a href="#!">
            <i className="fa-regular fa-equals icon" />
          </a>
        </div>
      </header>
      <div className="feeds-parts-img">
        <img src={require('../../assects/feeds-03.jpg')} alt="게시된 사진" />
      </div>
      <section className="feeds-parts-icons">
        <div className="icons-left">
          <button name="like" className="feed-like-btn">
            <i className="fa-regular fa-heart icon" />
          </button>
          <button name="comment">
            <i className="fa-regular fa-comment icon" />
          </button>
          <button name="share">
            <i className="fa-regular fa-paper-plane icon" />
          </button>
        </div>
        <div className="icons-right">
          <button name="bookmark">
            <i className="fa-solid fa-check icon" />
          </button>
        </div>
      </section>
      <section className="feeds-parts-contents">
        <div className="like-counts">
          좋아요 <span className="likeCount"> 2</span>개
        </div>
        <ul className="comments-list">
          <li className="comments-parts">
            <strong className="comments-part-Id">mom</strong>
            <p className="comments-part-content">이제 가을이 오고 있어요</p>
            <button>
              <i className="fa-regular fa-heart" />
            </button>
            <button>
              <i className="fa-solid fa-trash-can" />
            </button>
          </li>
        </ul>
        <div className="comments-add">
          <button>
            <i className="fa-regular fa-face-grin icon" />
          </button>
          <input
            type="textarea"
            className="new-comment"
            name="new-comment"
            placeholder=""
          />
          <button className="comments-add-btn">게시</button>
        </div>
      </section>
    </div>
  );
};

export default Feed;
