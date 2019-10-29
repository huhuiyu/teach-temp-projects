(function() {
  console.log('in myapi.js===>');
  //公共的自定义js接口
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
      })
      .catch(function(error) {
        console.error(error);
        cb({ code: 500, message: '地址或者网络错误' });
      });
  };

  myapi.get = function(url, cb) {
    axios
      .get(myapi.server + url, {
        headers: {
          token: localStorage.getItem(myapi.tokenKey)
        }
      })
      .then(function(resp) {
        let data = resp.data;
        localStorage.setItem(myapi.tokenKey, data.token);
        cb(data);
      })
      .catch(function(error) {
        console.error(error);
        cb({ code: 500, message: '地址或者网络错误' });
      });
  };

  //提升myapi变量为全局可见（只需要附加到window对象即可）
  window.myapi = myapi;
})();
