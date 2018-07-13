/**
 * 该函数用来对图像进行直方图均衡
 * @param data
 */
function inteEqualize(data) {
    // 灰度映射表
    const bMap = new Array(256);
    // 灰度映射表
    const lCount = new Array(256);
    for (let i = 0; i < 256; i++) {
        // 清零
        lCount[i] = 0;
    }
    // 计算各个灰度值的计数(只针对灰度图像)
    for (let i = 0, len = data.length; i < len; i += 4) {
        lCount[data[i]]++;
    }
    // 计算灰度映射表
    for (let i = 0; i < 256; i++) {
        let lTemp = 0;
        for (let j = 0; j < i; j++) {
            lTemp += lCount[j];
        }
        // 计算对应的新灰度值
        bMap[i] = Math.round(lTemp * 255 / (data.length / 4));
    }
    // 赋值
    for (let i = 0, len = data.length; i < len; i += 4) {
        data[i] = bMap[data[i]];
        data[i + 1] = bMap[data[i + 1]];
        data[i + 2] = bMap[data[i + 2]];
    }
}
export { inteEqualize };
