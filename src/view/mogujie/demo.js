import React, {Component} from "react";
import {List, message, Avatar, Spin} from 'antd';
import reqwest from 'reqwest';
import fetchJsonp from "fetch-jsonp"

import InfiniteScroll from 'react-infinite-scroller';

// const fakeDataUrl = 'https://randomuser.me/api/?results=6&inc=name,gender,email,nat&noinfo';
// const fakeDataUrl = 'https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=neiyi';

class InfiniteListExample extends React.Component {


    state = {
        data: [],
        page:1,
        loading: false,
        hasMore: true,
    };

    componentDidMount() {
        this.fetchData(res => {
            console.log(this.state.page)
            this.setState({
                data: res,
                page:this.state.page+1
            },()=>{console.log(this.state)});
        });
    }
    fetchData = (callback ,page=this.state.page)=> {
        console.log(page)
        fetchJsonp(`https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=${page}&sort=pop&ad=0&fcid=&action=neiyi`, {
            jsonpCallback: 'callback',
        })
            .then(function (response) {
                return response.json()
            }).then(function (data) {
            callback(data.result.wall.docs)
            console.log('parsed json', data.result.wall.docs)

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
        let { data ,page} = this.state;
        console.log(page)
        this.setState({
            loading: true
        });
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData(res => {
            data = data.concat(res.results);
            console.log(res)
            this.setState({
                data,
                loading: false,
                page: page+1
            });
        });
    };



render(){
    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={
                    this.handleInfiniteOnLoad

                }
                hasMore={!this.state.loading && this.state.hasMore}
                useWindow={false}
            >
                <List
                    dataSource={this.state.data}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                }
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.cfav}
                            />
                            <div>{item.tradeItemId}</div>
                        </List.Item>
                    )}
                >
                    {this.state.loading && this.state.hasMore && (
                        <div className="demo-loading-container">
                            <Spin/>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    );
}
}

export default InfiniteListExample