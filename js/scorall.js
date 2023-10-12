// 滚动固定
const fixedDiv = document.querySelector('.slider');
let isHidden = true; // 初始状态为隐藏

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // 获取垂直滚动距离
    const threshold = 300; // 设置滚动的阈值

    if (scrollY >= threshold && isHidden) {
        fixedDiv.style.display = 'block';
        isHidden = false; // 显示盒子，并更新状态为显示
    } else if (scrollY < threshold && !isHidden) {
        fixedDiv.style.display = 'none';
        isHidden = true; // 隐藏盒子，并更新状态为隐藏
    }
});