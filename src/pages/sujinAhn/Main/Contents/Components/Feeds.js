import { useState } from "react";
import Comments from "./Comments";

let nextId = 1;

const Feeds = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(0);

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

  return (
    <section className="feeds">
      <article>
        <div className="profile">
          <div className="profile-box">
            <img
              className="profile-image"
              src="./images/sujinAhn/feed01.jpg"
              alt="프로필사진"
            />
            <span className="id">sujiny_829</span>
          </div>
          <button>
            <i className="fa-solid fa-ellipsis" />
          </button>
        </div>
        <div className="picture-area">
          <img src="./images/sujinAhn/feed01.jpg" alt="피드" />
        </div>
        <div className="info-area">
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
              src="./images/sujinAhn/feed01.jpg"
              alt="프로필사진"
            />
            <span className="id">abc1234</span>님 외 <span>{like}명</span>이
            좋아합니다.
          </p>
          <div className="post-box">
            <p className="post hide">
              <span className="id">sujiny_829</span>강아지 귀엽다.강아지
              귀엽다.강아지 귀엽다.강아지 귀엽다.강아지 귀엽다.강아지
              귀엽다.강아지 귀엽다.
            </p>
            <button className="btn-more">더보기</button>
          </div>
        </div>
        <div className="comment-area">
          <ul className="comment-list">
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
        </div>
      </article>
    </section>
  );
};

export default Feeds;
