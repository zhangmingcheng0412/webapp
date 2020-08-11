import React from 'react';
import {Menu} from "antd";
import {indexGoodsRoute, mogujieRules} from "../../router";
import {Link, useParams} from "react-router-dom";

function IndexGoodsNav(props) {
    let {action} = useParams()
    let goodsNavKey = mogujieRules.findIndex((item)=>item===action)
    return (
        <div className="goods-nav">
            <Menu mode={"horizontal"} defaultSelectedKeys={[goodsNavKey+""]}>
                {indexGoodsRoute.map((item,index)=>{
                    return <Menu.Item key={index}><Link to={`/mogujie/${item.to}`}>{item.txt}</Link></Menu.Item>
                })}
            </Menu>
        </div>
    );
}

export default IndexGoodsNav;