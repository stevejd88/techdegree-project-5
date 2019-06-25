//lightbox
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});


//search box
$('.search-field').keyup(function() {
  var value = $(this).val();
  var exp = new RegExp(value, 'i');

    $('a').each(function() {
        var isMatch = exp.test($(this).attr('title'));
        $(this).parent().toggle(isMatch);
    });
});
