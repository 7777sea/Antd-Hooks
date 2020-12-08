import React from 'react';
import CModal from './Modal';
import { StoreCtx } from './store';
import useModel from '@/components/Hooks/useModal';

const TestModelHook = () => {

    const [ modal, Modal ] = useModel(CModal)

    const showModalHandle = () => modal.show()


    const showAndHideHandle = () => {
        modal.show()
        setTimeout(modal.hide, 3000)
    }

    return <StoreCtx.Provider 
        value={{
            a: 1, 
            value: '这是一个中间组件的初始上下文',
        }}
    >
        <div>
            <h1>Modal</h1>
            <Modal />
            <div onClick={showModalHandle}>click this: show Modal</div>
            <div onClick={showAndHideHandle}>click this: show Modal and close after 3 seconds</div>
        </div>
    </StoreCtx.Provider>
}

export default TestModelHook;