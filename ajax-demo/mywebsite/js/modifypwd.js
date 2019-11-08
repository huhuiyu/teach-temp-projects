(function() {
  console.log('in modifypwd.js===>');
  let txtPwd = document.getElementById('txtPwd');
  let txtPwd2 = document.getElementById('txtPwd2');
  let btnSave = document.getElementById('btnSave');
  let btnReset = document.getElementById('btnReset');

  function resetForm() {
    txtPwd.value = '';
    txtPwd2.value = '';
    txtPwd.focus();
  }

  resetForm();
  btnReset.addEventListener('click', resetForm);

  btnSave.addEventListener('click', function() {
    if (!txtPwd.value) {
      dialog.showAlert({ info: '密码必须填写' });
      txtPwd.focus();
      return;
    }
    if (txtPwd.value != txtPwd2.value) {
      dialog.showAlert({ info: '密码不一致' });
      txtPwd2.focus();
      return;
    }
    dialog.showWait({ info: '修改密码中，请稍候。。。' });
    myapi.post(
      '/authuser/updatePassword',
      {
        'tbUser.password': txtPwd.value
      },
      function(data) {
        dialog.hideWait(function() {
          dialog.showAlert({ info: data.message });
        });
      }
    );
  });
})();
