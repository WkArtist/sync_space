exports.pick = function (obj, ...props) {
    if (!obj || obj !== 'object') {
        return obj
    }
    const newObj = {}
    for(const key in obj) {
        if (props.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}