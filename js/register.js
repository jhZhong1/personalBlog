// 注册
const form = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const phone = document.getElementById('phone');
const birthDate = document.getElementById('birth-date');
const genderRadios = document.getElementsByName('gender');

form.addEventListener('submit', function (event) {
    if (username.value === '') {
        alert('请输入用户名');
        event.preventDefault();
        return;
    }

    if (password.value === '') {
        alert('请输入密码');
        event.preventDefault();
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('两次输入的密码不一致');
        event.preventDefault();
        return;
    }
    if (phone.value==='') {
        alert('电话号码不为空！')
        event.preventDefault();
        return;
    }
    if (email.value === '') {
        alert('邮箱不为空！')
        event.preventDefault();
        return;
    }

    if (birthDate.value === '') {
        alert('请选择出生日期');
        event.preventDefault();
        return;
    }

    let genderSelect = false;
    for(let i=0; i<genderRadios.length;i++){
        if (genderRadios[i].checked) {
            genderSelect=true;
            break;
        }
    }
    if (!genderSelect) {
        alert('请选择性别');
        event.preventDefault();
        return;
    }
    alert('注册成功！');
    
})

// 用户名正则验证
username.addEventListener('blur', function () {
    const username = this.value;
    const regex = /^(?![0-9])[a-zA-Z0-9]+$/;
    if (!regex.test(username)) {
        alert('用户名格式不正确,确保第一位不是数字或特殊符号');
        this.value = '';
    }
});
// 密码正则验证
password.addEventListener('blur', function () {
    const password = this.value;
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*/]).{8,}$/;

    if (password.length < 8) {
        alert('输入密码不少于8位')
    } else if (!regex.test(password)) {
        alert('密码格式不正确，确保包含数字、字母和特殊符合');
        this.value = '';
    }
});

//手机正则验证
phone.addEventListener('blur',function(){
    const phone = this.value;
    const regex = /^1[3456789]\d{9}$/;

    if(!regex.test(phone)){
        alert('电话号码格式错误');
        this.value='';
    }
});
//邮箱正则验证
email.addEventListener('blur', function () {
    const email = this.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert('邮箱格式不正确');
        this.value = '';
    }
});