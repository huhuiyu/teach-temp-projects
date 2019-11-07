(function() {
  console.log('in main.js===>');

  let spUser = document.getElementById('spUser');
  let btnLogout = document.getElementById('btnLogout');

  //获取用户信息
  function getUserInfo() {
    dialog.showWait({ info: '获取用户信息中，请稍候。。。' });
    myapi.post('/user/getUserLoginInfo', {}, function(data) {
      dialog.hideWait();
      console.log(data);
      if (data.datas && data.datas.loginInfo) {
        //已经登陆的情况
        let user = data.datas.loginInfo;
        spUser.innerHTML = user.nickname + '(' + user.username + ')';
      } else {
        dialog.showAlert({
          info: '请登录',
          hide: function() {
            location.href = 'login.html';
          }
        });
      }
    });
  }

  getUserInfo();

  //安全退出
  btnLogout.addEventListener('click', function() {
    dialog.showWait({ info: '安全退出中' });
    myapi.post('/user/userLogout', {}, function(data) {
      console.log(data);
      dialog.hideWait();
      location = 'login.html';
    });
  });

  //定位左边菜单的高度
  let divBottom = document.getElementById('divBottom');
  console.log('divBottom的上端坐标：', divBottom.offsetTop);

  let leftDiv = document.querySelector('.main-div .left');
  console.log('left菜单的上端坐标：', leftDiv.offsetTop);

  leftDiv.style.height=(divBottom.offsetTop
    -leftDiv.offsetTop)+'px';

})();
