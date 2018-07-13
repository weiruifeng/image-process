/**
 * 反色处理
 * @param data
 */
function invert(data) {
    for (let i = 0, len = data.length; i < len; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
}
export { invert };
