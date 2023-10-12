    // 撒花特效
    const flowerBox = document.querySelector('.headPortrait');

    let timer = null;

    flowerBox.addEventListener('mouseover', function () {
        timer = setInterval(function () {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.left = Math.random() * (flowerBox.offsetWidth - 10) + 'px';
            flowerBox.appendChild(flower);

            setTimeout(function () {
                flower.remove();
            }, 1000);
        }, 100);
        });

    flowerBox.addEventListener('mouseout', function () {
        clearInterval(timer);
        });

