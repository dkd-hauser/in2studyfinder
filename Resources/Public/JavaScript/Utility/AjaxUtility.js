define([],function(){"use strict";var t={ajaxCall:function(t,e,a){var n=new XMLHttpRequest;n.onreadystatechange=function(){1===this.readyState&&e(),4===this.readyState&&200===this.status&&a(this)},n.open("GET",t,!0),n.send()}};return t});