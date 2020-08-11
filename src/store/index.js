import {createStore,combineReducers} from "redux";
import topics from "./reducer/topics";
import topic from "./reducer/topic";
import user from "./reducer/user";
import mogujie from "./reducer/mogujie";

export default createStore(combineReducers({
    topics,topic,user,mogujie
}))

