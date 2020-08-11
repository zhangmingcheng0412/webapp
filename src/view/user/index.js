import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useUser} from "../../store/action";
import {useParams} from "react-router-dom";
import UserRecent from "./userRecent";

function UserPage(props) {
    let {data, loading} = useSelector(state => state.user)
    let {loginname} = useParams()
    // console.log(data)
    let getUserData = useUser();
    console.log(useParams())
    useEffect(() => {
        getUserData(loginname)
    }, [loginname])
    return (
        <div className="user-page">
            <UserRecent data={data} loading={loading}/>
        </div>
    );
}

export default UserPage;