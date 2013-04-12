;(function ($, window, document, undefined) {
	var pluginName = "mobilise",
		defaults = {};
	
	function Mobilise(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		
		this._name = pluginName;
		this._defaults = defaults;
		this.init();
	}
	
	Mobilise.prototype = {
		init: function() {
			if (this.isMobileBrowser()) {
				var element = $(this.element);
		
				var phoneNumber = element.text();
				noSpacesNumber = phoneNumber.replace(/\s+/g, "");
			
				element.html("<a href=\"tel:" + noSpacesNumber + "\">" + phoneNumber + "</a>");	
			}
		},
		
		isMobileBrowser: function() {
			return true;
		}
	};
	
	$.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Mobilise(this, options));
            }
        });
    };
})(jQuery, window, document);