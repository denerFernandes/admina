$(document).ready(function(){
	new loadApps();
	
	$(document).on("click", ".app-menu" , function() {
		var id 	 = $(this).attr('dataId');
		var page 	 = $(this).attr('dataPage');
		var title 	 = $(this).attr('dataTitle');
		var icon 	 = $(this).attr('dataIcon');
		var theme 	 = $(this).attr('dataTheme');
		$('.app-list').hide();
		$('.menu-bar .start a.menu-icon').removeClass('active');
		openApp(id, page, title, icon, theme);
	});
	$(document).on("click", ".app-minus" , function() {
		var id 	 = $(this).attr('dataId');
		miniminizeApp(id);
	});
	$(document).on("click", ".app-close" , function() {
		var id 	 = $(this).attr('dataId');
		closeApp(id);
	});
	$(document).on("click", ".menu-icon" , function() {
		var id 	 = $(this).attr('dataId');
		clickMenuBar(id);
	});
	$('#searchApp').keyup(function () {
		searchApp();
	});
	$('.content, .apps-bar, .clock-bar, .app-menu, .menu-icon a').click(function(){
		
		loadApps();
		$('.app-list').hide();
		$('.menu-bar .start a.menu-icon').removeClass('active');
	});
	$('.min-apps').click(function(){
		$('.app-window').hide();
	});
	$(".fullscreen").on("click", function(e) {
		if (screenfull.enabled) {
        	// We can use `this` since we want the clicked element
        	screenfull.toggle();
    	}
	});
});

function openApp(id, page, title, icon, theme){
	var test = $('.app-window').is('#app-'+ id);
	if(test == true){
		$('#app-'+id).effect( "bounce", {times:2}, 100 );
	}
	else{
		
		var appWindow = '<div class="app-window" id="app-'+id+'">'+
					'<div class="app-header '+theme+'">'+
						'<i class="fa '+icon+'"></i> '+title+
						'<div class="action-window">'+
							'<span class="app-minus" dataId="'+id+'"><i class="fa fa-minus"></i></span>'+
							'<span class="app-close" dataId="'+id+'"><i class="fa fa-times"></i></span>'+
						'</div>'+
					'</div>'+
					'<div class="app-content"></div>'+
				'</div>';

		var appMenu = '<a class="menu-icon '+theme+'" href="#" id="bar-'+id+'" dataId="'+id+'"> <i class="fa '+icon+'"></i> </a>';
		
		$('.app-window').hide();		
		$('#apps').append(appWindow);
		$("#app-"+id+" .app-content").load('apps/'+id+'/'+page);
		$('.app-window').zIndex(1200);
		$('#app-'+id).zIndex(1201);
		$('.apps-bar').append(appMenu);
	}
	
}
function closeApp(id){
	$('#app-'+id).remove();
	$('#bar-'+id).remove();
}
function miniminizeApp(id){
	$('#app-'+id).hide();
}
function clickMenuBar(id){
	if ($('#app-'+ id).is( ":hidden" )){
		$('.app-window').zIndex(1200);
		$('#app-'+id).zIndex(1201);
		$('.app-window').hide();
		$('#app-'+id).show();
	}else{
		$('.app-window').zIndex(1200);
		$('#app-'+id).zIndex(1201);
		if($('#app-'+ id).is( ":hidden" )){
			$('#app-'+id).show();
		}else{
			$('#app-'+id).hide();
		}
	}
}
function loadApps(){
	$.ajax({
    url: "apps/apps.json",
    context: this,
    error: function () {},
    dataType: 'json',
    success : function (response) {
    		$('.apps-block').empty();
	        $.each(response.app, function (index, app) {
	        	$('head').append('<link rel="stylesheet" type="text/css" href="apps/'+app.id+'/css/'+app.id+'.css">');
	        	
			    var btnApp = '<div class="app-menu '+ app.col +'" dataPage="'+app.page+'" dataId="'+app.id+'" dataTitle="'+app.title+'" dataIcon="'+ app.icon +'" dataTheme="'+ app.theme +'">'+
			        '<div class="app-menu-container '+ app.theme +'">'+
					'<div class="app-icon">'+
						'<i class="fa '+ app.icon +'"></i>'+
					'</div>'+
					'<div class="app-title">'+
						app.title+
					'</div>'+
					'</div>'+
				'</div>';
				$('.apps-block').append(btnApp);
			});
		 }
	  });
}
function searchApp(){
	
			
			var word = $('#searchApp').val().toUpperCase();

		$.ajax({
    url: "apps/apps.json",
    context: this,
    error: function () {},
    dataType: 'json',
    success : function (response) {
    	    $('.apps-block').empty();
	        $.each(response.app, function (i, app) {
	        	if (app.title.toUpperCase().search(new RegExp(word)) != -1) {
	        	
			    var btnApp = '<div class="app-menu '+ app.col +'" dataPage="'+app.page+'" dataId="'+app.id+'" dataTitle="'+app.title+'" dataIcon="'+ app.icon +'" dataTheme="'+ app.theme +'">'+
			        '<div class="app-menu-container '+ app.theme +'">'+
					'<div class="app-icon">'+
						'<i class="fa '+ app.icon +'"></i>'+
					'</div>'+
					'<div class="app-title">'+
						app.title+
					'</div>'+
					'</div>'+
				'</div>';
				$('.apps-block').append(btnApp);
			}
			
			});
		 
	  }
	 });
	     	

}