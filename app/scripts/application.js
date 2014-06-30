'use strict';

var App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api/v1'
});

require('./router')(App);
require('./model/employee')(App);
