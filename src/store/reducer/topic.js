export default function topic(topic={
    loading:true,
    data:{author:{}},
    isError: false,
    err_msg:""
},action) {
    switch (action.type) {
        case "topic_loading":
            return {
                data: {author:{}},
                loading: true,
                isError: false,
                err_msg:""
            }
        case "topic_loadOver":
            return{
                data: action.data,
                loading: false,
                isError: false,
                err_msg:""
            }
        case "topic_error":
            return {
                data: {author: {}},
                loading: false,
                isError: true,
                err_msg:action.err_msg
            }
        default:
            return topic
    }
}