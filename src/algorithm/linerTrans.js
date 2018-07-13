/**
 * 灰度的线性变换就是将图像中所有的点的灰度按照线性灰度变换函数进行变换，
 * 该线性灰度变换函数f(x)是一个一维线性函数
 * f(x) = fA * x + fB
 * 该函数用来对图像灰度
 * @param data
 * @param fA    线性变换的斜率
 * @param fB    线性变换的截距
 */
function linerTrans(data, fA, fB) {
    for (let i = 0, len = data.length; i < len; i += 4) {
        // 针对RGB三个进行转换
        for (let j = 0; j < 3; j++) {
            let fTemp = fA * data[i + j] + fB;
            if (fTemp > 255) {
                fTemp = 255;
            } else if (fTemp < 0) {
                fTemp = 0;
            } else {
                fTemp = Math.round(fTemp);
            }
            data[i + j] = fTemp;
        }
    }
}
export { linerTrans };
