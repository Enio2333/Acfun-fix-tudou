﻿ (function() {
 	if (!document.domain) {
 		alert("你拖到书签栏使用了么？书签栏应该是在浏览器地址栏下方的位置。如果你确定你是在书签栏使用的，那么可能你的浏览器太辣鸡（比如360），换个现代的浏览器吧（火狐、谷歌、IE11都行的）");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("talkshowcn.com") > 0) {
 		alert("你应该是加到收藏夹或者拖到书签栏，而不是点我");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("acfun.tv") < 0 && document.domain.toLowerCase().indexOf("bilibili.com") < 0) {
 		alert("进AcFun再说...");
 		return
 	}
	if (document.domain.toLowerCase().indexOf("bilibili.com") > 0){
		var _start = document.body.innerHTML.indexOf("cid=")+4;
		var _end = document.body.innerHTML.indexOf("&",_start);
		var _length = _end - _start;
		var cid = document.body.innerHTML.substr(_start,_length);
		$('h2').append('<span id="video-download"><a class="b-btn f" href="http://www.flvsp.com/?url='+encodeURIComponent(location.href)+'" title="下载" style="float:none;color:#fff;margin-left:8px; width:200px; height:100px;" target="_blank"><i class="icon icon-download"></i>详细信息</a></span>')
		return
	}
 	$.info("AcFun Fix 2015.02.19");
 	var b = $("a.active.primary").attr("data-from");
 	window._getPlayer = function() {
 		return document.getElementById("ACFlashPlayer-re") ? document.getElementById("ACFlashPlayer-re") : (document.getElementById("not-ACFlashPlayer-re") ? document.getElementById("not-ACFlashPlayer-re") : document.getElementById("area-player"));
 	};
 	window.c = function(d, e) {
 		player = _getPlayer();
 		if (player.id == 'area-player') {
 			$(player).html('<div class="inner ui-draggable"><iframe id="ACFlashPlayer-re" ></iframe></div>');
 			player = document.getElementById("ACFlashPlayer-re");
 		};
 		player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="' + d + '" src="' + d + '" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="' + e + '" name="flashvars"><param name=movie value="' + d + '"></object>'
 	};
 	if (!document.getElementById("video-download")) {
 		$("#txt-title-view").append('<span id="video-download"><a class="btn primary" href="http://www.flvsp.com/?url='+encodeURIComponent(location.href)+'" title="下载" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-download"></i>下载</a></span>')
 	}
 	if (b == "youku2") {
 		b = "youku"
 	}
 	if (b == "qq2") {
 		b = "qq"
 	}
 	sourceList = {
 		"sina": "新浪视频",
 		"youku": "优酷网",
 		"tudou": "土豆网",
 		"qq": "腾讯视频",
 		"pps": "PPS.tv",
 		"ku6": "酷六网",
 		"letv": "乐视云",
 		"letv2": "乐视网",
 		"sohu": "搜狐视频",
 		"iqiyi": "爱奇艺",
 		"56": "56网",
 		"pptv": "PPTV"
 	};
 	if (b != "letv") {
 		c("http://static.skydust.net/private/acfun/AcPlayer201412121_D.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").attr("data-vid") + "|" + b + "|" + $("a.active.primary").attr("data-sid"));
 		$("#video-download").append('<a class="btn primary" onclick="$(_getPlayer()).prop(\'outerHTML\',$(_getPlayer()).prop(\'outerHTML\').replace(/acfun.tv/,\'talkshowcn.com\'))" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>刷新</a>')
 	}
 	$.info("视频源类型：" + sourceList[b]);
 	window.setCookie = function(d, f) {
 		var e = 365;
 		var g = new Date();
 		g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
 		document.cookie = d + "=" + escape(f) + ";expires=" + g.toGMTString()
 	};

 	function a(e) {
 		var d, f = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
 		if (d = document.cookie.match(f)) {
 			return unescape(d[2])
 		} else {
 			return null
 		}
 	}
 	if (!document.getElementById("keroom")) {
 		$(document.body).append('<div id="keroom" style="position:fixed;width:490px;right:0;bottom:0;"><div style="width:490px;"><a id="hideroom" class="r btn primary" onclick="$(\'.keframe\').toggle();if($(this).html()==\'收起聊天室\'){$(this).html(\'交流~\');setCookie(\'nokeroom\',1);}else{$(this).html(\'收起聊天室\');setCookie(\'nokeroom\',0);}">收起聊天室</a></div><iframe src="http://kekeke.cc/acfunfix" style="width:800px;height:380px;" class="keframe"></iframe></div>');
 		if (a("nokeroom") == 1) {
 			$("#hideroom").click()
 		}
 	};
 	if (a("fuckqqtips") != 1 && b == 'qq') {
 		setCookie("fuckqqtips", 1);
 		alert("因为很重要，所以弹窗提示一次：腾讯源视频解析失败请多点播放器上方的刷新按钮刷新几次试试！如果其他源都没问题，腾讯源视频刷新几次还是放不了，请在聊天室反馈；如果所有视频源都不能加载，那是你网络问题。无视、直接跳过这个弹窗而引起的问题，我不但不会帮你，还会骂你。");
 	}
 })();