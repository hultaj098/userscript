// ==UserScript==
// @name			Ekşi Sözlük black theme
// @author			taek
// @version			30
// @description  	ekşi sözlük teması
// @include      	http*://eksisozluk*
// @copyright		free stylo
// @homepage		http://userscripts.org/scripts/show/293389
// @updateURL		http://userscripts.org/scripts/source/293389.user.js		
// @downloadURL		http://userscripts.org/scripts/source/293389.user.js
// @run-at 			document-end
// ==/UserScript==
function futfutfutfreestylo(css) {
	var parent = document.getElementsByTagName("head")[0];
	if (!parent) {
		parent = document.documentElement;
	}
	var style = document.createElement("style");
	style.type = "text/css";
	var textNode = document.createTextNode(css);
	style.appendChild(textNode);
	parent.appendChild(style);
};
futfutfutfreestylo(" \
body {background-color:#073642 !important; color:#eee8d5 !important;}\
a {color:#b58900 !important;}\
html.no-touch a:hover{color:white !important; background-color:#586e75 !important;}\
#site-footer{display: none !important;}\
#videos{display: none !important;}\
.sub-title-menu #topic-share-menu{background-color: #002b36 !important;}\
.dropdown .dropdown-menu{border:1px solid #e3e3e3 !important; background-color: #002b36 !important;}\
#in-topic-search-options{background-color: #002b36 !important; border:1px solid #e3e3e3 !important;}\
.share-dialog{background-color: #002b36 !important;}\
#aside{display: none !important;}\
#content-body{width: 99% !important;}\
#index-section{width: 300px !important;}\
#main{margin-left: 315px !important;}\
body>header{background-color:#073642 !important;}\
#sub-navigation{background-color:#073642 !important;}\
.topic-list li>a.sponsored{display:none !important;}\
h1,h2,h3,h4,h5,h6{color:white !important;}\
small{color:#dc322f !important;}\
html.no-touch .topic-list li>a:hover{background-color:#586e75 !important;}\
#stats li .value{color:#dc322f !important;}\
fieldset legend{color:#586e75 !important; font-size:1em !important; #586e75 !important;}\
#channel-follow-list li>p{color:#859900 !important;}\
html.no-touch #channel-follow-list li:hover{background-color:#586e75 !important;}\
.topic-list .seperator span{background-color:red !important; color: white !important; padding:0 10px 0 10px !important;}\
html.no-touch a.more-data:hover{background-color:#586e75 !important;}\
time{color:#444444 !important;}\
#top-bar>#advanced-search-form{border:1px solid #e3e3e3 !important; background-color:#002b36 !important; color: yellow !important; left:20% !important;}\
.tabs{background-color:#586e75 !important;}\
#entry-list>li:before{border-bottom:1px solid #859900 !important; color:#859900 !important;}\
.sub-title-menu #topic-share-menu>.toggles:after,.sub-title-menu #topic-research-menu .toggles:after,.sub-title-menu #in-topic-search-menu>.toggles:after{border-top:4px solid white !important;}\
#container{width:95% !important; max-width:95% !important;}\
html>body>header #top-bar{width: 95% !important;}\
.ad-bannersublogo{display: none !important;}\
.ads{display: none !important;}\
.ad-medyanet{display:none !important;}\
.ad-bannersublogo{display:none !important;}\
.ad-theme-visual-inner{display:none !important;}\
.ad-theme-visual-home{display:none !important;}\
html.no-touch #partial-index::-webkit-scrollbar{width:15px !important;}\
#entry-list .hidden,#entry-list .deleted{background-color:#073642 !important;}\
html.no-touch #partial-index{padding-right:30px !important;}\
input,select,textarea{color:black !important;}\
section,aside,article,ul,ol,nav,blockquote{margin-bottom:0px !important;}\
.topic-list li{border-top:1px solid #e3e3e3 !important;}\
.more-data{border:1px solid #e3e3e3 !important;}\
fieldset legend{border-bottom:1px solid #e3e3e3 !important;}\
input[type=text],input[type=email],input[type=search],input[type=datetime],input[type=date],input[type=time],input[type=password],select,textarea{border:1px solid #e3e3e3 !important;}\
.pager>a{border:1px solid #e3e3e3 !important;}\
.edittools{border-color:#e3e3e3 !important;}\
.pager{color:#e3e3e3 !important;}\
.dropdown .dropdown-menu li.separated{border-top:1px solid #e3e3e3 !important;}\
.ui-autocomplete{background-color:#002b36 !important; border:1px solid #e3e3e3 !important;}\
\ ");
var silinecektheme = document.getElementById("adtheme");
silinecektheme.parentNode.removeChild(silinecektheme);
var elmDeleted2 = document.getElementsByClassName("sponsored");
elmDeleted2.parentNode.removeChild(elmDeleted2);