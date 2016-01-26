$(document).ready( function(){
	
	new subMenu();
	
	$("aside.left-panel:not(.collapsed)").niceScroll({
			cursorcolor : "#8e909a",
			cursorborder : "0px solid #fff",
			cursoropacitymax : "0.5",
			cursorborderradius : "0px"
	});
	
	$('.navbar-toggle').click(function(){
		$("aside.left-panel").toggleClass("collapsed");
		if($("aside.left-panel nav.navigation > ul > li.active > ul").is(":visible")){
			$("aside.left-panel nav.navigation > ul > li.active > ul").hide();
		}else{
			$("aside.left-panel nav.navigation > ul > li.active > ul").show();
		}
		$(".nav-text").toggle();
	});
	$('[data-toggle="remove"]').click(function(){
		$(this).closest('.portlet').remove();
	});
	$('[data-toggle="reload"]').click(function(){
		
		$(this).closest('.portlet').append('<div class="panel-reload"><div class="loader-1"></div></div>');
		var t = $(this).closest('.portlet').find(".panel-reload");
		setTimeout(function() {
				t.fadeOut("fast", function() {
					t.remove()
				})
			}, 500 + 1500 * Math.random())
			
	});
	$('[data-toggle="expand"]').click(function(){
		
		$(this).closest('.portlet').toggleClass('expand');
		if($('.blackground').is(":visible")){
			$('.blackground').remove();
		}else{
			$('body').append('<div class="blackground"></div>');
		}	
	});
	$(document).on("click", ".blackground" , function() {
		$('.portlet.expand').removeClass('expand');
		$('.blackground').remove();
	});
	
	$('.btn-message').click(function(){
		sendMessage();
	});
	$('.chat-input').keypress(function(e) {
    if (e.which == 13) {
      		//e.preventDefault();
      		sendMessage();
    	}
  	});
	
	$(".nicescroll").niceScroll({
			cursorcolor : "#8e909a",
			cursorborder : "0px solid #fff",
			cursoropacitymax : "0.5",
			cursorborderradius : "0px"
	});
	
	

});
function subMenu(){
	$("aside.left-panel nav.navigation > ul > li:has(ul) > a").click(function(){

		if(!$("aside.left-panel").hasClass("collapsed")){
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass("active");
				$(this).next().slideUp(300);
			}else{
				$("aside.left-panel nav.navigation > ul > li > ul").slideUp(300),
				$("aside.left-panel nav.navigation > ul > li").removeClass("active");
				$(this).next().slideToggle(300, function() {
					$("aside.left-panel:not(.collapsed)").getNiceScroll().resize()
				}),
				$(this).closest("li").addClass("active");
			}
		}
	
		$("aside.left-panel:not(.collapsed)").niceScroll({
			cursorcolor : "#8e909a",
			cursorborder : "0px solid #fff",
			cursoropacitymax : "0.5",
			cursorborderradius : "0px"
		});
		
	});
}
function sendMessage(){
	var message = $('.chat-input').val();
	var now = new Date();
   	var outStr = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
	var msg = '<li class="clearfix odd">'+
                 '<div class="chat-avatar">'+
                 	'<img src="assets/img/avatar-3.jpg" alt="male">'+
                 	'<i>'+outStr+'</i>'+
                  '</div>'+
                  '<div class="conversation-text">'+
                 	'<div class="chat-message">'+
                 	'<i>Ray Shannon</i>'+
                 	'<p>'+
                  		message+
                  	' </p>'+
                  	'</div>'+
                  '</div>'+
              '</li>';
         $('.conversation-list').append(msg);
         $(".conversation-list").scrollTop($(".conversation-list").prop("scrollHeight"));
         $('.chat-input').val('');
}
