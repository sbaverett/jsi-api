'use strict';

module.exports = function(App) {
	App.Router.map(function() {
		this.resource('employee');
		this.route('boss', { path: 'employee/:employee_id'});
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

	App.BossRoute = Ember.Route.extend({
		model: function(params) {
			return this.store.find('employee', params.employee_id);
		}
	});
};
