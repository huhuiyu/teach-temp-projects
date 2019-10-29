(function() {
  console.log('in dialog.js===>');
  let dialog = {}; //对话框api
  //确定对话框元素==================================
  let alertDialog = $('#alertDialog'); //对话框
  let btnAlertOk = $('#btnAlertOk'); //确定按钮
  let alertOkFunction; //对话框关闭后的回调函数
  let alertShowFunction; //对话框显示出来后的回调函数
  let dialogTitle = '黑暗骑士的网站';
  const empty = function() {};

  dialog.showAlert = function(config) {
    //判断配置中是否有title，没有就使用默认值
    let title = config.title ? config.title : dialogTitle;
    $('#alertDialog .modal-title').html(title);
    //判断是否存在对话框信息
    let info = config.info ? config.info : '没有显示信息';
    $('#alertDialog .modal-body').html(info);
    //对话框显示回调函数
    alertShowFunction = config.show ? config.show : empty;
    //对话框关闭回调函数
    alertOkFunction = config.hide ? config.hide : empty;
    alertDialog.modal('show');
  };

  btnAlertOk.click(function() {
    alertDialog.modal('hide');
  });

  //显示的时候调用显示函数
  alertDialog.on('shown.bs.modal', function() {
    alertShowFunction();
  });

  //关闭的时候调用关闭函数
  alertDialog.on('hidden.bs.modal', function() {
    alertOkFunction();
  });

  //等待对话框api
  let waitDialog = $('#waitDialog');
  let waitDialogCloseFunction;
  let waitDialogShowFunction;

  dialog.showWait = function(config) {
    let title = config.title ? config.title : dialogTitle;
    $('#waitDialog .modal-title').html(title);
    let info = config.info ? config.info : '没有显示信息';
    $('#waitDialog .modal-body').html(info);
    //对话框显示回调函数
    waitDialogShowFunction = config.show ? config.show : empty;
    waitDialog.modal('show');
  };

  dialog.hideWait = function(cb) {
    waitDialogCloseFunction = cb ? cb : empty;
    waitDialog.modal('hide');
  };

  waitDialog.on('shown.bs.modal', function() {
    waitDialogShowFunction();
  });

  waitDialog.on('hidden.bs.modal', function() {
    waitDialogCloseFunction();
  });

  //确认对话框api=======================================
  let confirmDialog = $('#confirmDialog');
  let confirmDialogYesFunction;
  let confirmDialogNoFunction;
  let confirmDialogShowFunction;
  let confirmDialogResult;
  let btnConfirmDialogYes = $('#btnConfirmDialogYes');
  let btnConfirmDialogNo = $('#btnConfirmDialogNo');

  dialog.showConfirm = function(config) {
    confirmDialogResult = false;
    let title = config.title ? config.title : dialogTitle;
    $('#confirmDialog .modal-title').html(title);
    let info = config.info ? config.info : '没有显示信息';
    $('#confirmDialog .modal-body').html(info);
    confirmDialogYesFunction = config.cby ? config.cby : empty;
    confirmDialogNoFunction = config.cbn ? config.cbn : empty;
    confirmDialogShowFunction = config.show ? config.show : empty;
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

  confirmDialog.on('shown.bs.modal', function() {
    confirmDialogShowFunction();
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
