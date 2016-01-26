$(document).ready( function(){
	
	// Form Toggles
	$('.toggle').toggles({
		on : true,
		width: 50, // width used if not set in css
  		height: 20, // height if not set in css
	});
	
	
	$('.demo-options-icon').click(function(){
		$(".demo-options").toggleClass("active");
	});
	$('.fixedTop').click(function(){
		var lastClass = $('header').attr('class').split(' ').pop();
		$("header").removeClass(lastClass);
		$("header").toggleClass("navbar-fixed-top");
		$("header").addClass(lastClass);
	});
	$('.themecolor').click(function(){
		var result = $(this).attr('class').split(' ');
		var lastClass = $('header').attr('class').split(' ').pop();
		if(lastClass != 'navbar-fixed-top'){
			$("header").removeClass(lastClass);
		}
		$("header").addClass(result[1]);
	});
});
	