import React, {useEffect} from 'react';
import IndexNav from "./indexNav";
import IndexList from "../../component/indexList";
import {useSelector} from "react-redux";
import {useTopicsData} from "../../store/action";
import {useLocation} from "react-router";
import qs from "qs"
// import IndexPagination from "./indexPagination";

function IndexPage(props) {
    let {data,loading} = useSelector(state=>state.topics)
    let getDate = useTopicsData()
    let {search} = useLocation()
    let {tab,page} = qs.parse(search.substring(1))
    useEffect(()=>{
        getDate(tab,page)
    },[tab,page])
    return (
        <div>
            <IndexNav/>
            {/*data={data} loading={loading}*/}
            <IndexList data={data} loading={loading}/>
            {/*{loading?"":<IndexPagination/>}*/}
        </div>
    );
}

export default IndexPage;