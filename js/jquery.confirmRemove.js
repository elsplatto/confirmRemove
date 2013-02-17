(function ($) {
	"use strict";
	$.fn.confirmRemove = function (optionsList) {
		var defaults, options, obj, confirmHTML;
		obj = $(this);
		defaults = {
			targetClass: 'holder',
			confirmShellClass: 'confirm',
			confirmQuestion: 'Are you sure?',
			confirmButtonText: 'Yes',
			confirmButtonDefaultClass: 'btnConfirm',
			confirmButtonClasses: '',
			cancelButtonText: 'Cancel',
			cancelButtonDefaultClass: 'btnCancel',
			cancelButtonClasses: '',
			hideOnClick: true,
			htmlURL: null
		};
		options = $.extend(defaults, optionsList);
				
		if (options.htmlURL === null) {
			confirmHTML = '<div class="' + options.confirmShellClass + '">';
			confirmHTML += '<p>' + options.confirmQuestion + '</p>';
			confirmHTML += '<a href="#" class="' + options.confirmButtonDefaultClass + ' ' + options.confirmButtonClasses + '">' + options.confirmButtonText + '</a>';
			confirmHTML += '<a href="#" class="' + options.cancelButtonDefaultClass + '  ' + options.cancelButtonClasses + '">' + options.cancelButtonText + '</a>';
			confirmHTML += '</div>';
		}
				
		obj.on('click', function (e) {
			var targetEl;
			e.preventDefault();
			if (options.hideOnClick) {
				$(this).hide();
			}
			targetEl = $(this).closest('.' + options.targetClass);
			$(targetEl).append(confirmHTML);
			
			$('.' + options.cancelButtonDefaultClass).on('click', function (e) {
				e.preventDefault();
				$(this).closest('.' + options.confirmShellClass).remove();
				obj.show();
			});
			
			$('.' + options.confirmButtonDefaultClass).on('click', function (e) {
				e.preventDefault();
				$(targetEl).remove();
			});
		});
	};
})(jQuery);
