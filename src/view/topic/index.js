import React, {useEffect,Fragment} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useTopicData} from "../../store/action";
import {Alert} from "antd";
import IndexDetail from "./indexDetail";
import IndexComment from "./indexComment";

function TopicPage(props) {
    // console.log(useSelector(state => state.topic))
    let {goBack}=useHistory()
    let {loading, data, isError,err_msg} = useSelector(state => state.topic)
    // console.log(err_msg)
    // console.log(data)
    let {id} = useParams()
    let getTopicData = useTopicData()
    useEffect(() => {
        getTopicData(id)
        console.log(id)
    }, [id])
    return (
        <div>
            {isError?<Alert closable type={"error"} message={err_msg.error_msg} description={"出现错误了，点击右上角关闭按钮，返回上一级"} onClose={()=>{
                goBack()
            }}/>:(<Fragment>
                    <IndexDetail loading={loading} data={data}/>
                    <IndexComment loading={loading} data={data.replies}/>
                </Fragment>)}
        </div>
    );
}

export default TopicPage;