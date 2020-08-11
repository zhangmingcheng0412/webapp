import React from 'react';
import {Tag} from "antd"

function setTag(tab) {
    switch (tab) {
        case "good":
            return <Tag color="#eb2f96">精华</Tag>
        case "share":
            return <Tag color="#2db7f5">分享</Tag>
        case "ask":
            return <Tag color="#87d068">问答</Tag>
        case "job":
            return <Tag color="#108ee9">招聘</Tag>
        case "dev":
            return <Tag color="#52c41a">测试</Tag>
        case "top":
            return <Tag color="#f50">置顶</Tag>
        default:
            return null
    }
}
function IndexTag(props) {
    // console.log(props)
    let {tab} = props
    return setTag(tab)
}

export default IndexTag;