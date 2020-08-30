import React, {useEffect} from 'react';
import {useMoGuJie} from "../../store/action";
import {useSelector} from "react-redux";
import GoodsList from "./goodsList";
import IndexGoodsNav from "./indexGoodsNav";
import {useParams} from "react-router-dom";
import InfiniteListExample from "./demo";


function MoGuJiePage(props) {
    let {data, loading} = useSelector(state => state.mogujie)
    let {action} = useParams()
    // let getMoData = useMoGuJie()
    // useEffect(() => {
    //     getMoData(action)
    // }, [action])
    console.log(action)
    return (
        <div>
            <IndexGoodsNav/>
            {/*<GoodsList loading={loading} data={data}/>*/}
            <InfiniteListExample action={action}/>
        </div>
    );
}

export default MoGuJiePage;