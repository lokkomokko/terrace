function hasScrolled(){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>lastScrollTop&&e>navbarHeight?($("header").removeClass("header-down").addClass("header-up"),$(".mobile_menu").removeClass("open"),$(".mobile_menu_icon ").removeClass("close_icon")):e+$(window).height()<$(document).height()&&$("header").removeClass("header-up").addClass("header-down"),lastScrollTop=e)}if(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var s,l,c,d,u,f,g,h;if(!n&&this.length>0){var m=(s=e(this[0])).data(e.mask.dataName);return m?m():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,c=[],d=g=n.length,u=null,e.each(n.split(""),function(e,t){"?"==t?(g--,d=e):l[t]?(c.push(new RegExp(l[t])),null===u&&(u=c.length-1),d>e&&(f=c.length-1)):c.push(null)}),this.trigger("unmask").each(function(){function s(){if(o.completed){for(var e=u;f>=e;e++)if(c[e]&&C[e]===m(e))return;o.completed.call(x)}}function m(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function v(e){for(;++e<g&&!c[e];);return e}function p(e){for(;--e>=0&&!c[e];);return e}function b(e,t){var n,a;if(!(0>e)){for(n=e,a=v(t);g>n;n++)if(c[n]){if(!(g>a&&c[n].test(C[a])))break;C[n]=C[a],C[a]=m(a),a=v(a)}$(),x.caret(Math.max(u,e))}}function k(e){var t,n,a,i;for(t=e,n=m(e);g>t;t++)if(c[t]){if(a=v(t),i=C[t],C[t]=n,!(g>a&&c[a].test(i)))break;n=i}}function y(){_(),x.val()!=S&&x.change()}function w(e,t){var n;for(n=e;t>n&&g>n;n++)c[n]&&(C[n]=m(n))}function $(){x.val(C.join(""))}function _(e){var t,n,a,i=x.val(),r=-1;for(t=0,a=0;g>t;t++)if(c[t]){for(C[t]=m(t);a++<i.length;)if(n=i.charAt(a-1),c[t].test(n)){C[t]=n,r=t;break}if(a>i.length){w(t+1,g);break}}else C[t]===i.charAt(a)&&a++,d>t&&(r=t);return e?$():d>r+1?o.autoclear||C.join("")===T?(x.val()&&x.val(""),w(0,g)):$():($(),x.val(x.val().substring(0,r+1))),d?t:u}var x=e(this),C=e.map(n.split(""),function(e,t){return"?"!=e?l[e]?m(t):e:void 0}),T=C.join(""),S=x.val();x.data(e.mask.dataName,function(){return e.map(C,function(e,t){return c[t]&&e!=m(t)?e:null}).join("")}),x.one("unmask",function(){x.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!x.prop("readonly")){clearTimeout(t);var e;S=x.val(),e=_(),t=setTimeout(function(){x.get(0)===document.activeElement&&($(),e==n.replace("?","").length?x.caret(0,e):x.caret(e))},10)}}).on("blur.mask",y).on("keydown.mask",function(e){if(!x.prop("readonly")){var t,n,i,r=e.which||e.keyCode;h=x.val(),8===r||46===r||a&&127===r?(t=x.caret(),n=t.begin,(i=t.end)-n==0&&(n=46!==r?p(n):i=v(n-1),i=46===r?v(i):i),w(n,i),b(n,i-1),e.preventDefault()):13===r?y.call(this,e):27===r&&(x.val(S),x.caret(0,_()),e.preventDefault())}}).on("keypress.mask",function(t){if(!x.prop("readonly")){var n,a,i,o=t.which||t.keyCode,l=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>o||!o||13===o||(l.end-l.begin!=0&&(w(l.begin,l.end),b(l.begin,l.end-1)),n=v(l.begin-1),g>n&&(a=String.fromCharCode(o),c[n].test(a))&&(k(n),C[n]=a,$(),i=v(n),r?setTimeout(function(){e.proxy(e.fn.caret,x,i)()},0):x.caret(i),l.begin<=f&&s()),t.preventDefault())}}).on("input.mask paste.mask",function(){x.prop("readonly")||setTimeout(function(){var e=_(!0);x.caret(e),s()},0)}),i&&r&&x.off("input.mask").on("input.mask",function(){var e=x.val(),t=x.caret();if(h&&h.length&&h.length>e.length){for(_(!0);t.begin>0&&!c[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<u&&!c[t.begin];)t.begin++;x.caret(t.begin,t.begin)}else{for(_(!0);t.begin<g&&!c[t.begin];)t.begin++;x.caret(t.begin,t.begin)}s()}),_()})}})}),function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t,n){if(n){var a=document.createDocumentFragment(),i=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");i&&t.setAttribute("viewBox",i);for(var r=n.cloneNode(!0);r.childNodes.length;)a.appendChild(r.firstChild);e.appendChild(a)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(a){var i=t._cachedTarget[a.id];i||(i=t._cachedTarget[a.id]=n.getElementById(a.id)),e(a.parent,a.svg,i)})}},t.onreadystatechange()}function n(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(a){function i(){for(var a=0;a<h.length;){var s=h[a],l=s.parentNode,c=n(l),d=s.getAttribute("xlink:href")||s.getAttribute("href");if(!d&&o.attributeName&&(d=s.getAttribute(o.attributeName)),c&&d){if(r)if(!o.validate||o.validate(d,c,s)){l.removeChild(s);var u=d.split("#"),v=u.shift(),p=u.join("#");if(v.length){var b=f[v];b||((b=f[v]=new XMLHttpRequest).open("GET",v),b.send(),b._embeds=[]),b._embeds.push({parent:l,svg:c,id:p}),t(b)}else e(l,c,document.getElementById(p))}else++a,++m}else++a}(!h.length||h.length-m>0)&&g(i,67)}var r,o=Object(a),s=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,l=/\bAppleWebKit\/(\d+)\b/,c=/\bEdge\/12\.(\d+)\b/,d=/\bEdge\/.(\d+)\b/,u=window.top!==window.self;r="polyfill"in o?o.polyfill:s.test(navigator.userAgent)||(navigator.userAgent.match(c)||[])[1]<10547||(navigator.userAgent.match(l)||[])[1]<537||d.test(navigator.userAgent)&&u;var f={},g=window.requestAnimationFrame||setTimeout,h=document.getElementsByTagName("use"),m=0;r&&i()}}),$(".main-slider").length>=1&&($(".slick-prev").ready(function(){$(".slick-prev").html('<div class="slide_button prev"><svg class="icon icon-arrow"><use xlink:href="img/symbol/sprite.svg#arrow"><use/></svg></div>'),$(".slick-next").html('<div class="slide_button next"><svg class="icon icon-arrow"><use xlink:href="img/symbol/sprite.svg#arrow"><use/></svg></div>');var e=$("<div class='main-slider__nav-wrap container'></div>");$(".main-slider").append(e),e.append($(".slick-prev")).append($(".slick-next"))}),$(".main-slider__wrapper").slick({infinite:!0,speed:1e3,autoplay:!0,pauseOnHover:!1,fade:!0})),$(".carousel").length>=1&&($(".slick-prev").ready(function(){$(".slick-prev").html('<div class="slide_button prev"><svg class="icon icon-arrow"><use xlink:href="img/symbol/sprite.svg#arrow"><use/></svg></div>'),$(".slick-next").html('<div class="slide_button next"><svg class="icon icon-arrow"><use xlink:href="img/symbol/sprite.svg#arrow"><use/></svg></div>')}),$(".carousel__wrapper").slick({slidesToShow:6,slidesToScroll:1,draggable:!1})),$(document).ready(function(){svg4everybody({}),$("#phone").mask("+7 ( 999 ) 999 - 99 - 99",{placeholder:"_"}),$(".agree input").click(function(){$(this).is(":checked")?$(".callback button").addClass("access_submit").attr("disabled",!1):$(".callback button").removeClass("access_submit").attr("disabled",!0)}),$(".hamburger-menu").click(function(){$("body").toggleClass("no-scroll"),$(".bar").toggleClass("animate"),$(".header__mobile-menu nav").toggleClass("open")}),$("tr[data-href]").on("click",function(){document.location=$(this).data("href")}),$(".genplan").length>=1&&$(".genplan__mobile-link").fancybox({type:"iframe",iframe:{css:{width:"320px"},scrolling:"yes"}});var e=$(".news-filter .row:first-of-type .col"),t=$(".news-filter .row:last-of-type .col");e.click(function(){e.removeClass("active"),$(this).toggleClass("active")}),t.click(function(){t.removeClass("active"),$(this).toggleClass("active")}),$(window).width()<=320&&(e.first().click(function(){e.parent().find(".wrap").toggleClass("open")}),t.first().click(function(){t.parent().find(".wrap").toggleClass("open")}))}),$(window).width()<=320){$("header").addClass("stick");var didScroll,lastScrollTop=0,delta=10,navbarHeight=$("header").outerHeight();$(window).scroll(function(e){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJoYXNTY3JvbGxlZCIsInN0IiwiJCIsInRoaXMiLCJzY3JvbGxUb3AiLCJNYXRoIiwiYWJzIiwibGFzdFNjcm9sbFRvcCIsImRlbHRhIiwibmF2YmFySGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIndpbmRvdyIsImhlaWdodCIsImRvY3VtZW50IiwiYSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJyZXF1aXJlIiwialF1ZXJ5IiwiYiIsImMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkIiwidGVzdCIsImUiLCJmIiwibWFzayIsImRlZmluaXRpb25zIiwiOSIsIioiLCJhdXRvY2xlYXIiLCJkYXRhTmFtZSIsInBsYWNlaG9sZGVyIiwiZm4iLCJleHRlbmQiLCJjYXJldCIsImxlbmd0aCIsImlzIiwiZWFjaCIsInNldFNlbGVjdGlvblJhbmdlIiwiY3JlYXRlVGV4dFJhbmdlIiwiY29sbGFwc2UiLCJtb3ZlRW5kIiwibW92ZVN0YXJ0Iiwic2VsZWN0Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3Rpb24iLCJjcmVhdGVSYW5nZSIsImR1cGxpY2F0ZSIsInRleHQiLCJiZWdpbiIsImVuZCIsInVubWFzayIsInRyaWdnZXIiLCJnIiwiaCIsImkiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwiZGF0YSIsImNvbXBsZXRlZCIsInNwbGl0IiwicHVzaCIsIlJlZ0V4cCIsIkMiLCJjYWxsIiwiQiIsImNoYXJBdCIsInEiLCJyIiwicyIsInoiLCJtYXgiLCJ0IiwidiIsIkEiLCJ2YWwiLCJFIiwiY2hhbmdlIiwieSIsImpvaW4iLCJEIiwic3Vic3RyaW5nIiwibWFwIiwib25lIiwib2ZmIiwicmVtb3ZlRGF0YSIsIm9uIiwicHJvcCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXQiLCJhY3RpdmVFbGVtZW50IiwicmVwbGFjZSIsIndoaWNoIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiY3RybEtleSIsImFsdEtleSIsIm1ldGFLZXkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwcm94eSIsInN2ZzRldmVyeWJvZHkiLCJtb2R1bGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiY2xvbmVOb2RlIiwiY2hpbGROb2RlcyIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJfY2FjaGVkRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJfY2FjaGVkVGFyZ2V0IiwiX2VtYmVkcyIsInNwbGljZSIsImlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnQiLCJzdmciLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50Tm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJ2YWxpZGF0ZSIsInJlbW92ZUNoaWxkIiwic2hpZnQiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwiT2JqZWN0IiwidG9wIiwic2VsZiIsInBvbHlmaWxsIiwibWF0Y2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInJlYWR5IiwiaHRtbCIsIm5ld0Jsb2NrIiwiYXBwZW5kIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwiYXV0b3BsYXkiLCJwYXVzZU9uSG92ZXIiLCJmYWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkcmFnZ2FibGUiLCJjbGljayIsImF0dHIiLCJ0b2dnbGVDbGFzcyIsImxvY2F0aW9uIiwiZmFuY3lib3giLCJ0eXBlIiwiaWZyYW1lIiwiY3NzIiwid2lkdGgiLCJzY3JvbGxpbmciLCJmaWx0ZXJfcm93XzEiLCJmaWx0ZXJfcm93XzIiLCJmaXJzdCIsImZp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RSx1Q0FFakIrSyxFQUFhVixNQUFNLFdBQ2ZVLEVBQWF2SyxZQUFZLFVBQ3pCUixFQUFFQyxNQUFNc0ssWUFBWSxZQUV4QlMsRUFBYVgsTUFBTSxXQUNmVyxFQUFheEssWUFBWSxVQUN6QlIsRUFBRUMsTUFBTXNLLFlBQVksWUFLeEJ2SyxFQUFFVSxRQUFRbUssU0FBVSxNQUNwQkUsRUFBYUUsUUFBUVosTUFBTSxXQUN2QlUsRUFBYTFDLFNBQVM2QyxLQUFLLFNBQVNYLFlBQVksVUFFcERTLEVBQWFDLFFBQVFaLE1BQU0sV0FDdkJXLEVBQWEzQyxTQUFTNkMsS0FBSyxTQUFTWCxZQUFZLGFBV3hEdkssRUFBRVUsUUFBUW1LLFNBQVcsSUFBSyxDQUU3QjdLLEVBQUUsVUFBVVMsU0FBUyxTQUNyQixJQUFJMEssVUFDQTlLLGNBQWdCLEVBQ2hCQyxNQUFRLEdBQ1JDLGFBQWVQLEVBQUUsVUFBVW9MLGNBRS9CcEwsRUFBRVUsUUFBUTJLLE9BQU8sU0FBU0MsR0FDeEJILFdBQVksSUFHZEksWUFBWSxXQUNOSixZQUNGckwsY0FDQXFMLFdBQVksSUFHYiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbWFzayBwbHVnaW5cbiAqL1xuLypcbiAgICBqUXVlcnkgTWFza2VkIElucHV0IFBsdWdpblxuICAgIENvcHlyaWdodCAoYykgMjAwNyAtIDIwMTUgSm9zaCBCdXNoIChkaWdpdGFsYnVzaC5jb20pXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vZGlnaXRhbGJ1c2guY29tL3Byb2plY3RzL21hc2tlZC1pbnB1dC1wbHVnaW4vI2xpY2Vuc2UpXG4gICAgVmVyc2lvbjogMS40LjFcbiovXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmpRdWVyeSl9KGZ1bmN0aW9uKGEpe3ZhciBiLGM9bmF2aWdhdG9yLnVzZXJBZ2VudCxkPS9pcGhvbmUvaS50ZXN0KGMpLGU9L2Nocm9tZS9pLnRlc3QoYyksZj0vYW5kcm9pZC9pLnRlc3QoYyk7YS5tYXNrPXtkZWZpbml0aW9uczp7OTpcIlswLTldXCIsYTpcIltBLVphLXpdXCIsXCIqXCI6XCJbQS1aYS16MC05XVwifSxhdXRvY2xlYXI6ITAsZGF0YU5hbWU6XCJyYXdNYXNrRm5cIixwbGFjZWhvbGRlcjpcIl9cIn0sYS5mbi5leHRlbmQoe2NhcmV0OmZ1bmN0aW9uKGEsYil7dmFyIGM7aWYoMCE9PXRoaXMubGVuZ3RoJiYhdGhpcy5pcyhcIjpoaWRkZW5cIikpcmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGE/KGI9XCJudW1iZXJcIj09dHlwZW9mIGI/YjphLHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc2V0U2VsZWN0aW9uUmFuZ2U/dGhpcy5zZXRTZWxlY3Rpb25SYW5nZShhLGIpOnRoaXMuY3JlYXRlVGV4dFJhbmdlJiYoYz10aGlzLmNyZWF0ZVRleHRSYW5nZSgpLGMuY29sbGFwc2UoITApLGMubW92ZUVuZChcImNoYXJhY3RlclwiLGIpLGMubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsYSksYy5zZWxlY3QoKSl9KSk6KHRoaXNbMF0uc2V0U2VsZWN0aW9uUmFuZ2U/KGE9dGhpc1swXS5zZWxlY3Rpb25TdGFydCxiPXRoaXNbMF0uc2VsZWN0aW9uRW5kKTpkb2N1bWVudC5zZWxlY3Rpb24mJmRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSYmKGM9ZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCksYT0wLWMuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsLTFlNSksYj1hK2MudGV4dC5sZW5ndGgpLHtiZWdpbjphLGVuZDpifSl9LHVubWFzazpmdW5jdGlvbigpe3JldHVybiB0aGlzLnRyaWdnZXIoXCJ1bm1hc2tcIil9LG1hc2s6ZnVuY3Rpb24oYyxnKXt2YXIgaCxpLGosayxsLG0sbixvO2lmKCFjJiZ0aGlzLmxlbmd0aD4wKXtoPWEodGhpc1swXSk7dmFyIHA9aC5kYXRhKGEubWFzay5kYXRhTmFtZSk7cmV0dXJuIHA/cCgpOnZvaWQgMH1yZXR1cm4gZz1hLmV4dGVuZCh7YXV0b2NsZWFyOmEubWFzay5hdXRvY2xlYXIscGxhY2Vob2xkZXI6YS5tYXNrLnBsYWNlaG9sZGVyLGNvbXBsZXRlZDpudWxsfSxnKSxpPWEubWFzay5kZWZpbml0aW9ucyxqPVtdLGs9bj1jLmxlbmd0aCxsPW51bGwsYS5lYWNoKGMuc3BsaXQoXCJcIiksZnVuY3Rpb24oYSxiKXtcIj9cIj09Yj8obi0tLGs9YSk6aVtiXT8oai5wdXNoKG5ldyBSZWdFeHAoaVtiXSkpLG51bGw9PT1sJiYobD1qLmxlbmd0aC0xKSxrPmEmJihtPWoubGVuZ3RoLTEpKTpqLnB1c2gobnVsbCl9KSx0aGlzLnRyaWdnZXIoXCJ1bm1hc2tcIikuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGgoKXtpZihnLmNvbXBsZXRlZCl7Zm9yKHZhciBhPWw7bT49YTthKyspaWYoalthXSYmQ1thXT09PXAoYSkpcmV0dXJuO2cuY29tcGxldGVkLmNhbGwoQil9fWZ1bmN0aW9uIHAoYSl7cmV0dXJuIGcucGxhY2Vob2xkZXIuY2hhckF0KGE8Zy5wbGFjZWhvbGRlci5sZW5ndGg/YTowKX1mdW5jdGlvbiBxKGEpe2Zvcig7KythPG4mJiFqW2FdOyk7cmV0dXJuIGF9ZnVuY3Rpb24gcihhKXtmb3IoOy0tYT49MCYmIWpbYV07KTtyZXR1cm4gYX1mdW5jdGlvbiBzKGEsYil7dmFyIGMsZDtpZighKDA+YSkpe2ZvcihjPWEsZD1xKGIpO24+YztjKyspaWYoaltjXSl7aWYoIShuPmQmJmpbY10udGVzdChDW2RdKSkpYnJlYWs7Q1tjXT1DW2RdLENbZF09cChkKSxkPXEoZCl9eigpLEIuY2FyZXQoTWF0aC5tYXgobCxhKSl9fWZ1bmN0aW9uIHQoYSl7dmFyIGIsYyxkLGU7Zm9yKGI9YSxjPXAoYSk7bj5iO2IrKylpZihqW2JdKXtpZihkPXEoYiksZT1DW2JdLENbYl09YywhKG4+ZCYmaltkXS50ZXN0KGUpKSlicmVhaztjPWV9fWZ1bmN0aW9uIHUoKXt2YXIgYT1CLnZhbCgpLGI9Qi5jYXJldCgpO2lmKG8mJm8ubGVuZ3RoJiZvLmxlbmd0aD5hLmxlbmd0aCl7Zm9yKEEoITApO2IuYmVnaW4+MCYmIWpbYi5iZWdpbi0xXTspYi5iZWdpbi0tO2lmKDA9PT1iLmJlZ2luKWZvcig7Yi5iZWdpbjxsJiYhaltiLmJlZ2luXTspYi5iZWdpbisrO0IuY2FyZXQoYi5iZWdpbixiLmJlZ2luKX1lbHNle2ZvcihBKCEwKTtiLmJlZ2luPG4mJiFqW2IuYmVnaW5dOyliLmJlZ2luKys7Qi5jYXJldChiLmJlZ2luLGIuYmVnaW4pfWgoKX1mdW5jdGlvbiB2KCl7QSgpLEIudmFsKCkhPUUmJkIuY2hhbmdlKCl9ZnVuY3Rpb24gdyhhKXtpZighQi5wcm9wKFwicmVhZG9ubHlcIikpe3ZhciBiLGMsZSxmPWEud2hpY2h8fGEua2V5Q29kZTtvPUIudmFsKCksOD09PWZ8fDQ2PT09Znx8ZCYmMTI3PT09Zj8oYj1CLmNhcmV0KCksYz1iLmJlZ2luLGU9Yi5lbmQsZS1jPT09MCYmKGM9NDYhPT1mP3IoYyk6ZT1xKGMtMSksZT00Nj09PWY/cShlKTplKSx5KGMsZSkscyhjLGUtMSksYS5wcmV2ZW50RGVmYXVsdCgpKToxMz09PWY/di5jYWxsKHRoaXMsYSk6Mjc9PT1mJiYoQi52YWwoRSksQi5jYXJldCgwLEEoKSksYS5wcmV2ZW50RGVmYXVsdCgpKX19ZnVuY3Rpb24geChiKXtpZighQi5wcm9wKFwicmVhZG9ubHlcIikpe3ZhciBjLGQsZSxnPWIud2hpY2h8fGIua2V5Q29kZSxpPUIuY2FyZXQoKTtpZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleXx8MzI+ZykmJmcmJjEzIT09Zyl7aWYoaS5lbmQtaS5iZWdpbiE9PTAmJih5KGkuYmVnaW4saS5lbmQpLHMoaS5iZWdpbixpLmVuZC0xKSksYz1xKGkuYmVnaW4tMSksbj5jJiYoZD1TdHJpbmcuZnJvbUNoYXJDb2RlKGcpLGpbY10udGVzdChkKSkpe2lmKHQoYyksQ1tjXT1kLHooKSxlPXEoYyksZil7dmFyIGs9ZnVuY3Rpb24oKXthLnByb3h5KGEuZm4uY2FyZXQsQixlKSgpfTtzZXRUaW1lb3V0KGssMCl9ZWxzZSBCLmNhcmV0KGUpO2kuYmVnaW48PW0mJmgoKX1iLnByZXZlbnREZWZhdWx0KCl9fX1mdW5jdGlvbiB5KGEsYil7dmFyIGM7Zm9yKGM9YTtiPmMmJm4+YztjKyspaltjXSYmKENbY109cChjKSl9ZnVuY3Rpb24geigpe0IudmFsKEMuam9pbihcIlwiKSl9ZnVuY3Rpb24gQShhKXt2YXIgYixjLGQsZT1CLnZhbCgpLGY9LTE7Zm9yKGI9MCxkPTA7bj5iO2IrKylpZihqW2JdKXtmb3IoQ1tiXT1wKGIpO2QrKzxlLmxlbmd0aDspaWYoYz1lLmNoYXJBdChkLTEpLGpbYl0udGVzdChjKSl7Q1tiXT1jLGY9YjticmVha31pZihkPmUubGVuZ3RoKXt5KGIrMSxuKTticmVha319ZWxzZSBDW2JdPT09ZS5jaGFyQXQoZCkmJmQrKyxrPmImJihmPWIpO3JldHVybiBhP3ooKTprPmYrMT9nLmF1dG9jbGVhcnx8Qy5qb2luKFwiXCIpPT09RD8oQi52YWwoKSYmQi52YWwoXCJcIikseSgwLG4pKTp6KCk6KHooKSxCLnZhbChCLnZhbCgpLnN1YnN0cmluZygwLGYrMSkpKSxrP2I6bH12YXIgQj1hKHRoaXMpLEM9YS5tYXAoYy5zcGxpdChcIlwiKSxmdW5jdGlvbihhLGIpe3JldHVyblwiP1wiIT1hP2lbYV0/cChiKTphOnZvaWQgMH0pLEQ9Qy5qb2luKFwiXCIpLEU9Qi52YWwoKTtCLmRhdGEoYS5tYXNrLmRhdGFOYW1lLGZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKEMsZnVuY3Rpb24oYSxiKXtyZXR1cm4galtiXSYmYSE9cChiKT9hOm51bGx9KS5qb2luKFwiXCIpfSksQi5vbmUoXCJ1bm1hc2tcIixmdW5jdGlvbigpe0Iub2ZmKFwiLm1hc2tcIikucmVtb3ZlRGF0YShhLm1hc2suZGF0YU5hbWUpfSkub24oXCJmb2N1cy5tYXNrXCIsZnVuY3Rpb24oKXtpZighQi5wcm9wKFwicmVhZG9ubHlcIikpe2NsZWFyVGltZW91dChiKTt2YXIgYTtFPUIudmFsKCksYT1BKCksYj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Qi5nZXQoMCk9PT1kb2N1bWVudC5hY3RpdmVFbGVtZW50JiYoeigpLGE9PWMucmVwbGFjZShcIj9cIixcIlwiKS5sZW5ndGg/Qi5jYXJldCgwLGEpOkIuY2FyZXQoYSkpfSwxMCl9fSkub24oXCJibHVyLm1hc2tcIix2KS5vbihcImtleWRvd24ubWFza1wiLHcpLm9uKFwia2V5cHJlc3MubWFza1wiLHgpLm9uKFwiaW5wdXQubWFzayBwYXN0ZS5tYXNrXCIsZnVuY3Rpb24oKXtCLnByb3AoXCJyZWFkb25seVwiKXx8c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPUEoITApO0IuY2FyZXQoYSksaCgpfSwwKX0pLGUmJmYmJkIub2ZmKFwiaW5wdXQubWFza1wiKS5vbihcImlucHV0Lm1hc2tcIix1KSxBKCl9KX19KX0pO1xuXG4vKlxuICogc3ZnIHBsdWdpblxuICovXG4hZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGEuc3ZnNGV2ZXJ5Ym9keT1iKCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6YS5zdmc0ZXZlcnlib2R5PWIoKX0odGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiLGMpe2lmKGMpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxlPSFiLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikmJmMuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtlJiZiLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixlKTtmb3IodmFyIGY9Yy5jbG9uZU5vZGUoITApO2YuY2hpbGROb2Rlcy5sZW5ndGg7KWQuYXBwZW5kQ2hpbGQoZi5maXJzdENoaWxkKTthLmFwcGVuZENoaWxkKGQpfX1mdW5jdGlvbiBiKGIpe2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PWIucmVhZHlTdGF0ZSl7dmFyIGM9Yi5fY2FjaGVkRG9jdW1lbnQ7Y3x8KGM9Yi5fY2FjaGVkRG9jdW1lbnQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGMuYm9keS5pbm5lckhUTUw9Yi5yZXNwb25zZVRleHQsYi5fY2FjaGVkVGFyZ2V0PXt9KSxiLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihkKXt2YXIgZT1iLl9jYWNoZWRUYXJnZXRbZC5pZF07ZXx8KGU9Yi5fY2FjaGVkVGFyZ2V0W2QuaWRdPWMuZ2V0RWxlbWVudEJ5SWQoZC5pZCkpLGEoZC5wYXJlbnQsZC5zdmcsZSl9KX19LGIub25yZWFkeXN0YXRlY2hhbmdlKCl9ZnVuY3Rpb24gYyhjKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBjPTA7YzxvLmxlbmd0aDspe3ZhciBoPW9bY10saT1oLnBhcmVudE5vZGUsaj1kKGkpLGs9aC5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpfHxoLmdldEF0dHJpYnV0ZShcImhyZWZcIik7aWYoIWsmJmcuYXR0cmlidXRlTmFtZSYmKGs9aC5nZXRBdHRyaWJ1dGUoZy5hdHRyaWJ1dGVOYW1lKSksaiYmayl7aWYoZilpZighZy52YWxpZGF0ZXx8Zy52YWxpZGF0ZShrLGosaCkpe2kucmVtb3ZlQ2hpbGQoaCk7dmFyIGw9ay5zcGxpdChcIiNcIikscT1sLnNoaWZ0KCkscj1sLmpvaW4oXCIjXCIpO2lmKHEubGVuZ3RoKXt2YXIgcz1tW3FdO3N8fChzPW1bcV09bmV3IFhNTEh0dHBSZXF1ZXN0LHMub3BlbihcIkdFVFwiLHEpLHMuc2VuZCgpLHMuX2VtYmVkcz1bXSkscy5fZW1iZWRzLnB1c2goe3BhcmVudDppLHN2ZzpqLGlkOnJ9KSxiKHMpfWVsc2UgYShpLGosZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocikpfWVsc2UrK2MsKytwfWVsc2UrK2N9KCFvLmxlbmd0aHx8by5sZW5ndGgtcD4wKSYmbihlLDY3KX12YXIgZixnPU9iamVjdChjKSxoPS9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLGk9L1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLyxqPS9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLGs9L1xcYkVkZ2VcXC8uKFxcZCspXFxiLyxsPXdpbmRvdy50b3AhPT13aW5kb3cuc2VsZjtmPVwicG9seWZpbGxcImluIGc/Zy5wb2x5ZmlsbDpoLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGopfHxbXSlbMV08MTA1NDd8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGkpfHxbXSlbMV08NTM3fHxrLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJmw7dmFyIG09e30sbj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIikscD0wO2YmJmUoKX1mdW5jdGlvbiBkKGEpe2Zvcih2YXIgYj1hO1wic3ZnXCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihiPWIucGFyZW50Tm9kZSk7KTtyZXR1cm4gYn1yZXR1cm4gY30pO1xuXG5cbi8qXG4gKiBtYWluIHNsaWRlciBcbiAqL1xuXG4gICAgLy8gbWFpbiBzbGlkZSBzdGFydFxuICAgIGlmICgkKCcubWFpbi1zbGlkZXInKS5sZW5ndGggPj0gMSkge1xuXG4gICAgICAgICQoXCIuc2xpY2stcHJldlwiKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyIG5leHRfYnV0dG9uID0gJ1xcPGRpdiBjbGFzcz1cXFwic2xpZGVfYnV0dG9uIHByZXZcXFwiXFw+XFw8c3ZnIGNsYXNzPVxcXCJpY29uIGljb24tYXJyb3dcXFwiXFw+XFw8dXNlIHhsaW5rOmhyZWY9XFxcImltZ1xcL3N5bWJvbFxcL3Nwcml0ZS5zdmdcXCNhcnJvd1xcXCJcXD5cXDx1c2VcXC9cXD5cXDxcXC9zdmdcXD5cXDxcXC9kaXZcXD4nLFxuICAgICAgICAgICAgICAgIHByZXZfYnV0dG9uID0gJ1xcPGRpdiBjbGFzcz1cXFwic2xpZGVfYnV0dG9uIG5leHRcXFwiXFw+XFw8c3ZnIGNsYXNzPVxcXCJpY29uIGljb24tYXJyb3dcXFwiXFw+XFw8dXNlIHhsaW5rOmhyZWY9XFxcImltZ1xcL3N5bWJvbFxcL3Nwcml0ZS5zdmdcXCNhcnJvd1xcXCJcXD5cXDx1c2VcXC9cXD5cXDxcXC9zdmdcXD5cXDxcXC9kaXZcXD4nO1xuXG4gICAgICAgICAgICAkKFwiLnNsaWNrLXByZXZcIikuaHRtbChuZXh0X2J1dHRvbik7XG4gICAgICAgICAgICAkKFwiLnNsaWNrLW5leHRcIikuaHRtbChwcmV2X2J1dHRvbik7O1xuXG4gICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSAkKFwiPGRpdiBjbGFzcz0nbWFpbi1zbGlkZXJfX25hdi13cmFwIGNvbnRhaW5lcic+PC9kaXY+XCIpO1xuXG4gICAgICAgICAgICAkKCcubWFpbi1zbGlkZXInKS5hcHBlbmQobmV3QmxvY2spO1xuXG4gICAgICAgICAgICBuZXdCbG9jay5hcHBlbmQoJChcIi5zbGljay1wcmV2XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCIuc2xpY2stbmV4dFwiKSlcblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgICAkKCcubWFpbi1zbGlkZXJfX3dyYXBwZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbi8qXG4gKiBzbGlkZXIgaW4gaW5uZXIgaG9tZSBwYWdlXG4gKi9cblxuIGlmICgkKCcuY2Fyb3VzZWwnKS5sZW5ndGggPj0gMSkge1xuXG4gICAgICAgICQoXCIuc2xpY2stcHJldlwiKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyIG5leHRfYnV0dG9uID0gJ1xcPGRpdiBjbGFzcz1cXFwic2xpZGVfYnV0dG9uIHByZXZcXFwiXFw+XFw8c3ZnIGNsYXNzPVxcXCJpY29uIGljb24tYXJyb3dcXFwiXFw+XFw8dXNlIHhsaW5rOmhyZWY9XFxcImltZ1xcL3N5bWJvbFxcL3Nwcml0ZS5zdmdcXCNhcnJvd1xcXCJcXD5cXDx1c2VcXC9cXD5cXDxcXC9zdmdcXD5cXDxcXC9kaXZcXD4nLFxuICAgICAgICAgICAgICAgIHByZXZfYnV0dG9uID0gJ1xcPGRpdiBjbGFzcz1cXFwic2xpZGVfYnV0dG9uIG5leHRcXFwiXFw+XFw8c3ZnIGNsYXNzPVxcXCJpY29uIGljb24tYXJyb3dcXFwiXFw+XFw8dXNlIHhsaW5rOmhyZWY9XFxcImltZ1xcL3N5bWJvbFxcL3Nwcml0ZS5zdmdcXCNhcnJvd1xcXCJcXD5cXDx1c2VcXC9cXD5cXDxcXC9zdmdcXD5cXDxcXC9kaXZcXD4nO1xuXG4gICAgICAgICAgICAkKFwiLnNsaWNrLXByZXZcIikuaHRtbChuZXh0X2J1dHRvbik7XG4gICAgICAgICAgICAkKFwiLnNsaWNrLW5leHRcIikuaHRtbChwcmV2X2J1dHRvbik7O1xuXG4gICAgICAgICAgICBcblxuICAgICAgICB9KSBcdFxuXG4gICAgICAgICAgJCgnLmNhcm91c2VsX193cmFwcGVyJykuc2xpY2soe1xuXHRcdFx0c2xpZGVzVG9TaG93OiA2LFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRkcmFnZ2FibGU6IGZhbHNlIFxuICAgICAgICAgICAgfSk7XG4gfTtcblxuLypcbiAqIGNvbW1vbiBqcyBmaWxlc1xuICovXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0c3ZnNGV2ZXJ5Ym9keSh7fSk7XG5cblx0Ly8gcGhvbmUgbWFza1xuXHQkKCcjcGhvbmUnKS5tYXNrKFwiKzcgKCA5OTkgKSA5OTkgLSA5OSAtIDk5XCIsIHtwbGFjZWhvbGRlcjpcIl9cIn0pO1xuXG4gICAgLy8gYnV0dG9uIGFjY2VzcyBjaGVja1xuICAgICQoJy5hZ3JlZSBpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLmNhbGxiYWNrIGJ1dHRvbicpLmFkZENsYXNzKCdhY2Nlc3Nfc3VibWl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5jYWxsYmFjayBidXR0b24nKS5yZW1vdmVDbGFzcygnYWNjZXNzX3N1Ym1pdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pICAgXG5cbiAgICAvLyBoYW1idXJnZXItbWVudVxuXG4gICAgICAgICQoJy5oYW1idXJnZXItbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5iYXInKS50b2dnbGVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbW9iaWxlLW1lbnUgbmF2JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSlcbiAgICAvLyB0YWJsZSBsaW5rXG5cbiAgICAkKCd0cltkYXRhLWhyZWZdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcbiAgICB9KTsgICAgXG5cbiAgICAvLyBnZW5wbGFuIG1vYmlsZSBpZnJhbWVcblxuICAgIGlmICgkKCcuZ2VucGxhbicpLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICQoJy5nZW5wbGFuX19tb2JpbGUtbGluaycpLmZhbmN5Ym94KHtcblxuICAgICAgICAgICAgJ3R5cGUnOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIGlmcmFtZSA6e1xuICAgICAgICAgICAgICAgY3NzIDoge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCAgOiAnMzIwcHgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc2Nyb2xsaW5nJzogJ3llcycgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfSAgICAgICAgICAgIFxuXG4gICAgLy8gbmV3cyBwYWdlIGZpbHRlciBzY3JpcHRcblxuICAgIHZhciBmaWx0ZXJfcm93XzEgPSAkKCcubmV3cy1maWx0ZXIgLnJvdzpmaXJzdC1vZi10eXBlIC5jb2wnKSxcbiAgICAgICAgZmlsdGVyX3Jvd18yID0gJCgnLm5ld3MtZmlsdGVyIC5yb3c6bGFzdC1vZi10eXBlIC5jb2wnKTtcbiAgICAgICAgXG4gICAgICAgIGZpbHRlcl9yb3dfMS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZpbHRlcl9yb3dfMS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgZmlsdGVyX3Jvd18yLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZmlsdGVyX3Jvd18yLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KSAgICAgICAgXG5cbiAgICAvLyBuZXdzIHBhZ2UgZmlsdGVyIHNjdGlwdCBvcGVuL2Nsb3NlIFxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9MzIwKSB7XG4gICAgICAgIGZpbHRlcl9yb3dfMS5maXJzdCgpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZmlsdGVyX3Jvd18xLnBhcmVudCgpLmZpbmQoJy53cmFwJykudG9nZ2xlQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9KTsgICAgIFxuICAgICAgICBmaWx0ZXJfcm93XzIuZmlyc3QoKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZpbHRlcl9yb3dfMi5wYXJlbnQoKS5maW5kKCcud3JhcCcpLnRvZ2dsZUNsYXNzKCdvcGVuJylcbiAgICAgICAgfSk7ICAgICAgICAgXG4gICAgfVxuXG5cbn0pO1xuXG4vKlxuICogc3RpY2t5IGhlYWRlclxuICovXG5cbmlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAzMjApIHtcblxuXHQkKCdoZWFkZXInKS5hZGRDbGFzcygnc3RpY2snKTtcblx0dmFyIGRpZFNjcm9sbDtcblx0dmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xuXHR2YXIgZGVsdGEgPSAxMDtcblx0dmFyIG5hdmJhckhlaWdodCA9ICQoJ2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XG5cblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xuXHQgIGRpZFNjcm9sbCA9IHRydWU7XHQgIFxuXHR9KTtcblxuXHRzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0ICBpZiAoZGlkU2Nyb2xsKSB7XG5cdCAgICBoYXNTY3JvbGxlZCgpO1xuXHQgICAgZGlkU2Nyb2xsID0gZmFsc2U7XG5cblx0ICB9XG5cdH0sIDI1MCk7XG5cblx0ZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XG5cdCAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuXHQgIC8vIE1ha2Ugc3VyZSB0aGV5IHNjcm9sbCBtb3JlIHRoYW4gZGVsdGFcblx0ICBpZiAoTWF0aC5hYnMobGFzdFNjcm9sbFRvcCAtIHN0KSA8PSBkZWx0YSlcblx0ICAgIHJldHVybjtcblxuXHQgIC8vIElmIHRoZXkgc2Nyb2xsZWQgZG93biBhbmQgYXJlIHBhc3QgdGhlIG5hdmJhciwgYWRkIGNsYXNzIC5uYXYtdXAuXG5cdCAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28geW91IG5ldmVyIHNlZSB3aGF0IGlzIFwiYmVoaW5kXCIgdGhlIG5hdmJhci5cblx0ICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHN0ID4gbmF2YmFySGVpZ2h0KSB7XG5cdCAgICAvLyBTY3JvbGwgRG93blxuXHQgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1kb3duJykuYWRkQ2xhc3MoJ2hlYWRlci11cCcpO1xuXHQgICQoJy5tb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdCAgJCgnLm1vYmlsZV9tZW51X2ljb24gJykucmVtb3ZlQ2xhc3MoJ2Nsb3NlX2ljb24nKVx0XHQgICAgXG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vIFNjcm9sbCBVcFxuXHQgICAgaWYgKHN0ICsgJCh3aW5kb3cpLmhlaWdodCgpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcblx0ICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci11cCcpLmFkZENsYXNzKCdoZWFkZXItZG93bicpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGxhc3RTY3JvbGxUb3AgPSBzdDtcblx0fVx0XHRcbn0iXX0=
