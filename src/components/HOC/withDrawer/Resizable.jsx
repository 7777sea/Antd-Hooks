

const R = () => {
    return  <Resizable
        width={this.state.width}
        height={0}
        handle={<HandelDom />}
        resizeHandles={["w"]}
        onResize={this.onResize}
        draggableOpts={{ enableUserSelectHack: false }}
    >

    </Resizable>
        
}