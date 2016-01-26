jQuery(document).ready(function() {
	$('.wysihtml5').wysihtml5();

	$('.summernote').summernote({
		height : 200, // set editor height

		minHeight : null, // set minimum height of editor
		maxHeight : null, // set maximum height of editor

		focus : true // set focus to editable area after initializing summernote
	});

}); 