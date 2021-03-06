var GMSU_meta_70976 = <><![CDATA[
// ==UserScript==
// @name          Travian troop auto trainer
// @namespace     Travian_troop_builder
// @author        FDisk
// @description   For single fillage. Automaticly refreshing the page and building all troops
// @include       http://*.travian.*/*
// @exclude       http://forum.travian.*
// @version       0.2.2
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @require       http://userscripts.org/scripts/source/51513.user.js
// @history       1.2.2 Ping Pong
// @history       1.2.1 Impruved timers. Fixed redirects and refreshes
// @history       1.2 Ping Pong
// @history       1.1.9 Testing update script
// @history       1.1.8 Testing update script
// @history       1.1.7 Changed default values.
// @history       1.1.6 Added new script update system.
// ==/UserScript==
]]></>;

//Check for updates
GMSU.init(70976);

var debuger = false;

//The main script
$(function(){

	//Main script window

	var userID = getUserID();
	var villageID = getVillage();
	var scriptIsOn = load_data('troop_builder_on',false);

	//Loading settings
	var troops_to_build = load_data('troops_to_build','');
	troops_to_build = troops_to_build.split(',');
	if (troops_to_build instanceof Array)
		debug(troops_to_build);
	else
		troops_to_build = new Array(0,0,0,0);

	var troop_types = load_data('troop_builder_troops','');
	troop_types = troop_types.split(',');

	if (troop_types instanceof Array)
		debug(troop_types);
	else
		troop_types = new Array();



	dialog_message = '<h2><a href="http://userscripts.org/scripts/show/70976" target="_blank">Travian troop auto trainer</a></h2>The script is '+(!scriptIsOn?'stopped':'working')+'.<span class="countdown" style="display:block"></span><a href="#" id="stop_the_script" onclick="return false">Click here to '+(!scriptIsOn?'start':'stop')+'</a>'+(debuger?'<hr />':'<br />');
	dialog(dialog_message);

	if (troop_types.length > 0 && troop_types[0] != '') {
		$(troop_types).each(function(index){
			$('#script_dialog_content').append('<label><img src="img/x.gif" class="'+troop_types[index]+'" /><input type="checkbox" value="'+index+'" name="unit" class="troop_types check" '+(troops_to_build[index]!=0?'checked="checked"':'')+' /></label>&nbsp;');
		});
	}
	else {
		if (load_data('types_checked',false) == false) {
			//First time use? - detect troop types
			if (getUrl() == 'build.php?gid=19') {
				buildTroops();
				save_data('types_checked',true)
			}
			else {
				redirect('build.php?gid=19');
			}
		}
	}
	$('.troop_types').click(function(){
		var saving_troops = new Array();
		$('.troop_types').each(function(){
			saving_troops.push($(this).attr('checked')?1:0);
		});
		save_data('troops_to_build',saving_troops.toString());
	});
	//Check if crop is increasing
	if (scriptIsOn && checkRes()) {

		//barracks
		if (getUrl() == 'build.php?gid=19') {
			checkBarracks();
			buildTroops();
		}
		//Main building
		else if (getUrl() == 'build.php?gid=15') {
			//upgrade main building
			var upgrademain = $('#contract a[href^="dorf2.php?"]');
			if (upgrademain.length > 0) {
				redirect($('#contract a[href^="dorf2.php?"]').attr('href'));
			} else {
				debug('Nothing to upgrade. Redirecting...');
				redirect("http://"+location.host+"/dorf1.php");
			}
		}
		else if (getUrl() == 'dorf1.php') {
			startTimer();
		}
		else if (getUrl().split('build.php?id=')[1] > 0) {
			debug('trying to build barracks');

			//Get barracks build link
			var barraks = $('#build a[href^="dorf2.php?a=19"]');

			if (barraks.length > 0) {
				redirect($(barraks).attr('href'));
			} else {
				//Check if rally point exists
				var rallypoint = $('#build a[href^="dorf2.php?a=16"]');
				if (rallypoint.length > 0) {
					debug('redirecting to build rally point');
					redirect($(rallypoint).attr('href'));
				} else {
					//check if main building needs to be upgraded
					var mainbuilding = $('#build a[href^="dorf2.php?a=15"]');
					if (mainbuilding.length > 0) {
						//try to build main building if its destroied
						debug('redirecting to build main building');
						redirect($(mainbuilding).attr('href'));
					} else {
						//try upgrade main building
						debug('redirecting to upgrade main building');
						redirect("build.php?gid=15");
					}
				}
			}
		}
		else if (getUrl().split('dorf2.php?a=')[1]) { //http://speed.travian.lv/dorf2.php?a=19&id=36&c=490) dorf2.php?a=16&id=38&c=dc2
			redirect("http://"+location.host+"/dorf1.php");
		}
		else if (getUrl() == 'build.php') {
			debug('Redirecting');
			redirect("http://"+location.host+"/dorf1.php");
		} else if (getUrl() == 'dorf2.php') {
			redirect("http://"+location.host+"/dorf1.php");
		}
	}

	function getUrl() {
		return window.location.href.split( '/' )[3];
	}
	function getUrlParam( name , url) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		if (!url)
			var results = regex.exec( getUrl() );
		else
			var results = regex.exec( url );
		if( results == null )
			return "";
		else
			return results[1];
	}

	function getTroopName(data) {
		return $.trim($('.ico img',data).attr('alt'));
	}

	function getTroopType(data) {
		return $.trim($('.ico img',data).attr('class').split(' ').slice(-1).toString());
	}

	function getTroopsCount(data) {
		return prepare($('.num',data).text());
	}

	function checkRes() {
		debug('Checking resources');
		return prepare($('#l1').attr('title')) > 0;
	}

	function buildTroops() {
		var build = $('#build');
		var save_troop_types = new Array();
		$('form .build_details tbody tr td.max',build).each(function(index){
			//which type of troops to build
			if (troops_to_build[index] == 1) {
				$(this).prev().find('input').val(Math.round(prepare($(this).text())/3));
			}

			//Save troop types
			save_troop_types.push($(this).prev().prev().find('img.unit').attr('class'));
		});

		save_data("troop_builder_troops",save_troop_types.toString());
		
		if (troop_types.length > 0 && troop_types[0] != '') {
			$.post($('form',build).attr('action'),$('form',build).serialize(),function(){
				redirect("http://"+location.host+"/dorf1.php");
			});
		}
		//redirect if timeout
		debug('Building troops: '+troop_types.toString());
		redirect("http://"+location.host+"/dorf1.php",60);
	}

	function prepare(str) {
		return parseInt(str.replace(/[^\d]/g, ""));
	}

	function startTimer() {
		var mins = 6*Math.floor(Math.random()*60);
		debug('Building troops after: ~'+Math.floor(mins/60)+'min.');
		$('span.countdown').countdown({
			seconds: mins,
			callback: "location.href = 'build.php?gid=19'"
		});
	}

	function checkBarracks() {
		debug('Checking barracks');
		if ($('#selecttraintroops').lenght > 0)
			return true;
		else {
			$('#map2 area').each(function(){
				if ($(this).attr('coords').split(',').length == 8) {
					//trying to build barracks
					redirect($(this).attr('href'));
				}
			});
			return false;
		}
	}

	function redirect(url,mins) {
		if (typeof mins == 'undefined')
			mins = Math.floor(Math.random()*61)*1000;
		else
			mins = mins * 1000;

		debug('Redirecting to '+url+' after '+Math.floor(mins/1000)+' sec.');

		if (mins > 0)
			if (redirect)
				clearTimeout(redirect);
			else
				var redirect = window.setTimeout(function(){location.href = url},mins);
		else
			location.href = url;
	}

	function debug(s) {
		if (debuger) {
			$('#script_dialog_content').append('<div>'+s+'</div>');
			console.log(s);
		}
	}

	function dialog(message) {
		var html = "<div id=\"script_dialog\"></div>";
		$('#side_info').prepend(html);
		var dialog = $('#script_dialog');
		dialog.css({
			'-moz-border-radius':'12px 12px 12px 12px',
			'background':'none repeat scroll 0 0 rgba('+(!scriptIsOn?'0':'255')+', 0, 0, 0.45)',
			'overflow':'hidden',
			'padding':'9px'
		});

		dialog.append('<div id="script_dialog_content">'+message+'</div>');
		$('#script_dialog_content').css({
			'-moz-border-radius':'4px 4px 4px 4px',
			'background':'none repeat scroll 0 0 white',
			'padding':'10px',
			'text-align':'center'
		});
		$('#stop_the_script').click(function(){
			if (!scriptIsOn)
				save_data('troop_builder_on',true)
			else
				save_data('troop_builder_on',false);
			redirect('dorf1.php',0);
		});
	}

	function save_data(string,data) {
		debug('saving data: '+string+' -> '+data);
		return GM_setValue(location.host+getUserID()+villageID+'_'+string,data);
	}

	function load_data(string,data) {
		debug('loading data: '+string);
		return GM_getValue(location.host+getUserID()+villageID+'_'+string,data);
	}
	
	function getUserID() {
		if (typeof userID == "undefined") {
			left_menu = $('div#side_navi');
			userID = prepare($('a[href^=spieler.php?uid=]',left_menu).attr('href').split("uid=")[1]);
		}
		return userID
	}

	function getVillage() {
		if (typeof villageID == "undefined") {
			villageList = $('#vlist');
			villageID = prepare(getUrlParam('newdid',$('.hl',villageList).next().find('a').attr('href')));
		}
		return villageID;
	}


});
jQuery.fn.countdown = function(options) {
	if(!options) options = '()';
	if(jQuery(this).length == 0) return false;
	var obj = this;

	if(options.seconds < 0 || options.seconds == 'undefined') {
		if(options.callback) eval(options.callback);
		return null;
	}
	window.setTimeout(
		function() {
			var lvTime = new Date(0,0,0,0,0,0);
			lvTime.setSeconds(options.seconds);
			jQuery(obj).html('Training troops after: '+lvTime.getMinutes()+':'+lvTime.getSeconds()+' <a href="build.php?gid=19">Run Now</a>');
			--options.seconds;
			jQuery(obj).countdown(options);
		}
		, 1000
		);

	return this;
}
jQuery.fn.countdown.stop = function() {
	window.clearTimeout(setTimeout("0")-1);
}