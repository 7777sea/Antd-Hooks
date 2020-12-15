import TestModalHook, { code as modalCode } from '../TestModalHook';
import LTable from '../Table';
import LDrawer, { code as drawerCode } from '../Drawer';

const EnumType = {
    modal: 'MODAL',
    table: 'TABLE',
    drawer: 'DRAWER'
}

const _EnumTypeComponents = {
    [EnumType.modal]: {
        type: EnumType.modal,
        title: 'Modal',
        desc: 'Modal',
        comp: TestModalHook,
        code: modalCode
    },
    [EnumType.table]: {
        type: EnumType.table,
        title: 'Table',
        desc: 'TABLE',
        comp: LTable,
        code: '32231414'
    },
    [EnumType.drawer]: {
        type: EnumType.drawer,
        title: 'Drawer',
        desc: 'Drawer',
        comp: LDrawer,
        code: drawerCode
    }
}

export const EnumTypeComponents = Object.values(_EnumTypeComponents)

export const getComponents = (type) => _EnumTypeComponents[type] || null
