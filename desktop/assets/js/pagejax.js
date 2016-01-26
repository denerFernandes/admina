$(document).ready(function() {

	autoLoadPage();

	$(document).on("click", "a[data-pagejax], button[data-pagejax]", function(e) {
		e.preventDefault();
		var pageto = $(this).attr('data-pageto');
		var page = $(this).attr('href');
		pageLoad(pageto, page);
	});
	$(document).on("submit", "form[data-pagejax]", function(e) {
	
			e.preventDefault();
			var data = $(this).serialize();
			var action = $(this).attr('action');
			var method = $(this).attr('method');
			var pageto = $(this).attr('data-pageto');
			submitForm(data, action, method, pageto);

	});
});
function pageLoad(pageto, page) {
	$(pageto).empty();
	$(pageto).load(page);
}
function submitForm(data, action, method, pageto) {

	$.ajax({
		type : method,
		url : action,
		dataType : "html",
		data : data,
		success : function(data) {
			$(pageto).empty();
			$(pageto).html(data);
		},
		error: function() {
			alert('erro');
		}
	});
}
function autoLoadPage(){

    var page = $( "[data-pagejax]" ).attr( "data-pagejax" );
   
    if(page != "" || page != "undefined"){
    	var id = $('div[data-pagejax]').attr('id');
    	var page = $('div[data-pagejax]').attr('data-pagejax');
    	$('#'+id).load(page);
    }
}
