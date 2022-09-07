import { useState } from 'react';

const Feed = () => {
  const [comments, newComment] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const commentUploadBtn = () => {
    newComment(prevState => {
      setInput('');
      return [...prevState, input];
    });
  };
  // const commentUploadEnter =(e)=> {
  //    if(e.keyboard === 13){
  //     console.log(e.keyboard);
  //     commentUploadBtn();
  //    }
  // }

  // const activateCommentBtn = () => {
  //     !(newComment.trim() !== 0);
  // }

  return (
    <div className="feedsParts">
      <header className="feedsPartsHeader ">
        <img
          className="profileImg"
          src={`${process.env.PUBLIC_URL}/images/yujin/profile-01.png`}
          alt="프로필사진"
        />
        <div className="profile">
          <div className="profileName">hellobear</div>
          <div className="profileDes">
            BTS<span>I'm fine</span>
          </div>
        </div>
        <div className="more">
          <a href="#!">
            <i className="fa-regular fa-equals icon" />
          </a>
        </div>
      </header>
      <div className="feedsPartsImg">
        <img
          src={`${process.env.PUBLIC_URL}/images/yujin/feeds-01.jpg`}
          alt="게시된 사진"
        />
      </div>
      <section className="feedsPartsIcons">
        <div className="iconsLeft">
          <button name="좋아요" className="feed-like-btn">
            <i className="fa-regular fa-heart icon" />
          </button>
          <button name="댓글">
            <i className="fa-regular fa-comment icon" />
          </button>
          <button name="공유">
            <i className="fa-regular fa-paper-plane icon" />
          </button>
        </div>
        <div className="icons-right">
          <button name="bookmark">
            <i className="fa-solid fa-check icon" />
          </button>
        </div>
      </section>
      <section className="feedsPartsContents">
        <div className="like-counts">
          좋아요 <span className="likeCount"> 2</span>개
        </div>
        <ul className="commentsList">
          <li className="commentsParts">
            <strong className="commentsPartId">mom</strong>
            <p className="commentsPartContent">이제 가을이 오고 있어요</p>
            <button>
              <i className="fa-regular fa-heart" />
            </button>
            <button>
              <i className="fa-solid fa-trash-can" />
            </button>
          </li>
          {comments.map((comment, idx) => {
            return (
              <li key={idx} className="commentsParts">
                <strong className="commentsPartId">shout</strong>
                <p className="commentsPartContent">{comment}</p>
                <button>
                  <i className="fa-regular fa-heart" />
                </button>
                <button>
                  <i className="fa-solid fa-trash-can" />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="commentsAdd">
          <button>
            <i className="fa-regular fa-face-grin icon" />
          </button>
          <input
            type="textarea"
            className="newComment"
            name="작성한댓글"
            placeholder="똑똑똑"
            value={input}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button className="commentsAddBtn" onClick={commentUploadBtn}>
            게시
          </button>
        </div>
      </section>
    </div>
  );
};

export default Feed;
