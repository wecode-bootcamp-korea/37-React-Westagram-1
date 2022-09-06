import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentsList from "./CommentsList";

let nextId = 1;

const Feeds = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(0);
  const [active, setActive] = useState(true);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("/data/sujinAhn/feedInfoList.json")
      .then(res => res.json())
      .then(feedInfo => setFeeds(feedInfo));
  }, []);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onInsertComment = text => {
    const comment = {
      id: nextId,
      name: "sujiny_829",
      text,
    };
    setComments(comments => comments.concat(comment));
    nextId++;
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertComment(value);
    setValue("");
  };

  const removeComment = id => {
    setComments(comments => comments.filter(comment => comment.id !== id));
  };

  const plusLikes = () => {
    setLike(like + 1);
  };

  const minusLikes = () => {
    setLike(like > 0 ? like - 1 : 0);
  };

  const toggleMoreButton = () => {
    setActive(!active);
  };

  return (
    <section className="feeds">
      {feeds.map(feedList => (
        <ul className="feed-list" key={feedList.id}>
          <li className="profile">
            <div className="profile-box">
              <img
                className="profile-image"
                src={feedList.image}
                alt="프로필사진"
              />
              <span className="id">{feedList.name}</span>
            </div>
            <button>
              <i className="fa-solid fa-ellipsis" />
            </button>
          </li>
          <li className="picture-area">
            <img src={feedList.image} alt="피드" />
          </li>
          <li className="info-area">
            <div className="icon-wrap">
              {/* <button><i className="fa-regular fa-heart"></i></button> */}
              <button onClick={plusLikes}>
                <i className="fa-solid fa-heart on" />
              </button>
              <button onClick={minusLikes}>
                <i className="fa-regular fa-thumbs-down" />
              </button>
              <button>
                <i className="fa-regular fa-comment" />
              </button>
              <button>
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </button>
              <button>
                <i className="fa-regular fa-bookmark" />
              </button>
            </div>
            <p className="like-number">
              <img
                className="profile-image small"
                src={feedList.image}
                alt="프로필사진"
              />
              <span className="id">abc1234</span>님 외 <span>{like}명</span>이
              좋아합니다.
            </p>
            <div className="post-box">
              <p className={active ? "post hide" : "post"}>
                <span className="id">{feedList.name}</span>
                {feedList.text}
              </p>
              <button className="btn-more" onClick={toggleMoreButton}>
                {active ? "더보기" : "접기"}
              </button>
            </div>
          </li>
          <li className="comment-area">
            <ul className="comment-list">
              {feedList.comment.map(list => (
                <CommentsList key={list.id} list={list} />
              ))}
              {comments.map(list => (
                <Comments
                  key={list.id}
                  list={list}
                  removeComment={removeComment}
                />
              ))}
            </ul>
            <form>
              <div className="input-area">
                <input
                  type="text"
                  placeholder="댓글달기"
                  value={value}
                  onChange={onChange}
                />
                <button
                  className="btn-push"
                  onClick={onSubmit}
                  disabled={!value ? true : false}
                >
                  게시
                </button>
              </div>
            </form>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Feeds;
