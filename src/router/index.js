import React from "react";
import IndexPage from "../view/index";
import TopicPage from "../view/topic";
import UserPage from "../view/user";
import GetStartPage from "../view/getstart";
import AboutPage from "../view/about";
import Page404 from "../view/404";
import qs from "qs";
import MoGuJiePage from "../view/mogujie";

// 定义一个规则项 判断用户输入的是否存在于该规则里面
const rules=["all","good","share","ask","job","dev"]
const mogujieRules=["clothing","skirt","trousers","neiyi","shoes","bags","boyfriend","home"]

// 路由表
const route = [
    {
        path:"/",
        exact:true,
        render(props){
            let {location} = props;
            let {search} = location;
            // qs.parse将字符串转为对象   截掉（substring）转为对象后的第一位字符
            let {tab,page} = qs.parse(search.substring(1));
            // tab和page都为空 || tab存在于rules同时page为空或者page>0
            if ((tab===undefined&&page===undefined)||(rules.includes(tab)&&(page===undefined||page>0))){
                return <IndexPage {...props}/>
            }
            return <Page404 {...props}/>
        }
    },
    {
        path:"/topic/:id",
        exact:true,
        render(props){
            return <TopicPage {...props}/>
        }
    },{
        path:"/user/:loginname",
        exact:true,
        render(props){
            return <UserPage {...props}/>
        }
    },{
        path:"/getstart",
        exact:true,
        render(props){
            return <GetStartPage {...props}/>
        }
    },{
        path:"/about",
        exact:true,
        render(props){
            return <AboutPage {...props}/>
        }
    },{
        path: "/mogujie/:action",
        exact: true,
        render(props) {
            let {match}=props;
            let {params} = match;
            let {action}=params
            if (mogujieRules.includes(action)){
                return <MoGuJiePage {...props}/>;
            }
            console.log(action)

            return <Page404 {...props}/>;
        }
    },{
        path:"",
        exact:true,
        render(props){
            return <Page404 {...props}/>
        }
    }
]
const nav = [
    {
        to:"/",
        txt:"首页"
    },
    {
        to:"/getstart",
        txt:"新手入门"
    },
    {
        to:"/mogujie/clothing",
        txt:"蘑菇街"
    },
    {
        to:"/about",
        txt:"关于我们"
    }
]

const indexNavRoute = [
    {
        to:"/?tab=all",
        txt:"全部"
    },{
        to:"/?tab=good",
        txt:"精华"
    },{
        to:"/?tab=share",
        txt:"分享"
    },{
        to:"/?tab=ask",
        txt:"问答"
    },{
        to:"/?tab=job",
        txt:"招聘"
    },{
        to:"/?tab=dev",
        txt:"客户端测试"
    },
]

const indexGoodsRoute = [
    {
        to:"clothing",
        txt:"上衣"
    },{
        to:"skirt",
        txt:"裙子"
    },{
        to:"trousers",
        txt:"裤子"
    },{
        to:"neiyi",
        txt:"内衣"
    },{
        to:"shoes",
        txt:"鞋子"
    },{
        to:"bags",
        txt:"包包"
    },{
        to:"boyfriend",
        txt:"男友"
    },{
        to:"home",
        txt:"家居"
    }
]
export {
    route,nav,indexNavRoute,rules,indexGoodsRoute,mogujieRules
}