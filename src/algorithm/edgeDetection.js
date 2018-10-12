import { template } from './template';
/**
 * 说明
 * 该函数用Robert边缘检测算子对图像进行边缘检测运算。
 * 要求目标图像为灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 * Roberts边缘检测算子是一种利用局部差分算子寻找边缘的算子
 * 平方根运算使该处理类似于在人类视觉系统中发生的过程
 */
function robertDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
    }
    for (let j = 1; j < lHeight - 1; j++) {
        for (let i = 0; i < lWidth - 1; i++) {
            // 由于使用2*2对模版，为防止越界，所以不处理最下边和最右边对两列像素
            const lpSrc = j * lWidth + i;
            const pixel = [lpSrc, lpSrc + 1, lpSrc - lWidth, lpSrc - lWidth + 1];
            for (let k = 0; k < 3; k++) {
                data[lpSrc * 4 + k] = Math.sqrt(Math.pow(dataInit[pixel[0] * 4 + k] - dataInit[pixel[3] * 4 + k], 2) +
                    Math.pow(dataInit[pixel[1] * 4 + k] - dataInit[pixel[2] * 4 + k], 2));
            }
        }
    }
}

/**
 * 说明
 * 该函数用Sobel边缘检测算子对图像进行边缘检测运算。
 * 要求目标图像为灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function sobelDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInitOne = [];
    const dataInitTwo = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitTwo[i] = data[i];
    }
    // 第一个模版参数
    const sobelTemOneObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: [-1, -2, -1, 0, 0, 0, 1, 2, 1]
    };
    // 第二个模版参数
    const sobelTemTwoObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: [-1, 0, 1, -2, 0, 2, -1, 0, 1]
    };
    template(dataInitOne, lWidth, lHeight, sobelTemOneObj);
    template(dataInitTwo, lWidth, lHeight, sobelTemTwoObj);
    for (let i = 0, len = data.length; i < len; i++) {
        data[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
}

/**
 * 说明
 * 该函数用Prewitt边缘检测算子对图像进行边缘检测运算。
 * 要求目标图像为灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function prewittDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInitOne = [];
    const dataInitTwo = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitTwo[i] = data[i];
    }
    // 第一个模版参数
    const sobelTemOneObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: [-1, -1, -1, 0, 0, 0, 1, 1, 1]
    };
    // 第二个模版参数
    const sobelTemTwoObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: [1, 0, -1, 1, 0, -1, 1, 0, -1]
    };
    template(dataInitOne, lWidth, lHeight, sobelTemOneObj);
    template(dataInitTwo, lWidth, lHeight, sobelTemTwoObj);
    for (let i = 0, len = data.length; i < len; i++) {
        data[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
}

/**
 * 说明
 * 该函数用kirschDIB边缘检测算子对图像进行边缘检测运算。
 * 要求目标图像为灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function kirschDIB(data, lWidth, lHeight) {
    const dataInitOne = [];
    const dataInitTwo = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitTwo[i] = data[i];
    }
    // 第一个模版参数
    const temObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: []
    };
    // 第一个模版参数
    temObj.fpArray = [5, 5, 5, -3, 0, -3, -3, -3, -3];
    template(dataInitOne, lWidth, lHeight, temObj);
    // 第二个模版参数
    temObj.fpArray = [-3, 5, 5, -3, 0, 5, -3, -3, -3];
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第三个模版参数
    temObj.fpArray = [-3, -3, 5, -3, 0, 5, -3, -3, 5];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第四个模版参数
    temObj.fpArray = [-3, -3, -3, -3, 0, 5, -3, 5, 5];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第五个模版参数
    temObj.fpArray = [-3, -3, -3, -3, 0, -3, 5, 5, 5];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第六个模版参数
    temObj.fpArray = [-3, -3, -3, 5, 0, -3, 5, 5, -3];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第七个模版参数
    temObj.fpArray = [5, -3, -3, 5, 0, -3, 5, -3, -3];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitOne[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
    // 第八个模版参数
    temObj.fpArray = [5, 5, -3, 5, 0, -3, -3, -3, -3];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInitTwo[i] = data[i];
    }
    template(dataInitTwo, lWidth, lHeight, temObj);
    for (let i = 0, len = data.length; i < len; i++) {
        data[i] = dataInitOne[i] > dataInitTwo[i] ? dataInitOne[i] : dataInitTwo[i];
    }
}

/**
 * 说明
 * 该函数用高斯拉普拉斯边缘检测算子对图像进行边缘检测运算。
 * 要求目标图像为灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function GaussDIB(data, lWidth, lHeight) {
    // const temObj = {
    //     iTempW: 5,
    //     iTempH: 5,
    //     fCoef: 1,
    //     iTempMX: 3,
    //     iTempMY: 3,
    //     fpArray: [
    //         -2, -4, -4, -4, -2,
    //         -4, 0, 8, 0, -4,
    //         -4, 8, 24, 8, -4,
    //         -4, 0, 8, 0, -4,
    //         -2, -4, -4, -4, -2
    //     ]
    // };
    const temObj = {
        iTempW: 3,
        iTempH: 3,
        fCoef: 1,
        iTempMX: 1,
        iTempMY: 1,
        fpArray: [-1, -1, -1, -1, 8, -1, -1, -1, -1]
    };
    template(data, lWidth, lHeight, temObj);
}

/**
 * 说明
 * 该函数用于对图像进行轮廓提取运算
 * 要求目标图像为只有0和255两个灰度值对灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function contourDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
    }
    for (let j = 1; j < lHeight - 1; j++) {
        for (let i = 1; i < lWidth - 1; i++) {
            const lpSrc = j * lWidth + i;
            const pixel = dataInit[lpSrc * 4];
            if (pixel === 0) {
                const surroundArr = [lpSrc + lWidth - 1, lpSrc + lWidth,
                    lpSrc + lWidth + 1, lpSrc - 1, lpSrc + 1,
                    lpSrc - lWidth - 1, lpSrc - lWidth, lpSrc - lWidth + 1];
                let value = 0;
                for (let m = 0, len = surroundArr.length; m < len; m++) {
                    value += dataInit[surroundArr[m] * 4];
                }
                // 如果相邻对八个点都是黑点
                if (value === 0) {
                    for (let k = 0; k < 3; k++) {
                        data[lpSrc * 4 + k] = 255;
                    }
                }
            }
        }
    }
}

/**
 * 说明
 * 该函数用于对图像进行轮廓跟踪运算
 * 要求目标图像为只有0和255两个灰度值对灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function traceDIB(data, lWidth, lHeight) {
    // 保存原始数据
    const dataInit = [];
    for (let i = 0, len = data.length; i < len; i++) {
        dataInit[i] = data[i];
        data[i] = 255;
    }
    const direction = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];
    const length = direction.length;
    // 先找到最左上方对边界点
    let bFindStartPoint = false;
    // 是否扫描到一个边界点
    let bFindPoint = false;
    const startPoint = {
        width: 0,
        height: 0
    };
    const currentPoint = {
        width: 0,
        height: 0
    };
    for (let j = 0; j < lHeight && !bFindStartPoint; j++) {
        for (let i = 0; i < lWidth && !bFindStartPoint; i++) {
            const lpSrc = j * lWidth + i;
            const pixel = dataInit[lpSrc * 4];
            if (pixel === 0) {
                bFindStartPoint = true;
                startPoint.height = j;
                startPoint.width = i;
                // 寻找第一个点
                for (let k = 0; k < 3; k++) {
                    data[lpSrc * 4 + k] = 0;
                }
            }
        }
    }
    let beginDirect = 0;
    bFindStartPoint = false;
    // 从初始点开始扫描
    currentPoint.height = startPoint.height;
    currentPoint.width = startPoint.width;
    while (!bFindStartPoint) {
        bFindPoint = false;
        while (!bFindPoint) {
            // 沿扫描方向查看一个像素
            const lpSrc = (currentPoint.height + direction[beginDirect][1]) * lWidth +
                (currentPoint.width + direction[beginDirect][0]);
            const pixel = dataInit[lpSrc * 4];
            if (pixel === 0) {
                bFindPoint = true;
                currentPoint.height = currentPoint.height + direction[beginDirect][1];
                currentPoint.width = currentPoint.width + direction[beginDirect][0];
                if (currentPoint.height === startPoint.height &&
                    currentPoint.width === startPoint.width) {
                    bFindStartPoint = true;
                }
                for (let k = 0; k < 3; k++) {
                    data[lpSrc * 4 + k] = 0;
                }
                // 扫描点方向逆时针旋转两格
                beginDirect = (beginDirect + length - 2) % length;
            } else {
                // 扫描点方向顺时针旋转一格
                beginDirect = (beginDirect + 1) % length;
            }
        }
    }
}

/**
 * 说明
 * 该函数用于对图像进行种子填充运算
 * 要求目标图像为只有0和255两个灰度值对灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function fillDIB(data, lWidth, lHeight) {
    const seeds = [{
        height: Math.floor(lHeight / 2),
        width: Math.floor(lWidth / 2)
    }];
    while (seeds.length) {
        // 取出种子
        const seed = seeds.pop();
        const iCurrentPixelx = seed.width;
        const iCurrentPixely = seed.height;
        const lpSrc = iCurrentPixely * lWidth + iCurrentPixelx;
        // 将当前点涂黑
        for (let k = 0; k < 3; k++) {
            data[lpSrc * 4 + k] = 0;
        }
        // 判断左面的点，如果为白，则压入堆栈,注意防止越界
        if (iCurrentPixelx > 0) {
            const lpSrc = iCurrentPixely * lWidth + iCurrentPixelx - 1;
            const pixel = data[lpSrc * 4];
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely,
                    width: iCurrentPixelx - 1
                });
            }
        }
        // 判断上面的点，如果为白，则压入堆栈,注意防止越界
        if (iCurrentPixely < lHeight - 1) {
            const lpSrc = (iCurrentPixely + 1) * lWidth + iCurrentPixelx;
            const pixel = data[lpSrc * 4];
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely + 1,
                    width: iCurrentPixelx
                });
            }
        }
        // 判断右面的点，如果为白，则压入堆栈,注意防止越界
        if (iCurrentPixelx < lWidth - 1) {
            const lpSrc = iCurrentPixely * lWidth + iCurrentPixelx + 1;
            const pixel = data[lpSrc * 4];
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely,
                    width: iCurrentPixelx + 1
                });
            }
        }
        // 判断下面的点，如果为白，则压入堆栈,注意防止越界
        if (iCurrentPixely > 0) {
            const lpSrc = (iCurrentPixely - 1) * lWidth + iCurrentPixelx;
            const pixel = data[lpSrc * 4];
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely - 1,
                    width: iCurrentPixelx
                });
            }
        }
    }
}

/**
 * 说明
 * 该函数用于对图像进行种子填充运算
 * 要求目标图像为只有0和255两个灰度图像
 * @param data
 * @param lWidth
 * @param lHeight
 */
