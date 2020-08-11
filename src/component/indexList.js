import React from 'react';
import {Col, List, Avatar} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import IndexTag from "./indexTag";
import FromNow from "./fromNow";


function IndexList(props) {
    // console.log(props)
    let {data, loading} = props
    return (
        <div className="index-list">
            <List
                loading={loading}
                dataSource={data}
                renderItem={(data) => {
                    let {author,last_reply_at,id,reply_count,good,top,tab,title,visit_count} = data
                    let {avatar_url,loginname}=author
                    return <List.Item>
                        <Col xs={4} md={2} className="list-avatar">
                            <Link to={`/user/${loginname}`}>
                                <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>} shape={"square"} src={avatar_url}/>
                            </Link>
                        </Col>
                        <Col xs={18} md={18} className="list-title">
                            <IndexTag tab={top?"top":(good?"good":tab)}/>
                            <Link to={`/topic/${id}`}>
                                {title}
                            </Link>
                        </Col>
                        <Col xs={2} md={2} className="list-count">
                            <strong>{reply_count}</strong>{reply_count===undefined?"":"/"}
                            <span>{visit_count}</span>
                        </Col>
                        <Col xs={0} md={2} className="list-data">
                            <FromNow nowData={last_reply_at}/>
                        </Col>
                    </List.Item>
                }}
            />
        </div>
    )
}

export default IndexList;