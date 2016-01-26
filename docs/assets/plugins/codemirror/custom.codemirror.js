$( document ).ready(function() {
	var outVal = [];
$('textarea').each(function(idx, el){
    outVal.push($(this).attr('id'));
});

	jQuery.each( outVal, function( i, val ) {
		editor(val);
	});
});
function editor(id)
{
    CodeMirror.fromTextArea( document.getElementById(id), {
        height: "350px",
        parserfile: "parsexml.js",
        stylesheet: "css/xmlcolors.css",
        path: "js/",
        continuousScanning: 500,
        lineNumbers: true
    });
}