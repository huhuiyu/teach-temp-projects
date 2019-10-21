(function() {
  console.log('in login.js====>');

  let txtUsername = document.getElementById('txtUsername');
  let txtPassword = document.getElementById('txtPassword');
  let btnOk = document.getElementById('btnOk');
  let btnReset = document.getElementById('btnReset');

  //重置表单
  function resetForm() {
    txtUsername.value = '';
    txtPassword.value = '';
    txtUsername.focus();
  }
  resetForm();
  btnReset.addEventListener('click', resetForm);
  //登陆admin,admin-pwd
  btnOk.addEventListener('click', function() {
    myapi.post(
      '/util/adminLogin',
      {
        'tbAdmin.username': txtUsername.value,
        'tbAdmin.password': huhuiyu.MD5Encoder.md5(txtPassword.value)
      },
      function(data) {
        alert(data.message);
      }
    );
  });
})();
