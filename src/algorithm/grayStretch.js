/**
 * 该函数用来对图像进行灰度拉伸
 * 该函数的运算结果是将原图在x1和x2之间的灰度拉伸到y1和y2之间
 * @param data
 * @param bx1   灰度拉伸第一个点的X坐标
 * @param by1   灰度拉伸第一个点的Y坐标
 * @param bx2   灰度拉伸第二个点的X坐标
 * @param by2   灰度拉伸第二个点的Y坐标
 */
function grayStretch(data, bx1, by1, bx2, by2) {
    // 灰度映射表
    const bMap = new Array(256);
    for (let i = 0; i < bx1; i++) {
        // 防止分母为0
        if (bx1 > 0) {
            // 线性变换
            bMap[i] = Math.round(by1 * i / bx1);
        } else {
            bMap[i] = 0;
        }
    }
    for (let i = bx1; i < bx2; i++) {
        // 判断bx1是否等于bx2(防止分母为0)
        if (bx2 !== bx1) {
            bMap[i] = Math.round((by2 - by1) * (i - bx1) / (bx2 - bx1));
        } else {
            // 直接赋值为by1
            bMap[i] = by1;
        }
    }
    for (let i = bx2; i < 256; i++) {
        // 判断bx2是否等于256(防止分母为0)
        if (bx2 !== 255) {
            // 线性变换
            bMap[i] = by2 + Math.round((255 - by2) * (i - bx2) / (255 - bx2));
        } else {
            // 直接赋值为255
            bMap[i] = 255;
        }
    }
    for (let i = 0, len = data.length; i < len; i += 4) {
        data[i] = bMap[data[i]];
        data[i + 1] = bMap[data[i + 1]];
        data[i + 2] = bMap[data[i + 2]];
    }
}
 export { grayStretch };
