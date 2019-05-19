import React from 'react';
import './SuperMarketTemplate.scss';
import { parse } from 'qs'

const SuperMarketTemplate = ({ items, basket, total, match, location }) => {
  const queryObject = parse(location.search.substr(1));

  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>{match.params.id}의 상품</h2>
        <h3>{queryObject.items ? queryObject.items : 0}개부터 시작</h3>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;
