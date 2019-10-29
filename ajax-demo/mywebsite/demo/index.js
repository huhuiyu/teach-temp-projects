(function() {
  console.log('in demo/index.js===>');
  //echo演示部分===========================
  //标准js风格
  let txtEcho = document.getElementById('txtEcho');
  let btnEcho = document.getElementById('btnEcho');
  let preEcho = document.getElementById('preEcho');

  btnEcho.addEventListener('click', function() {
    preEcho.innerHTML = '获取数据中，请稍后。。。';
    myapi.post(
      '/',
      {
        echo: txtEcho.value
      },
      function(data) {
        preEcho.innerHTML = huhuiyu.JsonUtil.formatJson(data, true);
      }
    );
  });

  document.getElementById('btnError').addEventListener('click', function() {
    preEcho.innerHTML = '错误访问演示中。。。';
    myapi.get('/notexists', function(data) {
      preEcho.innerHTML = huhuiyu.JsonUtil.formatJson(data, true);
    });
  });

  //对话框演示==========================
  let btnAlert01 = document.getElementById('btnAlert01');
  let btnAlert02 = document.getElementById('btnAlert02');
  let btnAlert03 = document.getElementById('btnAlert03');
  let btnAlert04 = document.getElementById('btnAlert04');
  let btnWait = document.getElementById('btnWait');
  let btnConfirm = document.getElementById('btnConfirm');

  btnAlert01.addEventListener('click', function() {
    dialog.showAlert({ info: '对话框信息01' });
  });

  btnAlert02.addEventListener('click', function() {
    dialog.showAlert({
      title: '自定义title',
      info: '对话框信息02'
    });
  });

  btnAlert03.addEventListener('click', function() {
    dialog.showAlert({
      info: '对话框信息03',
      show: function() {
        console.log('显示的回调');
      }
    });
  });

  btnAlert04.addEventListener('click', function() {
    dialog.showAlert({
      info: '全部回调都有的',
      show: function() {
        console.log('显示也有');
      },
      hide: function() {
        console.log('关闭也有');
      }
    });
  });

  btnWait.addEventListener('click', function() {
    dialog.showWait({
      title: '等待',
      info: '处理中，请稍候',
      show: function() {
        console.log('等待显示');
      }
    });
    setTimeout(function() {
      dialog.hideWait(function() {
        console.log('等待关闭');
      });
    }, 2000);
  });

  btnConfirm.addEventListener('click', function() {
    dialog.showConfirm({
      title: '请选择',
      info: '是否继续？',
      cby: function() {
        console.log('选择了是');
      },
      cbn: function() {
        console.log('选择了否');
      },
      show: function() {
        console.log('显示确认对话框');
      }
    });
  });
})();
