import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import MonacoEditor from 'react-monaco-editor';

import { EnumTypeComponents, getComponents } from './getComponents';
const { Header, Sider, Content } = Layout;

const NLayout = () => {

    const [ isCollapsed, setIsCollapsed ] = useState(false); 
    const [ drawerVisible, setDrawerVisible ] = useState(false); 
    const [ type, setType ] = useState('MODEL'); 


    return <Layout className='l_n_layout'>
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[type]}>
                {
                    EnumTypeComponents.map(({type, title, TIcon}) => (
                        <Menu.Item key={type} icon={TIcon && <TIcon />} onClick={() => setType(type)}>
                            {title}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className='title'>{getComponents(type)?.title}</div>
            </Header>
            <Content
                className="site-layout-background c_container"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280
                }}
            >
                <div style={{padding: '20px 0'}}>
                    <Button type="primary" onClick={() => setDrawerVisible(true)}>
                        查看源代码
                    </Button>
                </div>
                {React.createElement(getComponents(type)?.comp || <div />, {})}
                
                <Drawer
                    title="源代码"
                    width="900"
                    onClose={() => setDrawerVisible(false)}
                    placement="right"
                    visible={drawerVisible}
                >
                    <MonacoEditor
                        width="800"
                        height="500"
                        language="javascript"
                        theme="vs-dark"
                        value={getComponents(type)?.code}
                    />
                </Drawer>
            </Content>
        </Layout>
        {/*language=SCSS*/}
        <style jsx>{`
            :global(.l_n_layout) {
                .trigger {
                    font-size: 18px;
                    line-height: 64px;
                    padding: 0 24px;
                    cursor: pointer;
                    transition: color 0.3s;
                }
                .logo {
                    height: 32px;
                    background: rgba(255, 255, 255, 0.3);
                    margin: 16px;
                }
                :global(.site-layout) {
                    .site-layout-background {
                        background: #fff;
                    }
                    .title{
                        color: #fff;
                        margin-left: 10px
                    }   
                }   
            }
        `}</style>
    </Layout>
}

export default NLayout;

