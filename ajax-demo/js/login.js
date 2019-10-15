(function() {
  console.log('in login.js====>');

  let txtUser = document.getElementById('txtUser');
  let txtPwd = document.getElementById('txtPwd');
  let btnLogin = document.getElementById('btnLogin');
  let btnReset = document.getElementById('btnReset');

  function resetInfo() {
    txtUser.value = '';
    txtPwd.value = '';
    txtUser.focus();
  }

  btnReset.addEventListener('click', function() {
    resetInfo();
  });

  resetInfo();

})();
