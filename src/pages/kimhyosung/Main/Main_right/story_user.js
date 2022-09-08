import React from 'react';

function Story({ userImage, userName }) {
  return (
    <div className="content1">
      <img className="header_image" src={userImage} alt="pho1" />
      <span className="user_name">{userName}</span>
    </div>
  );
}
export default Story;
