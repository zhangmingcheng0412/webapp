import React, {Fragment} from 'react';
import {Card} from "antd";
import FromNow from "../../component/fromNow";
import {Link} from "react-router-dom";
import IndexTag from "../../component/indexTag";

function IndexDetail(props) {
    let {loading, data} = props;
    let {author, content, create_at, good, tab, top, title, visit_count} = data;
    return (
        <div>
            <Card bordered loading={loading} type={"inner"} className="detail-card"
                  title={
                      <Fragment>
                          <p>
                              <span><IndexTag tab={top ? "top" : (good ? "good" : tab)}/></span>
                              <span className="detail-title">{title}</span>
                          </p>
                          <em>发布于
                              <FromNow nowData={create_at}/>
                          </em>
                          <em>作者 <Link to={`/user/${author.loginname}`}>{author.loginname}</Link></em>
                          <em>{visit_count} 次浏览</em>
                      </Fragment>
                  }>
                <div dangerouslySetInnerHTML={
                    {__html: content}
                }>
                </div>
            </Card>
        </div>
    );
}

export default IndexDetail;