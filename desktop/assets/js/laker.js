/**
 * @author seta
 */
$(document).ready(function(){
	$(document).keyup(function(e) {
  		if (e.keyCode == 27){
  			showAppList();
  		}
	});
	$('.start a').click(function(){
		showAppList();
	});
	
	$('.apps-block').perfectScrollbar({
				suppressScrollX : !0
		});
});
function showAppList(){
	$('.app-list').toggle();
	$('.menu-bar .start a.menu-icon').toggleClass('active');
	$('.app-list #searchApp').val('');
    $('.app-list #searchApp').focus();
    return false;
}
