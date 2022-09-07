const AsideFooter = () => {
  return (
    <footer className="asideFooter">
      <ul>
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
      <span>© 2022 INSTAGRAM FROM META</span>
    </footer>
  );
};

export default AsideFooter;

const FOOTER_INFO_LIST = [
  { id: 1, link: '#!', text: '소개' },
  { id: 2, link: '#!', text: '도움말' },
  { id: 3, link: '#!', text: '홍보 센터' },
  { id: 4, link: '#!', text: 'API' },
  { id: 5, link: '#!', text: '채용 정보' },
  { id: 6, link: '#!', text: '개인정보처리방침' },
  { id: 7, link: '#!', text: '약관' },
  { id: 8, link: '#!', text: '위치' },
  { id: 9, link: '#!', text: '언어' },
];
