'use strict';

module.exports = function(App) {
	App.Router.map(function() {
	this.resource('employee');
});

	App.EmployeeRoute = Ember.Route.extend({
		model: function() {
			return this.store.find('employee');
	}
});
};


