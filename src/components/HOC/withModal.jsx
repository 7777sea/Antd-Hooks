import React from 'react';
import { Modal } from 'antd';

export default function withModal (WrappedComponent, action) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: false
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
    
        render() {
            return <Modal 
                visible={this.state.visible} 
                onCancel={() => this.setState({visible: false})}
            >
                <WrappedComponent {...this.props}/>
            </Modal>;
        }
    };
}