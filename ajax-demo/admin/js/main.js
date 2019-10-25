(function() {
  console.log('in admin/main.js===>');

  //获取登陆用户的信息
  function getUserInfo() {
    dialog.showWait('获取用户信息中，请稍候...');
    myapi.post('/util/getAdminLoginInfo', {}, function(data) {
      dialog.hideWait();
      console.log(data);
      if (data.datas && data.datas.loginInfo) {
        //登陆成功的情况
        let admin = data.datas.loginInfo;
        //显示用户信息
        $('#spAdmin').html(admin.nickname + '(' + admin.username + ')');
      } else {
        //没有登陆的情况
        dialog.showAlert('权限', '需要登陆', function() {
          location.href = 'login.html';
        });
      }
    });
  }

  getUserInfo();

  //安全退出
  $('#spLogout').click(function() {
    dialog.showWait('安全退出中，请稍候...');
    myapi.post('/util/adminLogout', {}, function(data) {
      console.log(data);
      location.href = 'login.html';
    });
  });
})();
