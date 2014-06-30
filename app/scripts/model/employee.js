App.Employee = DS.Model.extend({
  name: DS.attr('string'),
  role: DS.attr('string'),
  links: DS.attr('object')
});
