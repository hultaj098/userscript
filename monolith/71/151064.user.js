// ==UserScript==
// @name			Kong Hack
// @namespace		http://konghack.com
// @description		Shows cheats and hacks when playing games at Kongregate.com, Newgrounds.com, ArmorGames.com, or MochiGames.com
// @author        	The Ignorant Masses, kolonelkadat
// @include			http://www.kongregate.com/games/*
// @include			https://www.kongregate.com/games/*
// @include			http://kongregate.com/games/*
// @include			https://kongregate.com/games/*
// @include			http://www.newgrounds.com/portal/view/*
// @include			http://newgrounds.com/portal/view/*
// @include			https://www.newgrounds.com/portal/view/*
// @include			https://newgrounds.com/portal/view/*
// @include			http://www.armorgames.com/play/*
// @include			http://armorgames.com/play/*
// @include			https://www.armorgames.com/play/*
// @include			https://armorgames.com/play/*
// @include			http://www.mochigames.com/game/*
// @include			http://mochigames.com/game/*
// @include			https://www.mochigames.com/game/*
// @include			https://mochigames.com/game/*
// @include			http://www.nitrome.com/games/*
// @include			http://nitrome.com/games/*
// @include			https://www.nitrome.com/games/*
// @include			https://nitrome.com/games/*
// @include			http://www.miniclip.com/games/*
// @include			http://miniclip.com/games/*
// @include			https://www.miniclip.com/games/*
// @include			https://miniclip.com/games/*
// @version			2.1.3
// ==/UserScript==


function addEasyXDM(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "http://konghack.com/embed/easyXDM/easyXDM.js");
    script.addEventListener('load', function() {
      var script = document.createElement("script");
      script.textContent = "(" + callback.toString() + ")();";
      document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

// the guts of this userscript
function main() {
    var MyAPIKey = 'AlmtVcEt7ZvuSbRWROUjtDcwVLHWuNuVYGeKJJ3Gyp1gqI38nNiGhk32WAOgd812';
//FPXjQ=jQuery.noConflict();
const DEBUG		  = false;
const ERROR_TITLE = "KongHack Embed Error::\n";
const URL_EMBED	  = "http://www.konghack.com/embed/game_display.php?api_key="+MyAPIKey+"&game_name="
/*
 *kong constants
 */ 
const KONG_TITLE_LOCATION		= "og:title";
const KONG_ADD_AFTER_ELEMENT_A  = "maingame";
const KONG_ADD_AFTER_ELEMENT_B  = "belowgame_accomplishments";

/*
 *newgrounds constants
 */
const NEWG_HACK_DIV_TITLE		= "HACKS";

const NEWG_TYPE_IDENTIFIER		= "og:type";
const NEWG_TYPE_GAME			= "game";
const NEWG_TITLE_LOCATION		= "title";
const NEWG_TITLE_IDENTIFIER		= "name";
const NEWG_HACKPANEL_TITLE_ID 	= "api_label";
const NEWG_ADD_AFTER_ELEMENT_A  = "flash_pod";//id

const NEWG_HACKPANEL_ID 		= "podcontent";
const NEWG_HACKPANEL_CLASS		= "flash_data_pod";
const NEWG_HACKPANEL_TOP_CLASS  = "podtop";
const NEWG_HACKPANEL_BTM_CLASS  = "podbot";

const NEWG_HACK_CLASS 			= "podcontent";
const NEWG_FULL_HACK_CLASS		= "full_text";
const NEWG_TRUNC_HACK_CLASS 	= "truncated_text";

const NEWG_SHOW_MORE_TXT_BLK	= "show_more_text_block";
const NEWG_SHOW_LESS_BTN_TXT	= "show less";
const NEWG_SHOW_LESS_BTN_CLASS	= "show_less spritegame";
const NEWG_SHOW_MORE_BTN_TXT	= "show more";
const NEWG_SHOW_MORE_BTN_CLASS	= "show_more spritegame";

/*
 *armorgames constants
 */
const ARMOR_TITLE_LOCATION		= "og:title";//class
const ARMOR_ADD_AFTER_ELEMENT_A = "gamearea";//id
const ARMOR_ADD_AFTER_ELEMENT_B = "subgame";//id

/*
 *mochigames constants
 */
const MOCHI_TITLE_LOCATION		= "og:title";//these are all classes....
const MOCHI_ADD_AFTER_ELEMENT_A	= "game-frame-body";
const MOCHI_ADD_AFTER_ELEMENT_B	= "game-frame-footer";

/*
 *nitrome constants
 */
const NITRO_TYPE_IDENTIFIER		= "og:type";
const NITRO_TYPE_GAME			= "game";
const NITRO_TITLE_LOCATION		= 'name';
const NITRO_TITLE_IDENTIFIER		='itemprop';//<meta itemprop="name" content="Swindler">
const NITRO_ADD_BEFORE_ELEMENT	= "iframe#nitromegame";

/*
 *miniclip constants
 */
const MINIC_TYPE_IDENTIFIER		= "og:type";
const MINIC_TYPE_GAME			= "game";
const MINIC_TITLE_LOCATION		= 'og:title';
const MINIC_ADD_AFTER_ELEMENT	= "gameContainer";//div


jOut=function(msg){
	if (DEBUG){
		console.log(msg);
	}
}

FPXgetElementsByClassName = function(cl) {
	var retnode = [];
	var myclass = new RegExp('\\b'+cl+'\\b');
	var elem = document.getElementsByTagName('*');
	for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].className;
		if (myclass.test(classes)) retnode.push(elem[i]);
	}
	return retnode;
}; 

AddElementAfterID = function (newele, placeID){
	var ele=document.getElementById(placeID);
	if(ele == null){
		return null;
	}
	ele.parentNode.FPXinsertAfter(newele, ele);
}
FPXinsertAfter = function(referenceNode, newNode) {
	if(referenceNode.parentNode != null)
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	else
	document.insertBefore(newNode, referenceNode.nextSibling);
}

findTagInID=function (tag, ParentId){
	if(typeof(ParentId == "Undefined")){
		return document.getElementsByTagName(tag)[0];
	}
	return document.getElementById(ParentId).getElementsByTagName(tag)[0];
}

FPXGetTagWithAttributeValue = function(tag, attr, attrv){
	var retnode=[];
	var myclass = new RegExp('\\b'+attrv+'\\b');
	var elem = document.getElementsByTagName(tag);
	for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].getAttribute(attr);
		jOut("[KONGHACK]::{FPX}::"+classes);
		if (myclass.test(classes)) retnode.push(elem[i]);
	}
	return retnode;
}

