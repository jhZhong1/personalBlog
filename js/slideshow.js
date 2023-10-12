// 轮播图
// 获取元素
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicator = document.querySelector('.indicator');

let currentSlideIndex = 0;
let intervalId = null;

// 初始化
slides[currentSlideIndex].style.display = 'block';
createIndicators();

// 鼠标经过轮播图，停止自动播放，显示左右按钮
slideshow.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
    showButtons();
});

// 鼠标离开轮播图，开始自动播放，隐藏左右按钮
slideshow.addEventListener('mouseleave', function () {
    startAutoPlay();
    hideButtons();
});

// 点击左右按钮切换图片
prevBtn.addEventListener('click', function () {
    showPrevSlide();
});

nextBtn.addEventListener('click', function () {
    showNextSlide();
});

// 点击小圆圈切换图片
indicator.addEventListener('click', function (e) {
    if (e.target.classList.contains('indicator-item')) {
        const index = Array.from(indicator.children).indexOf(e.target);
        showSlide(index);
    }
});

startAutoPlay();

function startAutoPlay() {
    intervalId = setInterval(showNextSlide, 1500);
}

function showButtons() {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
}

function hideButtons() {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

function createIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const indicatorItem = document.createElement('div');
        indicatorItem.classList.add('indicator-item');
        indicatorItem.addEventListener('click', function () {
            showSlide(i);
        });
        indicator.appendChild(indicatorItem);
    }
    indicator.children[currentSlideIndex].classList.add('active');
}

function showSlide(index) {
    // 隐藏当前图片和指示器状态
    slides[currentSlideIndex].style.display = 'none';
    indicator.children[currentSlideIndex].classList.remove('active');

    // 显示指定索引的图片和更新指示器状态
    slides[index].style.display = 'block';
    indicator.children[index].classList.add('active');

    // 更新当前图片索引
    currentSlideIndex = index;
}

function showNextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function showPrevSlide() {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}