function fill2DIB(data, lWidth, lHeight) {
    const seeds = [{
        height: Math.floor(lHeight / 2),
        width: Math.floor(lWidth / 2)
    }];
    // 左右边界像素位置
    let xl = 0;
    let xr = 0;
    while (seeds.length) {
        // 取出种子
        const seed = seeds.pop();
        let iCurrentPixelx = seed.width;
        let iCurrentPixely = seed.height;
        let bFillLeft = true;
        let bFillRight = true;
        // 填充种子所在的行
        // 保存种子像素的位置
        const iBufferPixelx = iCurrentPixelx;
        const iBufferPixely = iCurrentPixely;
        // 先向左填充
        while (bFillLeft) {
            const lpSrc = lWidth * iCurrentPixely + iCurrentPixelx;
            const pixel = data[lpSrc * 4];
            // 遇到边界
            if (pixel === 0) {
                bFillLeft = false;
                xl = iCurrentPixelx + 1;
            } else {
                for (let k = 0; k < 3; k++) {
                    data[lpSrc * 4 + k] = 0;
                }
                iCurrentPixelx--;
                // 防止越界
                if (iCurrentPixelx < 0) {
                    bFillLeft = false;
                    iCurrentPixelx = 0;
                    xl = 0;
                }
            }
        }
        // 再向右填充
        // 取回种子像素的位置
        iCurrentPixelx = iBufferPixelx + 1;
        if (iCurrentPixelx > lWidth) {
            bFillRight = false;
            iCurrentPixelx = lWidth;
            xr = lWidth;
        }
        iCurrentPixely = iBufferPixely;
        while (bFillRight) {
            const lpSrc = lWidth * iCurrentPixely + iCurrentPixelx;
            const pixel = data[lpSrc * 4];
            // 遇到边界
            if (pixel === 0) {
                bFillRight = false;
                xr = iCurrentPixelx - 1;
            } else {
                for (let k = 0; k < 3; k++) {
                    data[lpSrc * 4 + k] = 0;
                }
                iCurrentPixelx++;
                // 防止越界
                if (iCurrentPixelx > lWidth) {
                    bFillRight = false;
                    iCurrentPixelx = lWidth;
                    xr = lWidth;
                }
            }
        }
        // 上下两条扫描线是否全为边界像素或已填充过
        // 先看上面的扫描线
        iCurrentPixely--;
        if (iCurrentPixely < 0) {
            iCurrentPixely = 0;
        }
        for (let i = xr; i >= xl; i--) {
            const lpSrc = lWidth * iCurrentPixely + i;
            const pixel = data[lpSrc * 4];
            // 有未填充的像素，将新的种子压入堆栈
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely,
                    width: i
                });
                break;
            }
        }
        // 再看看下面的扫描线
        iCurrentPixely += 2;
        if (iCurrentPixely > lHeight) {
            iCurrentPixely = lHeight;
        }
        for (let i = xr; i >= xl; i--) {
            const lpSrc = lWidth * iCurrentPixely + i;
            const pixel = data[lpSrc * 4];
            // 有未填充的像素，将新的种子压入堆栈
            if (pixel === 255) {
                seeds.push({
                    height: iCurrentPixely,
                    width: i
                });
                break;
            }
        }
    }
}
export { robertDIB, sobelDIB, prewittDIB, kirschDIB, GaussDIB, contourDIB, traceDIB, fillDIB, fill2DIB };
