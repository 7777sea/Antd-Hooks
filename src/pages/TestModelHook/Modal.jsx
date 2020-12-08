import React, { useContext } from 'react';
import { StoreCtx } from './store';

const CModal = ({...rest}) => {

    const _store = useContext(StoreCtx)
    console.log(_store)
    console.log(rest)

    return <div>
        CModal && other
        <h3>{_store.value}</h3>
        <h4>{_store.second}</h4>
    </div>
}

export default CModal;