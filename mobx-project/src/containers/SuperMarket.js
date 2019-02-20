import React from 'react';
import SuperMarketTemplate from '../components/SuperMarketTemplate';
import ShopItemList from '../components/ShopItemList';
import BasketItemList from '../components/BasketItemList';
import TotalPrice from '../components/TotalPrice';

const SuperMarket = ({match}) => {
    return (
        <SuperMarketTemplate
            match={match}
            items={<ShopItemList />}
            basket={<BasketItemList />}
            total={<TotalPrice />}
        />
    );
};

export default SuperMarket;
