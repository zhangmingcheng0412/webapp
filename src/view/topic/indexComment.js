import React, {Fragment} from 'react';
import {Card, List, Comment, Avatar} from "antd";
import {UserOutlined,LikeFilled} from '@ant-design/icons';
import FromNow from "../../component/fromNow";
import {Link} from "react-router-dom";

function IndexComment(props) {
    let {loading, data} = props
    // console.log(data)
    return (
        <div>
            <Card bordered loading={loading} type={"inner"} className="detail-card"
                  title={
                      <Fragment>
                          <span className="detail-title">{"回复列表"}</span>
                      </Fragment>
                  }>
                <List dataSource={data}
                      renderItem={item => {
                          return <List.Item>
                              <Comment
                                  avatar={<Fragment>
                                      <Link to={`/user/${item.author.loginname}`}>
                                          <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}
                                                  shape={"square"} src={item.author.avatar_url}/>
                                      </Link>
                                  </Fragment>}
                                  author={<Fragment>
                                      <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                                  </Fragment>}
                                  datetime={<Fragment>
                                      <FromNow nowData={item.create_at}/>
                                      <span style={{paddingLeft:15}}>点赞 <LikeFilled/>{item.ups.length}</span>
                                  </Fragment>}
                                  content={<div dangerouslySetInnerHTML={{__html: item.content}}
                                  >

                                  </div>}/></List.Item>
                      }}/>
            </Card>
        </div>);
}

export default IndexComment;