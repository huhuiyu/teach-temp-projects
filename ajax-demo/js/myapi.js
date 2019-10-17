(function() {
  //公共的自定义js接口
  //let声明的局部变量无法在声明范围外使用
  let localval = '离开范围无法访问';
  console.log('myapi:localval===>', localval);

  let myapi = {};
  myapi.info = '自定义的api接口';

  //定义公共的接口方法
  myapi.server = 'http://huhuiyu.cn/ajax-demo';
  myapi.tokenKey = 'server.token';

  //post请求数据的通用方法
  //url是post的地址，param是查询参数
  //cb是回调函数，就是处理应答结果的function
  myapi.post = function(url, param, cb) {
    //转换json参数为查询参数，方便调用者直接使用json
    param = huhuiyu.JsonUtil.jsonToQs(param);
  
    axios
      .post(myapi.server + url, param, {
        headers: {
          token: localStorage.getItem(myapi.tokenKey)
        }
      })
      .then(function(resp) {
        let data = resp.data;
        localStorage.setItem(myapi.tokenKey, data.token);
        cb(data);
      });
  };

  //提升myapi变量为全局可见（只需要附加到window对象即可）
  window.myapi = myapi;
})();