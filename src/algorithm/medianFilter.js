/**
 * 中值滤波
 * @param data                      数据
 * @param lWidth                    图像宽度
 * @param lHeight                   图像高度
 * @param filterObj                 模版数据
 * @param filterObj.iFilterW        模版宽度
 * @param filterObj.iFilterH        模版高度
 * @param filterObj.iFilterMX       模版中心元素X坐标
 * @param filterObj.iFilterMY       模版中心元素Y坐标
 */
function medianFilter(data, lWidth, lHeight, filterObj) {
    const { iFilterW, iFilterH, iFilterMX, iFilterMY } = filterObj;
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
    }
    // 行(除去边缘几行)
    for (let i = iFilterMY; i < lHeight - iFilterH - iFilterMY - 1; i++) {
        for (let j = iFilterMX; j < lWidth - iFilterW - iFilterMX - 1; j++) {
            const count = (i * lWidth + j) * 4;
            const fResult = [[], [], []];
            for (let k = 0; k < iFilterH; k++) {
                for (let l = 0; l < iFilterW; l++) {
                    const y = i - iFilterMY + k;
                    const x = j - iFilterMX + l;
                    const key = (y * lWidth + x) * 4;
                    // 保存像素值
                    for (let i = 0; i < 3; i++) {
                        fResult[i].push(dataInit[key + i]);
                    }
                }
            }
            // 将中值放回去
            for (let w = 0; w < 3; w++) {
                data[count + w] = getMedianNum(fResult[w]);
            }
        }
    }
}

/**
 * 将数组排序后获取中间的值
 * @param bArray
 * @returns {*|number}
 */
function getMedianNum(bArray) {
    const len = bArray.length;
    bArray.sort();
    let bTemp = 0;
    // 计算中值
    if ((len % 2) > 0) {
        bTemp = bArray[(len - 1) / 2];
    } else {
        bTemp = (bArray[len / 2] + bArray[len / 2 - 1]) / 2;
    }
    return bTemp;
}

export { medianFilter };
