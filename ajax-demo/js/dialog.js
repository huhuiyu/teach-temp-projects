(function() {
  console.log('in dialog.js===>');
  let dialog = {}; //对话框api
  //确定对话框元素==================================
  let alertDialog = $('#alertDialog'); //对话框
  let btnAlertOk = $('#btnAlertOk'); //确定按钮
  let alertOkFunction; //对话框关闭后的回调函数
  //确定对话框的三个定制项
  //title：对话框的标题，info：对话框显示的内容
  //cb：对话框关闭的时候要执行的回调函数
  dialog.showAlert = function(title, info, cb) {
    $('#alertDialog .modal-title').html(title);
    $('#alertDialog .modal-body').html(info);
    //记录回调的函数，在对话框关闭后调用
    alertOkFunction = cb ? cb : function() {};
    alertDialog.modal('show');
  };

  btnAlertOk.click(function() {
    alertDialog.modal('hide');
  });

  //关闭的时候调用关闭函数
  alertDialog.on('hidden.bs.modal', function() {
    alertOkFunction();
  });

  //等待对话框api
  let waitDialog = $('#waitDialog');
  let waitDialogCloseFunction;

  dialog.showWait = function(info) {
    $('#waitDialog .modal-body').html(info);
    waitDialog.modal('show');
  };

  dialog.hideWait = function(cb) {
    waitDialogCloseFunction = cb ? cb : function() {};
    waitDialog.modal('hide');
  };

  waitDialog.on('hidden.bs.modal', function() {
    waitDialogCloseFunction();
  });

  //确认对话框api=======================================
  let confirmDialog = $('#confirmDialog');
  let confirmDialogYesFunction;
  let confirmDialogNoFunction;
  let confirmDialogResult;
  let btnConfirmDialogYes = $('#btnConfirmDialogYes');
  let btnConfirmDialogNo = $('#btnConfirmDialogNo');

  dialog.showConfirm = function(info, cby, cbn) {
    //默认是no的结果
    confirmDialogResult = false;
    $('#confirmDialog .modal-body').html(info);
    confirmDialogYesFunction = cby ? cby : function() {};
    confirmDialogNoFunction = cbn ? cbn : function() {};
    confirmDialog.modal('show');
  };

  btnConfirmDialogYes.click(function() {
    confirmDialogResult = true;
    confirmDialog.modal('hide');
  });

  btnConfirmDialogNo.click(function() {
    confirmDialogResult = false;
    confirmDialog.modal('hide');
  });

  confirmDialog.on('hidden.bs.modal', function() {
    if (confirmDialogResult) {
      confirmDialogYesFunction();
    } else {
      confirmDialogNoFunction();
    }
  });

  //放置对话框api到全局
  window.dialog = dialog;
})();
