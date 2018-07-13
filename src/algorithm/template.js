/**
 * 模版操作
 * @param data              数据
 * @param lWidth            图像宽度
 * @param lHeight           图像高度
 * @param tempObj           模版数据
 * @param tempObj.iTempW    模版宽度
 * @param tempObj.iTempH    模版高度
 * @param tempObj.iTempMX   模版中心元素X坐标
 * @param tempObj.iTempMY   模版中心元素Y坐标
 * @param tempObj.fpArray   模版数组
 * @param tempObj.fCoef     模版系数
 */
function template(data, lWidth, lHeight, tempObj) {
    const { iTempW, iTempH, iTempMX, iTempMY, fpArray, fCoef } = tempObj;
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
    }
    // 行(除去边缘几行)
    for (let i = iTempMY; i < lHeight - iTempMY - 1; i++) {
        // 列(除去边缘几列)
        for (let j = iTempMX; j < lWidth - iTempMX - 1; j++) {
            const count = (i * lWidth + j) * 4;
            const fResult = [0, 0, 0];
            for (let k = 0; k < iTempH; k++) {
                for (let l = 0; l < iTempW; l++) {
                    const weight = fpArray[k * iTempW + l];
                    const y = i - iTempMY + k;
                    const x = j - iTempMX + l;
                    const key = (y * lWidth + x) * 4;
                    // 保存像素值
                    for (let i = 0; i < 3; i++) {
                        fResult[i] += dataInit[key + i] * weight;
                    }
                }
            }
            for (let i = 0; i < 3; i++) {
                // 乘上系数
                fResult[i] *= fCoef;
                // 取绝对值
                fResult[i] = Math.abs(fResult[i]);
                fResult[i] = fResult[i] > 255 ? 255 : Math.ceil(fResult[i]);
                // 将修改后的值放回去
                data[count + i] = fResult[i];
            }
        }
    }
}
export { template };
