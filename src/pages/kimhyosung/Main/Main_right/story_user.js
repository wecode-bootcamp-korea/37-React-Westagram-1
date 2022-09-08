import React from 'react';

function Story(props) {
  return (
    <>
      <div className="content1">
        <img className="header_image" src={props.userImage} alt="pho1" />
        <span className="user_name">{props.userName}</span>
      </div>
    </>
  );
}
export default Story;
