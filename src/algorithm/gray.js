/**
 * 灰度处理
 * @param data
 */
function gray(data) {
    for (let i = 0, len = data.length; i < len; i += 4) {
        const value = (data[i] + data[i + 1] + data[i + 1]) / 3;
        data[i] = data[i + 1] = data[i + 2] = value;
    }
}
export { gray };
