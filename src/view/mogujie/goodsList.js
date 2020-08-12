import React, {Fragment} from 'react';
import {List, Card, Avatar} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, HeartTwoTone} from '@ant-design/icons';

function GoodsList(props) {
    let {data, loading} = props
    return (
        <div className="goods-list">
            <List
                grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {/*<Card title={item.title}>Card content</Card>*/}
                        <Card
                            bordered
                            loading={loading}
                            // style={"goods-img"}
                            cover={<img alt={item.tradeItemId} src={item.img} className="goods-img"/>}
                            // cover={<Avatar shape={"square"} size={"default"} src={item.img} className="goods-img"/>}
                        >
                            <Card.Meta title={item.title}
                                       // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                       description={<Fragment>
                                           <p>
                                               <span style={{paddingRight: 20}}>￥{item.price}</span>
                                               <span style={{paddingRight: 20}}>￥{item.orgPrice}</span>
                                               <span style={{paddingRight: 20}}>{<HeartTwoTone/>}{item.cfav}</span>
                                           </p>
                                       </Fragment>}/>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default GoodsList;
