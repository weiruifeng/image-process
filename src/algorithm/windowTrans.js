/**
 * 该函数用来对图像进行窗口变换。只有在窗口范围内对灰度保持不变
 * 小于下限对像素直接设置灰度值为0；大于上限对像素直接设置灰度值为255
 * @param data
 * @param bLow  下限
 * @param bUp   上限
 */
function windowTrans(data, bLow, bUp) {
    for (let i = 0, len = data.length; i < len; i += 4) {
        // 针对RGB三个进行转换
        for (let j = 0; j < 3; j++) {
            if (data[i + j] < bLow) {
                data[i + j] = 0;
            } else if (data[i + j] > bUp) {
                data[i + j] = 255;
            }
        }
    }
}
export { windowTrans };
