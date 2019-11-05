(function() {
  console.log('in reg.js===>');

  let btnReg = document.getElementById('btnReg');
  let btnReset = document.getElementById('btnReset');
  let btnLogin = document.getElementById('btnLogin');
  let divInfo = document.getElementById('divInfo');
  let txtUsername = document.getElementById('txtUsername');
  let txtPassword = document.getElementById('txtPassword');
  let txtPassword2 = document.getElementById('txtPassword2');
  let txtNickname = document.getElementById('txtNickname');

  //返回登陆
  btnLogin.addEventListener('click', function() {
    location.href = 'login.html';
  });

  //重填
  function resetForm() {
    txtUsername.value = '';
    txtPassword.value = '';
    txtPassword2.value = '';
    txtNickname.value = '';
    divInfo.innerHTML = '';
    txtUsername.focus();
  }

  btnReset.addEventListener('click', resetForm);

  resetForm();

  //用户注册
  btnReg.addEventListener('click', function() {
    let tbUser = {
      username: txtUsername.value,
      password: txtPassword.value,
      nickname: txtNickname.value
    };
    divInfo.innerHTML = '';
    if (!tbUser.username) {
      divInfo.innerHTML = '用户名必须填写';
      txtUsername.focus();
      return;
    }
    if (!tbUser.password) {
      divInfo.innerHTML = '密码必须填写';
      txtPassword.focus();
      return;
    }
    if (tbUser.password != txtPassword2.value) {
      divInfo.innerHTML = '密码不一致！';
      txtPassword.value = '';
      txtPassword2.value = '';
      txtPassword.focus();
      return;
    }
    dialog.showWait('用户注册中，请稍候...');
    myapi.post(
      '/user/reg',
      {
        tbUser: tbUser
      },
      function(data) {
        dialog.hideWait(function() {
          if (data.success) {
            //注册成功的情况
            resetForm();
            dialog.showAlert({ info: '注册成功！' });
          } else {
            //失败的情况
            divInfo.innerHTML = data.message;
          }
        });
      }
    );
  });
})();
