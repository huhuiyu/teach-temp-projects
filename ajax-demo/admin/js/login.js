(function() {
  console.log('in admin-login.js====>');

  let txtUsername = document.getElementById('txtUsername');
  let txtPassword = document.getElementById('txtPassword');
  let btnOk = document.getElementById('btnOk');
  let btnReset = document.getElementById('btnReset');
  let btnClose = document.getElementById('btnClose');
  //记录服务器的应答结果
  let serverResult;

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
    $('#waitDialog .modal-body').html('登陆中，请稍后');
    $('#waitDialog').modal('show');

    myapi.post(
      '/util/adminLogin',
      {
        'tbAdmin.username': txtUsername.value,
        'tbAdmin.password': huhuiyu.MD5Encoder.md5(txtPassword.value)
      },
      function(data) {
        //更新应答结果
        serverResult = data;
        $('#waitDialog').modal('hide');
        // alert(data.message);
        $('#alertDialog .modal-body').html(data.message);
        $('#alertDialog').modal('show');
      }
    );
  });

  btnClose.addEventListener('click', function() {
    $('#alertDialog').modal('hide');
  });

  $('#alertDialog').on('hidden.bs.modal', function() {
    if (serverResult.success) {
      location.href = 'main.html';
    }
  });
})();
