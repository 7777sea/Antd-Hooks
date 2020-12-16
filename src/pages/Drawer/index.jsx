import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Rnd } from 'react-rnd'

const LDrawer = () => {

    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(700);

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='l_drawer'>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            
            <Drawer
                width={width}
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <div style={{height: '100%'}}>
                    <Rnd
                        default={{
                            width: width,
                            height: document.body.clientHeight,
                        }}
                        onResize={(e, direction, ref, delta, position) => {
                            if(ref.style.width){
                                setWidth(parseInt(ref.style.width))
                            }   
                        }} 
                        minWidth={700}
                        maxWidth={document.body.clientWidth}
                        enableResizing= {{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: true,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}  
                        resizeHandleClasses= {{
                            left: 'l'
                        }}
                        disableDragging= {true} 
                    >  
                    </Rnd>
                    <div style={{width: width-50, height: '100%'}} className='inner'>
                        鼠标移入左侧边框可拖拽改变大小
                        <div>minWidth: 700px  maxWidth: {document.body.clientWidth}px</div> 
                        <div>当前宽度: {width}px</div>
                    </div>
                </div>
            </Drawer>
            {/*language=SCSS*/}
            <style jsx>{`
                :global(.inner) {
                    border: 1px solid orange;
                    user-select: none;
                    height: 100%;
                    overflow: hidden
                }
                :global(.l:hover){
                    background: #00C9C3
                }
                :global(.l:active){
                    background: #00C9C3
                }
            `}</style>
        </div>
    )
}

export default LDrawer;

export const code = `
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Rnd } from 'react-rnd'

const LDrawer = () => {

    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(700);

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='l_drawer'>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            
            <Drawer
                width={width}
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <div style={{height: '100%'}}>
                    <Rnd
                        default={{
                            width: width,
                            height: document.body.clientHeight,
                        }}
                        onResize={(e, direction, ref, delta, position) => {
                            if(ref.style.width){
                                setWidth(parseInt(ref.style.width))
                            }   
                        }} 
                        minWidth={700}
                        maxWidth={document.body.clientWidth}
                        enableResizing= {{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: true,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}  
                        resizeHandleClasses= {{
                            left: 'l'
                        }}
                        disableDragging= {true} 
                    >  
                    </Rnd>
                    <div style={{width: width-50, height: '100%'}} className='inner'>wqerqewrreqwqewrqewr</div>
                </div>
            </Drawer>
        </div>
    )
}

export default LDrawer;
`