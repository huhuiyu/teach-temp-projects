(function() {
  console.log('in login.js====>');

  let txtUsername = document.getElementById('txtUsername');
  let txtPassword = document.getElementById('txtPassword');
  let btnLogin = document.getElementById('btnLogin');
  let btnReset = document.getElementById('btnReset');
  let btnReg = document.getElementById('btnReg');
  let divInfo = document.getElementById('divInfo');

  /* 重置 */
  function resetForm() {
    txtUsername.value = '';
    txtPassword.value = '';
    divInfo.innerHTML = '';
    txtUsername.focus();
  }

  btnReset.addEventListener('click', resetForm);
  resetForm();

  /* 登录 */
  btnLogin.addEventListener('click', function() {
    let user = {
      username: txtUsername.value,
      password: txtPassword.value
    };
    if (!user.username) {
      divInfo.innerHTML = '用户名必须填写';
      txtUsername.focus();
      return;
    }
    if (!user.password) {
      divInfo.innerHTML = '密码必须填写';
      txtPassword.focus();
      return;
    }
    divInfo.innerHTML = '';
    dialog.showWait({ info: '登录中，请稍侯。。。' });
    myapi.post('/user/login', { tbUser: user }, function(data) {
      dialog.hideWait();
      if (data.success) {
        location.href = 'main.html';
      } else {
        divInfo.innerHTML = data.message;
        txtUsername.focus();
      }
    });
  });

  //注册跳转
  btnReg.addEventListener('click', function() {
    location.href = 'reg.html';
    //window.open('reg.html');
  });
})();
