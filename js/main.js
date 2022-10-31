"use strict";
function bodyFixed(){
//変数の設定
var $body = $('body');

//スクロール量を保存
var scrollTop;

//スクロールを固定
function bodyFixedOn() {
  scrollTop = $(window).scrollTop();
  
  $body.css({
    position: 'fixed',
    top: -scrollTop
  });
}

//スクロールの固定を解除
function bodyFixedOff() {
  $body.css({
    position: '',
    top: ''
  });
  
  $(window).scrollTop(scrollTop);
}

//モーダルのトリガーをクリックしたとき
$('#openModal').on('click', function() {
  bodyFixedOn();
});

//モーダルの閉じるボタンをクリックしたとき
$('#closeModal').on('click', function() {
  bodyFixedOff();
});

//モーダルのオーバーレイをクリックしたとき
$('.overlay').on('click', function() {
  bodyFixedOff();
});
}

bodyFixed();

// モーダルウィンドウ
$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});

