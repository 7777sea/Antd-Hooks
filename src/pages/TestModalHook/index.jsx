import React from 'react';
import { Button } from 'antd';
import CModal from './Modal';
import useModal from '@/components/Hooks/useModal';

const TestModalHook = () => {

    const [ modal, Modal ] = useModal(CModal)

    const showModalHandle = () => modal.show()

    return <div>
        <Modal />
        <Button onClick={showModalHandle}>click this: show Modal</Button>
    </div>
}

export default TestModalHook;

export const code = `
    import React from 'react';
    import { Button } from 'antd';
    import CModal from './Modal';
    import useModal from '@/components/Hooks/useModal';

    const TestModalHook = () => {

        const [ modal, Modal ] = useModal(CModal)

        const showModalHandle = () => modal.show()

        return <div>
            <Modal />
            <Button onClick={showModalHandle}>click this: show Modal</Button>
        </div>
    }

    export default TestModalHook;
`