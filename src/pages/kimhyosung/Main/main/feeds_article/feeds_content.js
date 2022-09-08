import React from 'react';
import { useState } from 'react';
function FeedsContent({ a, handleClick }) {
  const [changed, setChanged] = useState(false);
  // const handleClick = e => {
  //   console.log(e);
  //   let copy = [...입력값들];
  //   copy.splice(e, 1);
  // };
  return (
    <div className="reply_text2">
      <h5 className="name">user</h5>
      <span className="content">{a}</span>
      <button
        onClick={e => {
          setChanged(!changed);
        }}
        className={
          changed ? 'heart fa-solid fa-heart' : 'heart fa-regular fa-heart'
        }
      />
      <button onClick={handleClick} className="delete fa-solid fa-trash" />
    </div>
  );
}
export default FeedsContent;