//KONGRGATE
addKongIframe=function (){
	try{
		var idToAddAfter = (document.getElementById(''+KONG_ADD_AFTER_ELEMENT_A) != null) ? ''+KONG_ADD_AFTER_ELEMENT_A : ''+KONG_ADD_AFTER_ELEMENT_B;	
		var gameTitle = FPXGetTagWithAttributeValue('meta','property',KONG_TITLE_LOCATION)[0].getAttribute("content");
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	var hackDiv = document.createElement('div');
	hackDiv.id = "the_hacks_bro";

	var hackFrame = document.createElement('iframe');
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = window.getComputedStyle(document.getElementById(idToAddAfter),"").getPropertyValue("width");;
	hackFrame.height = '400';
	hackFrame.allowTransparency = 'true';
	hackFrame.style = 'border-radius: 4px 4px 4px 4px;';

	//hackDiv.appendChild(hackFrame);
	FPXinsertAfter(document.getElementById(idToAddAfter),hackDiv);
    new easyXDM.Socket({
        props: {style: {width: "100%"} },
        remote: URL_EMBED + gameTitle + '&scaling=X',
        container: document.getElementById("the_hacks_bro"),
        onMessage: function(message, origin){
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.width =  window.getComputedStyle(document.getElementById(idToAddAfter),"").getPropertyValue("width");
        }
    });
};
//Armor Games
addArmorIframe=function(){
	try{
		var idToAddAfter = (document.getElementById(''+ARMOR_ADD_AFTER_ELEMENT_A) != null) ? ''+ARMOR_ADD_AFTER_ELEMENT_A : ''+ARMOR_ADD_AFTER_ELEMENT_B;	
		var gameTitle = FPXGetTagWithAttributeValue('meta','property',ARMOR_TITLE_LOCATION)[0].getAttribute("content").replace(/(\b[^|]+)\s*\|*.*$/ig,"$1");
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	var hackDiv = document.createElement('div');
	hackDiv.id = "the_hacks_bro";

	var hackFrame = document.createElement('iframe');
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = window.getComputedStyle(document.getElementById(idToAddAfter),"").getPropertyValue("width");;
	hackFrame.height = '400';
	hackFrame.allowTransparency = 'true';
	hackFrame.style = 'border-radius: 4px 4px 4px 4px;';

	hackDiv.appendChild(hackFrame);
	FPXinsertAfter(document.getElementById(idToAddAfter),hackDiv);
};

//Mochi Games
addMochiIframe=function(){

	try{
		var idToAddAfter = (FPXgetElementsByClassName(''+MOCHI_ADD_AFTER_ELEMENT_A)[0] != null) ? ''+MOCHI_ADD_AFTER_ELEMENT_A : ''+MOCHI_ADD_AFTER_ELEMENT_B;	
		var gameTitle = FPXGetTagWithAttributeValue('meta','property',MOCHI_TITLE_LOCATION)[0].getAttribute("content");
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	var hackDiv = document.createElement('div');
	hackDiv.className=MOCHI_ADD_AFTER_ELEMENT_B;
	//hackDiv.style = 'position:relative; margin-left: auto !important;margin-right: auto !important;';
	var hackFrame = document.createElement('iframe');
	//hackFrame;
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = '100%';window.getComputedStyle(FPXgetElementsByClassName(idToAddAfter)[0],"").getPropertyValue("width");
	hackFrame.height = '400';
	hackFrame.allowTransparency = 'true';
	//hackFrame.style = 'position:relative; display:block; border-radius: none;margin-left: auto !important;margin-right: auto !important;';
	

	hackDiv.appendChild(hackFrame);
	FPXinsertAfter(FPXgetElementsByClassName(idToAddAfter)[0],hackDiv);
};
//MiniClip
addMiniIframe=function(){
jOut("[KONGHACK]::{FPX}:: miniclip start");
	try{
		if(FPXGetTagWithAttributeValue('meta','property',MINIC_TYPE_IDENTIFIER)[0].getAttribute("content") != MINIC_TYPE_GAME){return false;}
		var idToAddAfter = MINIC_ADD_AFTER_ELEMENT;	
		var gameTitle = FPXGetTagWithAttributeValue('meta','property',MINIC_TITLE_LOCATION)[0].getAttribute("content");		
		jOut("[KONGHACK]::{FPX}:: miniclip got to 1");
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	var hackDiv = document.createElement('div');
	hackDiv.id = "the_hacks_bro";
	

	var hackFrame = document.createElement('iframe');
	
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = "100%";//window.getComputedStyle(document.getElementById(idToAddAfter)[0],"").getPropertyValue("width");
	hackFrame.height = '400';
	hackFrame.allowTransparency = 'true';
	hackFrame.style = 'border-radius: 4px 4px 4px 4px;';

	hackDiv.appendChild(hackFrame);
	
	FPXinsertAfter(document.getElementById(idToAddAfter),hackDiv);
};
//nitrome
addNitroIframe=function(){

	jOut("doing nitrome");
	try{
		if(FPXGetTagWithAttributeValue('meta','property',NITRO_TYPE_IDENTIFIER)[0].getAttribute("content") != NITRO_TYPE_GAME){return false;}
		var idToAddAfter = NITRO_ADD_BEFORE_ELEMENT;	
		var gameTitle = FPXGetTagWithAttributeValue('meta',NITRO_TITLE_IDENTIFIER,NITRO_TITLE_LOCATION)[0].getAttribute("content");		
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	var hackDiv = document.createElement('div');
	hackDiv.id = "the_hacks_bro";
	

	var hackFrame = document.createElement('iframe');
	
	jOut("doing nitrome got here");
	var hackDiv = document.createElement('div');
	hackDiv.id = "the_hacks_bro";
	var hackFrame = document.createElement('iframe');
	hackFrame.id="hackpane";
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = '692';
	hackFrame.height = '400';
	hackFrame.allowTransparency = 'true';

	hackDiv.appendChild(hackFrame);
	
	FPXinsertAfter(document.getElementById(idToAddAfter),hackDiv);
	document.getElementById("#new_block_game_right").style.display= "none";
	////

};

//Newgrounds
addBeforeAuthorCommentsAndMedals=function(){

	jOut("doing newgrounds");
	try{
		if(FPXGetTagWithAttributeValue('meta','property',NEWG_TYPE_IDENTIFIER)[0].getAttribute("content") != NEWG_TYPE_GAME){return false;}
		var idToAddAfter = NEWG_ADD_AFTER_ELEMENT_A;	
		var gameTitle = FPXGetTagWithAttributeValue('meta',NEWG_TITLE_IDENTIFIER,NEWG_TITLE_LOCATION)[0].getAttribute("content");		
	}catch(err){
		jOut(ERROR_TITLE+err.toSource());
		return false;
	}
	
	var hackPanel = document.createElement('div');
	hackPanel.id = NEWG_HACKPANEL_ID;
	//hackPanel.className = NEWG_HACKPANEL_CLASS;
		
	var hackTitle = document.createElement('h2');
	hackTitle.id = NEWG_HACKPANEL_TITLE_ID;
	hackTitle.innerHTML = NEWG_HACK_DIV_TITLE;
	
	var top = document.createElement('div');
	top.className = NEWG_HACKPANEL_TOP_CLASS;
	top.appendChild(hackTitle);
	top.appendChild(document.createElement('div'));
	
	var box = document.createElement('div');
	box.className = NEWG_HACK_CLASS;//content goes in here
	
	var innerBox = document.createElement('div');
	innerBox.className = 'boxr';
	
	var innerInnerBox = document.createElement('div');
	innerInnerBox.className = 'boxm';
	
	var bottom = document.createElement('div');
	bottom.className = NEWG_HACKPANEL_BTM_CLASS;
	bottom.appendChild(document.createElement('div'));

	
	
	var hackFrame = document.createElement('iframe');
	hackFrame.src = URL_EMBED + gameTitle;
	hackFrame.width = '100%';
	hackFrame.height = '400';
	//hackFrame.style = 'border-radius: 4px 4px 4px 4px;';
			
	var hacksContainer1 = document.createElement('div');
	hacksContainer1.id = "game_hacks";
	hacksContainer1.className = "boxsizer";
	//hacksContainer1.appendChild(hackFrame);
	
	innerInnerBox.appendChild(hacksContainer1);
	innerBox.appendChild(innerInnerBox);
	box.appendChild(innerBox);
	
	hackPanel.appendChild(top);
	hackPanel.appendChild(box);
	hackPanel.appendChild(bottom);

	try{
		FPXinsertAfter(document.getElementById(idToAddAfter),hackPanel);
         new easyXDM.Socket({
            props: {style: {width: "100%"} },
            remote: URL_EMBED + gameTitle + '&scaling=X',
            container: document.getElementById("game_hacks"),
            onMessage: function(message, origin){
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].style.width =  window.getComputedStyle(document.getElementById(idToAddAfter),"").getPropertyValue("width");
            }
        });
	}catch(error){
		jOut(ERROR_TITLE+error.toSource());
	}	
};


//site selection logic
		jOut("[KONGHACK]::{FPX}:: miniclip load"+document.domain);
	if(document.domain == 'www.kongregate.com' || document.domain == 'kongregate.com'){
		addKongIframe();
	}
	if(document.domain == 'www.newgrounds.com' || document.domain == 'newgrounds.com'){
		addBeforeAuthorCommentsAndMedals();
	}
	if(document.domain == 'www.armorgames.com' || document.domain == 'armorgames.com'){
		addArmorIframe();
	}
	if(document.domain == 'www.mochigames.com' || document.domain == 'mochigames.com'){
		addMochiIframe();
	}
	if(document.domain == 'www.nitrome.com' || document.domain == 'nitrome.com'){
		addNitroIframe();
	}
	if(document.domain == 'www.miniclip.com' || document.domain == 'miniclip.com'){
		addMiniIframe();
	}
}
addEasyXDM(main);