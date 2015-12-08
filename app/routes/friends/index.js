import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: { refreshModel: true },
    sortAscending: { refreshModel: true }
  },
  //
  // Here we are using ES6 syntax for functions!
  // We can use this out of the box with ember-cli
  // thanks to the addon ember-cli-babel
  //
  // To learn more about es6, check http://s.abuiles.com/bwWo
  //
  model(params) {
    return this.store.query('friend', params);
  }
});
