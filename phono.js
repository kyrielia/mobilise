;(function ($, window, document, undefined) {
	var pluginName = "phono",
		defaults = {};
	
	function Phono(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this._defaults = defaults;
		this.init();
	}
	
	Phono.prototype = {
		init: function() {
			// will insert stuff here
		}
	};
	
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName))
				$.data(this, "plugin_" + pluginName, new Phono(this, options));
			}
		});
	};
})(jQuery, window, document);