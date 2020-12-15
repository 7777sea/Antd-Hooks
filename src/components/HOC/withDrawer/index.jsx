import React from 'react';
import { Drawer } from 'antd';
import { Resizable } from 'react-resizable';
import './withDrawer.less';

export default function withDrawer (WrappedComponent, action) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: false,
                width: 200
            };
        }
    
        componentDidMount() {
            action.registerApi({
                show: () => this.setState({visible: true}),
                hide: () => this.setState({visible: false})
            })
        }
    
        componentWillUnmount() {
            action.registerApi({
                show: () => {},
                hide: () => {}
            })
        }

        onResize = (e, { size }) => {
            this.setState({width: size.width})
        }
    
        render() {
            return <Drawer 
                width={this.state.width}
                visible={this.state.visible} 
                onCancel={() => this.setState({visible: false})}
                placement="right"
                className={'l_drawer'}
                closable={false}
            >
               
                <WrappedComponent {...this.props}/>
            </Drawer>;
        }
    };
}

const HandelDom = () => {
    return <span
        className="react-resizable-handle"
        onClick={e => {
            e.stopPropagation();
        }}
    />
}