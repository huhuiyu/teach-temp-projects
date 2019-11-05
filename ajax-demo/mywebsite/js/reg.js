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
})();
