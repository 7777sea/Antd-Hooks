import withModal from '../HOC/withModal';

const useModal = (comp) => {

    let _modal = {
        show: () => {},
        hide: () => {},
        destroy: () => {},
        registerApi: function (obj) {
            Object.keys(obj).forEach(key => {
                this[key] = obj[key]
            })
        }
    }

    return [
        _modal,
        withModal(comp, _modal)
    ]
}

export default useModal;