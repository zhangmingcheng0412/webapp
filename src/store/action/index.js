import Axios from "axios";
import {useDispatch} from "react-redux";
import fetchJsonp from "fetch-jsonp"


const http = Axios.create({
    baseURL: "https://cnodejs.org/api/v1"
})


// 获取主题首页数据
function useTopicsData() {
    let dispatch = useDispatch()
    return function (tab = "all", page = 1, limit = 20, mdrender = true) {
        // console.log(tab,page)
        dispatch({
            type: "topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(
            (res) => {
                dispatch({
                    type: "topics_loadOver",
                    data: res.data.data
                })
                // console.log(res)
            })
    }
}

// 获取主题详情数据
function useTopicData() {
    let dispatch = useDispatch()
    return function (id = "id") {
        dispatch({
            type: "topic_loading"
        })
        http.get(`/topic/${id}`).then((res) => {
            dispatch({
                type: "topic_loadOver",
                data: res.data.data
            })
            // console.log(res.data.data)
        }).catch((error) => {
            dispatch({
                type: "topic_error",
                err_msg: error.response.data
            })
            // console.dir(error.response.data)
        })
    }
}

// 获取用户详情数据
function useUser() {
    let dispatch = useDispatch()
    return function (loginname = "loginname") {
        dispatch({
            type: "user_loading"
        })
        http.get(`/user/${loginname}`).then((res) => {
            dispatch({
                type: "user_loadOver",
                data: res.data.data
            })
            // console.log(res.data.data)
        })
    }
}

// 获取蘑菇街jsonp数据
function useMoGuJie() {
    let dispatch = useDispatch()
    // https://list.mogu.com/search?&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=20000371&action=home
    // https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=neiyi
    // let api="https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=neiyi"
    return function (action = null,page=1) {
        dispatch({
            type: "mogujie_loading"
        })
        fetchJsonp(`https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=${page}&sort=pop&ad=0&fcid=&action=${action}`, {
            jsonpCallback: 'callback',
        }).then(function (response) {
                return response.json()
            }).then(function (res) {
            dispatch({
                type: "mogujie_loadOver",
                data: res.result.wall.docs
            })
            // console.log(res.result.wall.docs)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
}


export {useTopicsData, useTopicData, useUser, useMoGuJie}