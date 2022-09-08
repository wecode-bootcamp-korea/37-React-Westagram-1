import React from 'react';
import { useState } from 'react';
function Feeds_content(props) {
  const [changed, setChanged] = useState(false);
  // const handleClick = e => {
  //   console.log(e);
  //   let copy = [...입력값들];
  //   copy.splice(e, 1);
  // };
  return (
    <>
      <div className="reply_text2">
        <h5 className="name">user</h5>
        <span className="content">{props.a}</span>
        <button
          onClick={e => {
            setChanged(!changed);
          }}
          className={
            changed ? 'heart fa-solid fa-heart' : 'heart fa-regular fa-heart'
          }
        ></button>
        <button
          onClick={props.handleClick}
          className="delete fa-solid fa-trash"
        ></button>
      </div>
    </>
  );
}
export default Feeds_content;
