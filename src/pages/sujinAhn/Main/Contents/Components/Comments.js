import { useState } from "react";

const Comments = ({ list, removeComment }) => {
  const [active, setActive] = useState(true);

  const toggleLikeButton = () => {
    setActive(!active);
  };

  return (
    <li>
      <span className="id">{list.name}</span>
      <p className="comment-text">{list.text}</p>
      <button className="btn-like" onClick={toggleLikeButton}>
        <i className={active ? "fa-regular fa-heart" : "fa-solid fa-heart"} />
      </button>
      <button className="btn-delete" onClick={() => removeComment(list.id)}>
        <i className="fa-solid fa-trash-can" />
      </button>
    </li>
  );
};

export default Comments;
