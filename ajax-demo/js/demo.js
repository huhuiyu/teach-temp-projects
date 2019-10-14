(function() {
  console.log('in demo.js====>');
  //md5加密部分=============================
  let txtMd5 = document.getElementById('txtMd5');
  let btnMd5 = document.getElementById('btnMd5');
  let spMd5 = document.getElementById('spMd5');

  btnMd5.addEventListener('click', function() {
    let md5 = txtMd5.value;
    if (!md5) {
      spMd5.innerText = '请输入要加密的字符';
      spMd5.classList.add('text-danger');
      return;
    }
    spMd5.classList.remove('text-danger');
    spMd5.innerText = huhuiyu.MD5Encoder.md5(md5);
  });

  //json转换成查询字符串====================
  let btnJsonToQs = document.getElementById('btnJsonToQs');
  let preJsonToQs = document.getElementById('preJsonToQs');

  let json01 = { 'user.username': '苏文希'
  , 'user.password': 'abc-123' };
  let json02 ={user:
    {username:'皮皮鹿',password:'sb123'}};
  let jsoncount=0;
  
  btnJsonToQs.addEventListener('click',function(){
    //?:是三元表达式,?前面是逻辑表达式
    //如果逻辑表达式为true执行:前面的代码，否则是:后面的
    let jsoninfo=(jsoncount++%2==0)?json01:json02;
    preJsonToQs.innerText=
      huhuiyu.JsonUtil.jsonToQs(jsoninfo);
    //jsonToQs是将js中常见的json数据转换成
    //http传输的查询字符串格式
    //例如{a:'abc',b:123}这样的json在js中很容易处理
    //但是http传输需要时a=abc&b=123这样的
    //这个工具会转换多级json字符串
    //例如{user:{name:'张三',password:'abc'}}
    //会转换成标准查询字符串
    //user.name=张三&user.password=abc

    //尝试调用用户登陆功能
    //尝试调用管理员登陆功能
    //注意事项！都需要通过headers传递token
    //管理员的密码需要md5加密
    //已知用户：user,密码user-pwd
    //已知管理员：admin,密码admin-pwd


  });



})();
