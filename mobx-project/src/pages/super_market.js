import React from 'react';
import SuperMarketTemplate from '../components/SuperMarketTemplate';
import ShopItemList from '../components/ShopItemList';
import BasketItemList from '../components/BasketItemList';
import TotalPrice from '../components/TotalPrice';

const SuperMarket = ({match, location}) => {
    return (
        <SuperMarketTemplate
            match={match}
            location={location}
            items={<ShopItemList />}
            basket={<BasketItemList />}
            total={<TotalPrice />}
        />
    );
};

export default SuperMarket;
