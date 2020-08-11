import React from 'react';
import {Menu} from "antd";
import {indexNavRoute,rules} from "../../router";
import {Link, useLocation} from "react-router-dom";
import qs from "qs"

function IndexNav() {
    // 不能从props里面拿，父级没有传递props props为空
    // console.log(useLocation());
    let {search} = useLocation()
    // qs.parse将字符串转为对象   截掉（substring）转为对象后的第一位字符
    let {tab} = qs.parse(search.substring(1))
    // 查找tab对应在rules的下标，两种方法  1.indexOf
    // let indexNavKey = tab===undefined?0:(rules.indexOf(tab))
    // 2.findIndex  匹配key 显示初次打开的对应项
    let indexNavKey = tab===undefined?0:(rules.findIndex(itme=>itme===tab))
    return (
        <div className={"index-nav"}>
            {/*indexMenu start*/}
            <Menu
                mode={"horizontal"}
                defaultSelectedKeys={[indexNavKey+""]}
            >
                {indexNavRoute.map((item,index)=>{
                    return <Menu.Item
                        key={index}
                    >
                        <Link to={item.to}>
                            {item.txt}
                        </Link>
                    </Menu.Item>
                })}
            </Menu>
            {/*indexMenu end*/}
        </div>
    );
}

export default IndexNav;