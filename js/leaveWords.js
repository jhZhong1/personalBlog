const messageForm = document.getElementById('messageForm');
const messageList = document.getElementById('messageList');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value;
    const email = emailInput.value;
    const messageContent = messageInput.value;

    //记录提交时间
    const currentTime = new Date();
    const currentTimeString1 = currentTime.toLocaleDateString();
    const currentTimeString2 = currentTime.toLocaleTimeString();

    const message = document.createElement('div');
    message.classList.add('messageItem');

    const messageInfo = document.createElement('p');
    messageInfo.classList.add('messageInfo');

    messageInfo.innerHTML = `
        <strong>${name}</strong>(${email})
        <span class="messageTime">${currentTimeString1} ${currentTimeString2} </span>
    `;

    const messageText = document.createElement('p');
    messageText.classList.add('messageText');
    messageText.textContent = messageContent;

    message.appendChild(messageInfo);
    message.appendChild(messageText);

    messageList.appendChild(message);

    //清空表单
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

// const content = document.querySelector('.content');
// const leaveWorlds = document.querySelector('.leaveWorlds');

// function setParentHeight(){
//     const leaveWorldsHeight = leaveWorlds.offsetHeight;
//     content.style.height=`${leaveWorldsHeight}px`;
// }
// // 页面加载后调用一次
// window.addEventListener('load', setParentHeight);

// // 监听窗口大小变化事件
// window.addEventListener('resize', setParentHeight);