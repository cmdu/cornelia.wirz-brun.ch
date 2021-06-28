$(document).ready(function () {
	$("li a, #portrait").on('click', function (e) {
		//- prevent default behaviour of the anchor tag
		e.preventDefault();
		//- save the data attribute for the anchor tag that was clicked
		var page = $(this).data('page');
		$("header, main, footer").fadeOut('fast', function () {
			$(this).addClass('rockbottom');
			$('#pages .page[data-page="' + page + '"]').fadeIn('fast').removeClass('hide');
			$('#pages .page[data-page="' + page + '"]').on('click', function () {
				$(this).fadeOut('fast', function () {
					$('header, main, footer').fadeIn('fast').removeClass('rockbottom');
				});
			});
		});
	});
});