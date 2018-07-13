/**
 * 该函数用来对图像进行阈值变换。
 * 对于灰度小于阈值的像素直接设置灰度值为0；
 * 灰度值大于阈值的像素设置为255
 * @param data
 * @param bthre 阈值
 */
function thresholdTrans(data, bthre) {
    for (let i = 0, len = data.length; i < len; i += 4) {
        // 针对RGB三个进行转换
        for (let j = 0; j < 3; j++) {
            if (data[i + j] < bthre) {
                data[i + j] = 0;
            } else {
                data[i + j] = 255;
            }
        }
    }
}
export { thresholdTrans };
