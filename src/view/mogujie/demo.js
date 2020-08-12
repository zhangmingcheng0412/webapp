import React from "react";
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import fetchJsonp from "fetch-jsonp";

// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    };

    componentDidMount() {
        console.log("开始请求了")
        this.fetchData(res => {
            this.setState({
                data: res,
            });
        });
    }

    fetchData=(callback)=>{
        fetchJsonp("https://list.mogu.com/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing", {
            jsonpCallback: 'callback',
        })
            .then(function(response) {
                return response.json()
            }).then(function(res) {
            // console.log('parsed json', res.result.wall.docs)
            callback(res.result.wall.docs);
        }).catch(function(ex) {
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
        let { data } = this.state;
        this.setState({
            loading: true,
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
            data = data.concat(res);
            this.setState({
                data,
                loading: false,
            });
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
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.email}
                                />
                                <div>Content</div>
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="demo-loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}

export default InfiniteListExample;