'use strict';

module.exports = function(App) {
	App.Router.map(function() {
		this.resource('employee');
	});

	App.IndexRoute = Ember.Route.extend({
		beforeModel: function() {
			this.transitionTo('employee');
		}
	});

	App.EmployeeRoute = Ember.Route.extend({
		model: function() {
			return this.store.findAll('employee');
		}
	});
};
