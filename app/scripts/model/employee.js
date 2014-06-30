'use strict';

module.exports = function(App) {
	App.Employee = DS.Model.extend({
  	name: DS.attr(),
  	role: DS.attr()
	});
};
