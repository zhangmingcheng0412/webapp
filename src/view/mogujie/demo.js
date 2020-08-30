import React, {Fragment} from "react";
import {List, message, Avatar, Spin, Card} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import fetchJsonp from "fetch-jsonp";


// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.action)
    }
    state = {
        data: [],
        loading: false,
        hasMore: true,
        page:1,
        action:this.props.action
    };

    componentDidMount() {
        console.log("开始请求了")
        this.fetchData((res) => {
            this.setState({
                data: res,
                action:this.props.action
            });
            console.log(this.state.action)
        });
    }

    fetchData = (callback) => {
        // console.log(this.state)
        let {page} = this.state
        let {action} = this.state
        // let page = this.state.page
        console.log("state里的page",page)
        console.log("this.props里的action",action)
        fetchJsonp(`https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=${page}&sort=pop&ad=0&fcid=&action=${action}`, {
            jsonpCallback: 'callback',
        })
            .then(function (response) {
                return response.json()
            }).then(function (res) {
            // console.log('parsed json', res.result.wall.docs)
            callback(res.result.wall.docs);
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }


    // fetchData = callback => {
    //     reqwest({
    //         url: fakeDataUrl,
    //         type: 'json',
    //         method: 'get',
    //         contentType: 'application/json',
    //         success: res => {
    //             callback(res);
    //         },
    //     });
    // };

    handleInfiniteOnLoad = () => {
        let {data} = this.state;
        this.setState({
            loading: true,
            page: this.state.page+1
        });
        /*if (data.length > data.length-1) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }*/
        this.fetchData(res => {
            console.log("再次请求了");
            // console.log(page)
            data = data.concat(res);
            this.setState({
                data,
                loading: false,
            });
            // this.setState((state)=>({
            //     // page: state.page+1,
            //     data,
            //     loading: false,
            // }))
            // console.log(page)
        });
    };

    render() {
        return (
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <div className="goods-list">
                        <List
                            grid={{
                                gutter: 16,
                                xs: 2,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 4,
                                xxl: 4,
                            }}
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item>
                                    {/*<Card title={item.title}>Card content</Card>*/}
                                    <Card
                                        bordered
                                        // loading={loading}
                                        // style={"goods-img"}
                                        cover={<img alt={item.tradeItemId} src={item.img} className="goods-img"/>}
                                        // cover={<Avatar shape={"square"} size={"default"} src={item.img} className="goods-img"/>}
                                    >
                                        <Card.Meta title={item.title}
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                                   description={<Fragment>
                                                       <p>
                                                           <span style={{paddingRight: 20}}>￥{item.price}</span>
                                                           <span style={{paddingRight: 20}}>￥{item.orgPrice}</span>
                                                           {/*<span style={{paddingRight: 20}}>{<HeartTwoTone/>}{item.cfav}</span>*/}
                                                       </p>
                                                   </Fragment>}/>
                                    </Card>
                                </List.Item>
                            )}

                        >
                            {this.state.loading && this.state.hasMore && (
                                <div className="demo-loading-container">
                                    <Spin/>
                                </div>
                            )}
                        </List>
                    </div>
                    {/*<List*/}
                    {/*    dataSource={this.state.data}*/}
                    {/*    renderItem={item => (*/}
                    {/*        <List.Item key={item.id}>*/}
                    {/*            <List.Item.Meta*/}
                    {/*                avatar={*/}
                    {/*                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>*/}
                    {/*                }*/}
                    {/*                title={<a href="https://ant.design">{item.title}</a>}*/}
                    {/*                description={item.email}*/}
                    {/*            />*/}
                    {/*            <div>Content</div>*/}
                    {/*        </List.Item>*/}
                    {/*    )}*/}
                    {/*>*/}
                    {/*    {this.state.loading && this.state.hasMore && (*/}
                    {/*        <div className="demo-loading-container">*/}
                    {/*            <Spin/>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</List>*/}
                </InfiniteScroll>
            </div>
        );
    }
}

export default InfiniteListExample;