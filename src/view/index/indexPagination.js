import React, {useState} from 'react';
import {Pagination} from "antd";
import {Link, useLocation} from "react-router-dom";
import qs from "qs";

function IndexPagination(props) {
    let {search}=useLocation();
    // console.log(search)
    // let {tab="all",page=1}=qs.parse(search.substring(1));
    let {tab="all",page=1}=qs.parse(search.substring(1));
    let [num,setNum] = useState(page)
    console.log(num)
    return (
        <div>
            <Pagination showSizeChanger={false} defaultCurrent={page} total={100} />

        </div>
    );
}

export default IndexPagination;