// ==UserScript==
// @name           Flash Quality Changer
// @namespace      *
// @description    Flash Quality Changer
// @include        *
// ==/UserScript==

(function(){
 var quality = "medium"; 
 var force = true; //Overrides existing settings

 addEventListener("DOMContentLoaded", function(){
	 var embeds = document.evaluate("//embed[@type='application/x-shockwave-flash']", document, null, XPathResult.ANY_TYPE, null);

	 var embed = embeds.iterateNext();
	 while(embed){
		if(force || !embed.getAttribute("quality")){
			newEmbed = embed.cloneNode(false);
			newEmbed.setAttribute("quality", quality);
			embed.outerHTML = newEmbed.outerHTML;
		}
		embed = embeds.iterateNext();
	 }
}, false);
})();