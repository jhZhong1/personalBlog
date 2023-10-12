// 获取所有照片列表项
const photoItems = document.querySelectorAll('.photoItem');

// 获取模态框元素
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

// 点击照片时打开模态框并显示大图
photoItems.forEach(photoItem => {
    photoItem.addEventListener('click', () => {
        const imgSrc = photoItem.querySelector('img').src;
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 隐藏滚动条
    });
});

// 关闭模态框函数
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复滚动条
}

// 点击模态框关闭按钮时关闭模态框
modalClose.addEventListener('click', () => {
    closeModal();
});

// 点击模态框外部区域时关闭模态框
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});