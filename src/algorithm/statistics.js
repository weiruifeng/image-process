/**
 * 统计数据
 * @param data
 * @param strength 分份
 * @returns {Array}
 */
function statistics(data, strength = 1) {
    const statistArr = [];
    for (let i = 0, len = data.length; i < len; i += 4) {
        const key = Math.round(data[i] / strength);
        statistArr[key] = statistArr[key] || 0;
        statistArr[key]++;
    }
    return statistArr;
}
export { statistics };
