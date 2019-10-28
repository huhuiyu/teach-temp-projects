(function() {
  console.log('in imgcode===>');
  let imgCode = document.getElementById('imgCode');

  //加载图片校验码
  function loadImgCode() {
    // dialog.showWait('加载图片中，请稍候...');
    myapi.get('/util/imageCode', function(data) {
      // dialog.hideWait();
      console.log(data);
      imgCode.src = data.message;
    });
  }

  loadImgCode();

  imgCode.addEventListener('click', function() {
    loadImgCode();
  });

  $('#aimg').click(function() {
    loadImgCode();
  });

  //测试图片校验码是否正确
  let txtImgCode = document.getElementById('txtImgCode');
  let btnImgCode = document.getElementById('btnImgCode');

  btnImgCode.addEventListener('click', function() {
    dialog.showWait('图片校验中，请稍候...');
    myapi.post(
      '/auth/testImageCode',
      {
        imageCode: txtImgCode.value
      },
      function(data) {
        dialog.hideWait();
        console.log(data);
        dialog.showAlert('校验结果', data.message, function() {
          loadImgCode();
        });
      }
    );
  });
})();
