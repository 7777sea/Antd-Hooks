import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Resizable } from 'react-resizable';

const LDrawer = () => {

    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(200);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onResize = (e, { size }) => {
        setWidth(size.width)
    }
    return (
        <div className='l_drawer'>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            
            <Drawer
                width={width}
                title="Basic Drawer"
                className='qwer'
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Resizable
                    width={width}
                    height={0}
                    handle={
                        <span
                            className="react-resizable-handle"
                            onClick={e => {
                                e.stopPropagation();
                            }}
                        />
                    }
                    resizeHandles={["w"]}
                    onResize={onResize}
                    draggableOpts={{ enableUserSelectHack: false }}
                >
                    <div style={{width: width-50}} className='inner'>wqerqewrreqwqewrqewr</div>
                </Resizable>
            </Drawer>
            {/*language=SCSS*/}
            <style jsx>{`
                    :global(.react-resizable) {
                        position: relative;
                        background-clip: padding-box;
                        
                    }
                    :global(.react-resizable-handle) {
                        position: absolute;
                        left: -5px;
                        bottom: 0;
                        z-index: 1;
                        width: 10px;
                        height: 100%;
                        cursor: col-resize;
                        background: blue
                    }
                    :global(.inner) {
                        border: 1px solid orange;
                        user-select: none;
                        height: 100%;
                        overflow: hidden
                    }
                
            `}</style>
        </div>
    )
}

export default LDrawer;

export const code = `
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Resizable } from 'react-resizable';

const LDrawer = () => {

    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(200);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onResize = (e, { size }) => {
        setWidth(size.width)
    }
    return (
        <div className='l_drawer'>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            
            <Drawer
                width={width}
                title="Basic Drawer"
                className='qwer'
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Resizable
                    width={width}
                    height={0}
                    handle={
                        <span
                            className="react-resizable-handle"
                            onClick={e => {
                                e.stopPropagation();
                            }}
                        />
                    }
                    resizeHandles={["w"]}
                    onResize={onResize}
                    draggableOpts={{ enableUserSelectHack: false }}
                >
                    <div style={{width: width-50}} className='inner'>wqerqewrreqwqewrqewr</div>
                </Resizable>
            </Drawer>
        </div>
    )
}

export default LDrawer;
`