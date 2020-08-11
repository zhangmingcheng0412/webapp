import React from 'react';
import {Affix, Layout, Menu, Row, Col} from "antd";
import {Link, useLocation} from "react-router-dom";
import {nav} from "../router";

function Header(props) {
    let {pathname} = useLocation()
    let navKey = nav.findIndex((item)=>{
        // 查找点击的pathname 与对应nav的内容值是否相同，相同返回其数组下标
        return item.to===pathname
    })
    return (
        <Affix offsetTop={0}>
            <Layout.Header className="clear-header">
                <div className="container">
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            lg={12}
                        >
                            <div className="logo">
                                <Link to="/">
                                    <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            lg={12}
                        >
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                defaultSelectedKeys={[navKey+""]}
                                className="nav-menu" >
                                {
                                    nav.map((item,index)=>{
                                        return <Menu.Item key={index}>
                                            <Link to={item.to}>
                                                {item.txt}
                                            </Link>
                                        </Menu.Item>
                                    })
                                }
                            </Menu>
                        </Col>
                    </Row>


                </div>

            </Layout.Header>
        </Affix>

    );
}

export default Header;