import TestModelHook, { code } from '../TestModelHook';
import LTable from '../Table';

const EnumType = {
    model: 'MODEL',
    table: 'TABLE'
}

const _EnumTypeComponents = {
    [EnumType.model]: {
        type: EnumType.model,
        title: 'Model',
        desc: 'Model',
        comp: TestModelHook,
        code: code
    },
    [EnumType.table]: {
        type: EnumType.table,
        title: 'Table',
        desc: 'TABLE',
        comp: LTable
    }
}

export const EnumTypeComponents = Object.values(_EnumTypeComponents)

export const getComponents = (type) => _EnumTypeComponents[type] || null
