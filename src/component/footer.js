import React from 'react';
import {Layout} from "antd";

function Footer(props) {
    return (
        <Layout.Footer className="clear-footer">
            <div className="container">
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            </div>
        </Layout.Footer>
    );
}

export default Footer;