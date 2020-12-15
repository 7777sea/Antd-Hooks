import withDrawer from '../HOC/withDrawer';

const useDrawer = (comp) => {

    let _drawer = {
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
        _drawer,
        withDrawer(comp, _drawer)
    ]
}

export default useDrawer;