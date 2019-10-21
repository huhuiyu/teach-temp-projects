(function() {
  //使用jquery获取页面元素并绑定事件
  //$('#元素id')等同于document.getElementById('元素id');
  let btnDialog01 = $('#btnDialog01');
  //click方法等同于addEventListener('click')
  btnDialog01.click(function() {
    //定制对话框的标题和信息
    //jquery支持css选择器
    //html方法等同于innerHTML
    //val方法等同于value
    $('#alertDialog .modal-title').html(
      $('#txtAlertTitle').val()
    );
    $('#alertDialog .modal-body').html(
      $('#txtAlertInfo').val()
    );

    //将id为alertDialog的对话框显示出来
    $('#alertDialog').modal('show');
  });

  //点击确认按钮关闭对话框
  $('#btnAlertOk').click(function() {
    $('#alertDialog').modal('hide');
  });

})();
