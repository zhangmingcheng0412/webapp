import React from 'react';
import {Card,Avatar} from "antd";
import {UserOutlined} from '@ant-design/icons';
import IndexList from "../../component/indexList";

function UserRecent(props) {
    let {loading,data} =props
    let {recent_replies,recent_topics} =data
    return (
        <div>
            <Card  loading={loading}>
                <Card.Meta
                    avatar={
                        <Avatar src={data.avatar_url} icon={<UserOutlined/>} />
                    }
                    title={data.loginname}
                    description={`当前积分：${data.score}`}
                />
            </Card>
            <Card loading={loading} title={"最近创建的话题"} type={"inner"}>
                <IndexList data={recent_replies} loading={loading}/>
            </Card>
            <Card loading={loading} title={"最近参与的话题"} type={"inner"}>
                <IndexList data={recent_topics} loading={loading}/>
            </Card>
        </div>
    );
}

export default UserRecent;