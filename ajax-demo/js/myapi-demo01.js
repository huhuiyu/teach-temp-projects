(function() {
  //无法访问myapi.js中let声明的localval
  //console.log('myapi-demo01:localval===>', localval);

  //可以访问全局作用域的对象
  console.log(myapi);
  console.log(myapi.info);

  //通过post方法调用服务器数据
  //{ echo: Math.random() }<===>echo=Math.random()
  myapi.post('/', { echo: Math.random() }, function(data) {
    console.log(data);
  });

  //登陆测试
  let txtUser = document.getElementById('txtUser');
  let txtPwd = document.getElementById('txtPwd');
  let btnLogin = document.getElementById('btnLogin');
  let spInfo = document.getElementById('spInfo');

  btnLogin.addEventListener('click', function() {
    myapi.post(
      '/user/login',
      {
        'tbUser.username': txtUser.value,
        'tbUser.password': txtPwd.value
      },
      function(data) {
        if (data.success) {
          spInfo.innerHTML = '登陆成功';
        } else {
          spInfo.innerHTML = data.message;
        }
      }
    );
  });
})();
