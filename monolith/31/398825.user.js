// ==UserScript==
// @name          Old-school BSN CSS Mod
// @description   Modifies the new BSN forum CSS with darker, less eye-bleedy styles
// @include       http://forum.bioware.com/*
// @version       2014.2.26
// @grant         none
// ==/UserScript==

var headTag = document.getElementsByTagName('head')[0],
	styleTag = document.createElement('style');

styleTag.type = 'text/css';
styleTag.innerHTML = "a {color:#aaa;}"
				   + "body {font-size:13px;background-color:#000;background-image:url(http://lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/social/images/themes/masseffect3/female_background.jpg) !important;}"
				   + "#content {line-height: 140%;}"
				   + "table.ipb_table td {border-bottom:1px solid #444;}"
				   + "#featured_pane {border:1px solid #555;}"
				   + "#footer_utilities {border-color:#888;}"
				   + "#user_navigation a#user_link.menu_active,#user_navigation a#notify_link.menu_active,#user_navigation a#inbox_link.menu_active,#user_link_menucontent,.ipsHeaderMenu {background-color:#555;}"
				   + ".bar {color:#fff;background-color:#555;border:none !important;}"
				   + ".content_border {border:1px solid #333;}"
				   + ".post_body .post,blockquote.ipsBlockquote {font-size:13px;}"
				   + ".ipsBox,.row1,.row2,.general_box {background-color:#333;}"
				   + ".ipsSideBlock h3,.general_box h3 {color:#fff;background-color:#555;border:1px solid #555;}"
				   + ".ipsBox_container {border:none;}"
				   + ".ipsList_data li {border-bottom:1px solid #222}"
				   + ".ipsVerticalTabbed_tabs > ul {border-top:1px solid #333;border-left:1px solid #333;}"
				   + ".ipsVerticalTabbed_tabs li.active a {background-color:#bebebe;}"
				   + ".ipsVerticalTabbed_tabs li a {color:#aaa;}"
				   + ".ipsVerticalTabbed_tabs li {background-color:#555;border-bottom:1px solid #333}"
				   + "body,.pagination .page a,.pagination .back a,.pagination .forward a,.pagination a,.ipsType_pagetitle,#admin_bar a {color:#888;}"
				   + "#mainContent,#ips_Posts,.ipsBox_container,.post_block,.column_view .post_body,.post_body,.post,.entry-content {background:#222 !important;}"
				   + ".maintitle,.ipbfs_titlebox,.post_controls,blockquote,#admin_bar,.ipsSideBlock,#groupNav,.pagination a {background-color:#333 !important;border:1px solid #333 !important;}"
				   + ".post_block h3 {background-color:#555 !important;border:1px solid #555 !important;}"
				   + "ul.post_controls a {color:#888 !important;text-shadow:none !important;border-left:1px solid #222 !important;}"
				   + "ul.post_controls li.report a,ul.post_controls li.top a {border-right:1px solid #222 !important;border-left:none !important;}"
				   + "p.citation {text-shadow:none !important;color:#aaa !important;background-color:#555 !important;border:1px solid #555 !important;}"
				   + ".ipsLikeButton,.ipsLikeBar_info {color:#aaa;background-color:#555;}"
				   + ".block_list li:last-child,li.hentry:last-child {border-bottom:none !important;}"
				   + ".signature {border-top:1px solid #333;}"
				   + ".ipsButton_secondary,.topic_buttons li a,.input_submit,.pagination .pages li.active {background-image:none;background-color:#888;color:#fff;text-shadow:none; !important;border-color:#888}"
				   + ".download_pane h2, li.hentry, recentajaxcontent li, #idm_categories a, #idm_categories li.with_sub.open li, #index_stats .status_list li, #panel_files .file_listing li, #panel_screenshots #ss_linked li, .file_listing, #cart_totals td, div#member_filters li, #files li, .ipsType_sectiontitle, #order_review td, #package_details .package_info, .block_list li, .package_view_top, .member_entry, #help_topics li, .ipsBox_container .ipsType_pagetitle, .userpopup dl, #announcements td, .sideVerticalList li, fieldset.with_subhead ul, .ipsList_data li, .ipsList_withminiphoto li, .ipsList_withmediumphoto li, table.ipb_table td, .store_categories li, #mini_cart li, #index_stats div[id*='statusReply'], #ipg_category .ipg_category_row, .block_inner .ipb_table td, .gallery_pane h2, .status_feedback li[id*='statusReply'], .ipsSideMenu ul li, #usercp_content .ipsType_subtitle, .ipbfs_login_row, .articles .block-1, .articles .type-1x2x2 .article_row, #idm_category .idm_category_row, #category_list li a, .ipsComment, #forum_table.ipb_table tr:last-of-type td {border-bottom:1px solid #555;}";
				   
headTag.appendChild(styleTag);

var tdElems = document.getElementsByTagName('td');

for (var i = 0; i < tdElems.length; i++) {
	var tdStyle = tdElems[i].style.borderLeft;
	console.log(tdStyle);
	if (tdStyle == '1px solid rgb(221, 221, 221)') {
		tdElems[i].style.borderLeft = '1px solid #555';
	}
}