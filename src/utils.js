/**
 * Adds keys and subkeys to JSON
 * @param  {Object} obj     json file
 * @param  {String} subKeys subKeys dot seperated
 * @param  {String} val     value of key
 * @return {Object}         returns new file
 */
export const addPropsToFile = function (obj, subKeys, val) {
    if (typeof subKeys == 'string') subKeys = subKeys.split('.');

    obj[subKeys[0]] = obj[subKeys[0]] || {};

    var tmpObj = obj[subKeys[0]];

    if (subKeys.length > 1) {
        subKeys.shift();
        addPropsToFile(tmpObj, subKeys, val);
    } else obj[subKeys[0]] = val;

    return obj;
};
