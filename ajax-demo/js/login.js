(function() {
  console.log('in login.js====>');

  let txtUser = document.getElementById('txtUser');
  let txtPwd = document.getElementById('txtPwd');
  let btnLogin = document.getElementById('btnLogin');
  let btnReset = document.getElementById('btnReset');
  let divInfo = document.getElementById('divInfo');

  function resetInfo() {
    txtUser.value = '';
    txtPwd.value = '';
    txtUser.focus();
  }

  btnReset.addEventListener('click', function() {
    resetInfo();
  });

  resetInfo();

  const server = 'http://huhuiyu.cn/ajax-demo';
  const tokenKey = 'server.token';

  btnLogin.addEventListener('click', function() {
    //提交的用户信息格式要和服务器端一致
    let userinfo = {
      'tbUser.username': txtUser.value,
      'tbUser.password': txtPwd.value
    };

    axios
      .post(server + '/user/login', huhuiyu.JsonUtil.jsonToQs(userinfo), {
        headers: { token: localStorage.getItem(tokenKey) }
      })
      .then(function(resp) {
        let data = resp.data;
        console.log(data);
        //保存token
        localStorage.setItem(tokenKey, data.token);
        //通过success判断登陆是否成功
        if (!data.success) {
          //登陆失败会通过message提示失败的原因
          divInfo.innerHTML = data.message;
        } else {
          location.href = 'main.html';
        }
      });
  });
})();
