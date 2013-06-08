$(function($){

	$.fn.uberTable = function(options){
		
		var defaults = {
			attr: {
				class:"uberTable",
				border:0
			},
			titles: null,
			rows: null,
			onComplete : null
		};

		var settings = $.extend({},defaults,options);

		return this.each(function(){

			var wrapper = $(this)

			wrapper.html(_makeTable());

		});

		function _makeTable(){

			var table = $(document.createElement('table'));

			table.attr(settings.attr);

			table.append(_getTitles());
			table.append(_getBody());

			return table;

		}

		function _getTitles(){

			var titles = [];
			var thead = $(document.createElement('thead'));

			for(var key in settings.titles){
				var title = $(document.createElement('th')).text(settings.titles[key]);
				titles.push(title);
			}

			return thead.append(titles);
		}

		function _getBody(){
			var rows = [];
			var tbody = $(document.createElement('tbody'));

			for(var key in settings.rows){
				var row = $(document.createElement('tr'));
				row.append(_getItems(settings.rows[key]));
				rows.push(row);
			}

			return tbody.append(rows);
		}

		function _getItems(data){

			var row = [];

			for(var key in data){
				var item = $(document.createElement('td'));
				item.html(data[key]);
				row.push(item);
			}

			return row;
		}
	};

}(jQuery))