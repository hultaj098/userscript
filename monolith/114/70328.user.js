// ==UserScript==
// @name          Agash's 2 Script
// ==/UserScript==
try {
  var wpdivs = document.getElementsByTagName('div');
  for (var i=0; i<wpdivs.length; i++) {
    if (wpdivs[i].id == 'wpdc_embed_12675578971') {
      wpdivs[i].innerHTML = "<div style=\"width: 265px; height: 200px;\"><iframe\nsrc=\"http://www.widgipedia.com/widgets/DCA-Busines" +
"s/YouTube-Search-e1263-32768_134217728.widget?__install_id=1267557897195&amp;__view=embed\" framebord" +
"er=\"0\" width=\"265\" height=\"200\" style=\"border: 1px solid black; padding: 0px; margin: 0px; width: 26" +
"5px; height: 200px;\" scrolling=\"no\" onload=\"document.body.style.margin=document.body.style.padding=\'" +
"0px\';\"></iframe></div><img src=\"http://www.widgipedia.com/images/g" +
"lobal/embed_12675580051u_1263w.gif\" width=\"1\" height=\"1\" alt=\"\" style=\"display: none\" border=\"0\">";
;
      wpdivs[i].style.display = '';
    }
  }
} catch(e) {}