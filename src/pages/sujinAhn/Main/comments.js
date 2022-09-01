const Comments = ({ list }) => {
  return (
    <li>
      <span className="id">{list.name}</span>
      <p className="comment-text">{list.text}</p>
      <button className="btn-like">
        <i className="fa-regular fa-heart" />
      </button>
      <button className="btn-delete">
        <i className="fa-solid fa-trash-can" />
      </button>
    </li>
  );
};

export default Comments;
