const FriendProfile = () => {
  return (
    <>
      {FRIENDS_PROFILE_LIST.map(info => {
        return (
          <li key={info.id} className="friendsParts">
            <img
              className="friendProfileImg"
              src={info.img}
              alt="친구프로필사진"
            />
            <div className="friendProfile">
              <div className="friendProfileName">{info.userName}</div>
              <div className="friendProfileDes">{info.des}</div>
            </div>
            <span>
              <a href="{info.link}">
                <p className="followBtn">팔로우</p>
              </a>
            </span>
          </li>
        );
      })}
    </>
  );
};
export default FriendProfile;

const FRIENDS_PROFILE_LIST = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/images/yujin/profile-03.png`,
    userName: '피자가좋아',
    des: '인기',
    link: '#!',
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/images/yujin/profile-04.png`,
    userName: '날씨가좋아',
    des: '인기',
    link: '#!',
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/images/yujin/profile-05.png`,
    userName: '스파게티가좋아',
    des: '인기',
    link: '#!',
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/images/yujin/profile-06.png`,
    userName: '여행좋아',
    des: '인기',
    link: '#!',
  },
  {
    id: 5,
    img: `${process.env.PUBLIC_URL}/images/yujin/profile-07.png`,
    userName: '볶음밥이좋아',
    des: '인기',
    link: '#!',
  },
];
