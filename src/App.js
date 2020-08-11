import React from 'react';
// import {useSelector} from "react-redux";
import {route} from "./router"
import {Switch, Route} from "react-router-dom"
import {Layout, BackTop} from "antd"
import Header from "./component/header";
import Footer from "./component/footer";

function App() {
    // console.log(useSelector(state => state))
    return (
        <Layout className="index-height">
            <Header/>
            <Layout.Content>
                <div className="container">
                    <Switch>
                        {route.map((item, index) => {
                            return <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                render={(props) => {
                                    props.name = "xioaming"
                                    return item.render(props)
                                }}
                            />
                        })}
                    </Switch>
                </div>
            </Layout.Content>
            <Footer/>
            <BackTop/>
        </Layout>
    );
}

export default App;
