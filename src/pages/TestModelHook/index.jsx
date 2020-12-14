import React from 'react';
import { Button } from 'antd';
import CModal from './Modal';
import useModel from '@/components/Hooks/useModal';

const TestModelHook = () => {

    const [ modal, Modal ] = useModel(CModal)

    const showModalHandle = () => modal.show()

    return <div>
        <Modal />
        <Button onClick={showModalHandle}>click this: show Modal</Button>
    </div>
}

export default TestModelHook;

export const code = `
    import React from 'react';
    import { Button } from 'antd';
    import CModal from './Modal';
    import useModel from '@/components/Hooks/useModal';

    const TestModelHook = () => {

        const [ modal, Modal ] = useModel(CModal)

        const showModalHandle = () => modal.show()

        return <div>
            <Modal />
            <Button onClick={showModalHandle}>click this: show Modal</Button>
        </div>
    }

    export default TestModelHook;
`