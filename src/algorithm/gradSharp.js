/**
 * 该函数用来对图像进行梯度锐化
 * @param data          数据
 * @param lWidth        宽度
 * @param lHeight       高度
 * @param bThre         阈值
 */
function gradSharp(data, lWidth, lHeight, bThre) {
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
    }
    for (let i = 0; i < lHeight - 1; i++) {
        for (let j = 0; j < lWidth - 1; j++) {
            const lpSrc = (i * lWidth + j) * 4;
            const lpSrc1 = ((i + 1) * lWidth + j) * 4;
            const lpSrc2 = (i * lWidth + j + 1) * 4;
            for (let i = 0; i < 3; i++) {
                const bTemp = Math.abs(dataInit[lpSrc + i] - dataInit[lpSrc1 + i]) +
                    Math.abs(dataInit[lpSrc + i] - dataInit[lpSrc2 + i]);
                if (bTemp >= 255) {
                    data[lpSrc + i] = 255;
                    // 判断是否大于阈值，对于小于情况，灰度值不变
                } else if (bTemp >= bThre) {
                    data[lpSrc + i] = bTemp;
                }
            }
        }
    }
}
export { gradSharp };
