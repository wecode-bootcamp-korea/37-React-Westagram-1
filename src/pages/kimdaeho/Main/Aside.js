import React from 'react';
import '../Main/Aside.scss';
import { AsideList } from './MenuList';

function Aside() {
  return (
    <div className="aside">
      {AsideList.map(list => {
        return (
          <span key={list.id}>
            <a href="#!">{list.menuName} </a>
          </span>
        );
      })}
    </div>
  );
}

export default Aside;
