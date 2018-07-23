/**
 * 说明
 * 该函数用于对检测图像中对平行直线。
 * 如果图像中有两条平行的直线，则将这两条平行直线提取出来
 * 要求目标图像为只有0和255两个灰度值的灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function houghDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
        // 初始化数组
        data[i] = 255;
    }
    const maxValue1 = {
        value: 0,
        dist: 0,
        angleNumber: 0
    };
    const maxValue2 = {
        value: 0,
        dist: 0,
        angleNumber: 0
    };
    // 计算变换域的尺寸
    // 最大距离
    const iMaxDist = Math.floor(Math.sqrt(lWidth * lWidth + lHeight * lHeight));
    // 为变换域分配内存
    const iMaxAngleNumber = 90;
    const lpTransArea = [];
    for (let j = 0; j < lHeight; j++) {
        for (let i = 0; i < lWidth; i++) {
            const lpSrc = j * lWidth + i;
            const pixel = dataInit[lpSrc * 4];
            // 如果是黑点，则在变换域的对应各点上+1
            if (pixel === 0) {
                // 注意步长是2度
                for (let iAngleNumber = 0; iAngleNumber < iMaxAngleNumber; iAngleNumber++) {
                    const iDist = Math.abs(i * Math.cos(iAngleNumber * 2 * Math.PI / 180) +
                        j * Math.sin(iAngleNumber * 2 * Math.PI / 180));
                    const key = Math.floor(iDist * iMaxAngleNumber + iAngleNumber);
                    lpTransArea[key] = lpTransArea[key] || 0;
                    // 变换域的对应点上+1
                    lpTransArea[key]++;
                }
            }
        }
    }

    // 找到第一个最大值
    for (let iDist = 0; iDist < iMaxDist; iDist++) {
        for (let iAngleNumber = 0; iAngleNumber < iMaxAngleNumber; iAngleNumber++) {
            const key = Math.floor(iDist * iMaxAngleNumber + iAngleNumber);
            lpTransArea[key] = lpTransArea[key] || 0;
            if (lpTransArea[key] > maxValue1.value) {
                maxValue1.value = lpTransArea[key];
                maxValue1.dist = iDist;
                maxValue1.angleNumber = iAngleNumber;
            }
        }
    }
    // 将第一个最大值点附近清零
    for (let iDist = -9; iDist < 10; iDist++) {
        for (let iAngleNumber = -1; iAngleNumber < 2; iAngleNumber++) {
            const dist = iDist + maxValue1.dist;
            const angleNumber = iAngleNumber + maxValue1.angleNumber;
            if (dist >= 0 && dist < iMaxDist && angleNumber >= 0 && angleNumber <= iMaxAngleNumber) {
                const key = (iDist + maxValue1.dist) * iMaxAngleNumber +
                    iAngleNumber + maxValue1.angleNumber;
                lpTransArea[key] = 0;
            }
        }
    }
    // 找到第二个最大值点
    for (let iDist = 0; iDist < iMaxDist; iDist++) {
        for (let iAngleNumber = 0; iAngleNumber < iMaxAngleNumber; iAngleNumber++) {
            const key = Math.floor(iDist * iMaxAngleNumber + iAngleNumber);
            lpTransArea[key] = lpTransArea[key] || 0;
            if (lpTransArea[key] > maxValue2.value) {
                maxValue2.value = lpTransArea[key];
                maxValue2.dist = iDist;
                maxValue2.angleNumber = iAngleNumber;
            }
        }
    }
    // 判断两条直线是否平行
    if (Math.abs(maxValue1.angleNumber - maxValue2.angleNumber) <= 2) {
        // 两直线平行，在缓存图像中重绘这两条直线
        for (let j = 0; j < lHeight; j++) {
            for (let i = 0; i < lWidth; i++) {
                const lpSrc = j * lWidth + i;
                if (dataInit[lpSrc * 4] === 0) {
                    // 在第一条直线上
                    const iDist1 = Math.floor(Math.abs(i * Math.cos(maxValue1.angleNumber * 2 * Math.PI / 180) +
                        j * Math.sin(maxValue1.angleNumber * 2 * Math.PI / 180)));
                    if (iDist1 === maxValue1.dist) {
                        for (let k = 0; k < 3; k++) {
                            data[lpSrc * 4 + k] = 0;
                        }
                    }
                    // 在第二条直线上
                    const iDist2 = Math.floor(Math.abs(i * Math.cos(maxValue2.angleNumber * 2 * Math.PI / 180) +
                        j * Math.sin(maxValue2.angleNumber * 2 * Math.PI / 180)));
                    if (iDist2 === maxValue2.dist) {
                        for (let k = 0; k < 3; k++) {
                            data[lpSrc * 4 + k] = 0;
                        }
                    }
                }
            }
        }
    }
}
export { houghDIB };

