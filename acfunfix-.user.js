// ==UserScript==
// @name        AcFunFix-
// @namespace   http://www.talkshowcn.com/js/acfunfix.html
// @description AcFunFix-
// @include     http://www.acfun.tv/v/*
// @include     http://acfun.tv/v/*
// @include     http://hengyang.acfun.tv/v/*
// @include     http://wenzhou.acfun.tv/v/*
// @version     1.0.0.0
// @grant       none
// @run-at      document-end
// ==/UserScript==
(function ($) {
  window._doFix = function () {
    var f = document.createElement('script');
    f.src = 'https://raw.githubusercontent.com/hcwhan/AcFunFix-/master/acfunfix-.js?ran=' + new Date().getTime();
    document.body.appendChild(f);
    //直接加载远程脚本，防止本地脚本失效。
  }
  window._waitPlayer = function () {
    if (document.getElementById('ACFlashPlayer-re') && window.$) {
      clearInterval(_waitInt);
      _doFix();
    }
  }
  _waitInt = setInterval('_waitPlayer()', 500);
}) (function ($) {
  return document.querySelector($);
});
