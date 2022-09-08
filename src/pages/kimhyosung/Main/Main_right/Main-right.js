import React from 'react';
import Story from './story_user';

const FOOTER_INFO = [
  { id: 1, link: 'https://about.instagram.com/', text: '소개' },
  { id: 2, link: 'https://help.instagram.com/', text: '도움말' },
  { id: 3, link: 'https://about.instagram.com/blog', text: '홍보 센터' },
  {
    id: 4,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  { id: 5, link: 'https://about.instagram.com/', text: '채용 정보' },
  {
    id: 6,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침',
  },
  { id: 7, link: 'https://help.instagram.com/581066165581870', text: '약관' },
  {
    id: 8,
    link: 'https://www.instagram.com/explore/locations/',
    text: '위치',
  },
];

function Main_right(props) {
  return (
    <>
      <div id="main-right">
        <div className="right">
          <div className="me">
            <img
              className="header_image"
              src="./images/jerry.jpeg"
              alt="pho1"
            />
            <span className="user_name">jerrylolenzo</span>
          </div>
        </div>

        <div className="right-content">
          <div className="story">
            <div className="story_content">
              <span id="story">스토리</span>
              <span id="look">
                <strong>모두보기</strong>
              </span>
            </div>

            <div className="content-wrap">
              {props.feed.map(e => {
                return (
                  <Story
                    id={e.id}
                    userName={e.user_name}
                    userImageBg={e.userImageBg}
                    userImage={e.user_image}
                  />
                );
              })}
            </div>

            <div className="recommend">
              <div className="recommend-header">
                <span>회원님을 위한 추천</span>
                <span>
                  <strong>모두보기</strong>
                </span>
              </div>

              <div className="recommend-wrap">
                <img
                  className="header_image"
                  src="./images/jerry.jpeg"
                  alt="pho1"
                />
                <span className="user_name2">jerrylolenzo</span>

                <span className="follow">팔로우</span>
              </div>

              <div className="recommend-wrap">
                <img
                  className="header_image"
                  src="./images/jerry.jpeg"
                  alt="pho1"
                />
                <span className="user_name2">jerrylolenzo</span>

                <span className="follow">팔로우</span>
              </div>

              <div className="recommend-wrap">
                <img
                  className="header_image"
                  src="./images/jerry.jpeg"
                  alt="pho1"
                />
                <span className="user_name2">jerrylolenzo</span>

                <span className="follow">팔로우</span>
              </div>

              <div className="recommend-wrap">
                <img
                  className="header_image"
                  src="./images/jerry.jpeg"
                  alt="pho1"
                />
                <span className="user_name2">jerrylolenzo</span>

                <span className="follow">팔로우</span>
              </div>
            </div>

            <div className="aboutUs">
              {FOOTER_INFO.map(info => {
                return (
                  <ul>
                    <li className="aboutUs_content" key={info.id}>
                      <a href={info.link}>
                        <span>{info.text}</span>
                      </a>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_right;
