// ==UserScript==
// @name          	MyBrute Captcha Bypass
// @namespace      	http://mybrute.forumotion.com/
// @version        	1.0.0
// @author        	MSox - Modified by Sioc
// @description    	Removes captcha for given brutes on MyBrute LaBrute ElBrute MeinBrutalo.
// @include         http://*.meinbrutalo.de/
// @include         http://*.labrute.fr/
// @include         http://*.mybrute.com/
// @include         http://*.elbruto.es/
// ==/UserScript==

//*************************************************************************************************************************************
// SEE http://mybrute.forumotion.com/cheats-scripts-f13/release-mybrute-captcha-bypass-t9334.htm for instructions on how to set this up
//*************************************************************************************************************************************

(function(){

   //Getting the brute URL name and defining the keys when there are less than 100 pupils
   var thebrute=document.location.host
   var includedpage='1';
   switch(thebrute){
      //*************************************************************************************************************************
	  // TO BE EDITED BY THE USER
	  //*************************************************************************************************************************
      case 'thelegendnk.meinbrutalo.de':
         thekey='oy2%3A_cfy2%3A_hy11%3Athelegendnky2%3A_mi6284369g&k=7fca4b6c&bv';
         break;
      case 'zokr.meinbrutalo.de':
         thekey='oy2%3A_cfy2%3A_hy4%3Azokry2%3A_mi6476787g&k=074ccb6c&bv';
         break;
      case 'zokstmsjfh.meinbrutalo.de':
         thekey='oy2%3A_cty2%3A_hy10%3Azokstmsjfhy2%3A_mi8638171g&k=47cb2b6c&bv';
         break;
      case 'mmlc02vemzky.meinbrutalo.de':
         thekey='oy2%3A_cfy2%3A_hy12%3Ammlc02vemzkyy2%3A_mi1347649g&k=aaea4b6c&bv';
         break;
	  //*************************************************************************************************************************
      // END OF USER EDIT
      //************************************************************************************************************************* 
	  default:
		 includedpage='-1';
		 break;
   }
   
   //Getting the server with suffix
   var srv=document.location.host.match(/.+\.(.+)\..+/)[1];
   var theurl=srv;
   var v1='1';
   var v2='1';
   var lng='en';
   switch(srv){
      case 'mybrute':
         theurl=theurl+'.com';
         v1='18';
         v2='22';
         lng='en';
         break;
      case 'labrute':
         theurl=theurl+'.fr';
         v1='17';
         v2='22';
         lng='fr';
         break;
      case 'elbruto':
         theurl=theurl+'.es';
         v1='18';
         v2='22';
         lng='es';
         break;
      case 'meinbrutalo':
         theurl=theurl+'.de';
         v1='17';
         v2='22';
         lng='de';
   }

   //Captcha bypass
   var e = document.getElementById('swf_create_form');
   if(includedpage=='1'){if(e)
      e.innerHTML='<embed type="application/x-shockwave-flash" src="http://data.'+theurl+'/swf/uc.swf?v='+v1+'" id="create_form" name="create_form" bgcolor="#FAF8C3" quality="high" menu="false" wmode="transparent" allowscriptaccess="always" flashvars="__file=http://data.'+theurl+'/swf/create_form_versus.swf?v='+v2+'&__key=http://data_labrute_fr/swf_key&lang='+lng+'&path=http://data.'+theurl+'/swf/&lang='+lng+'&i='+thekey+'bv=http://data.'+theurl+'/img/'+lng+'/btn_valb.gif&bvo=http://data.'+theurl+'/img/'+lng+'/btn_valb_over.gif" scale="noscale" height="380" width="250">'
	}
         
})();