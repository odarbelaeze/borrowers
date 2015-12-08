import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  queryParams: ['showReturned'],
  showReturned: true,
  filteredResults: Ember.computed('showReturned', {
    get() {
      if (this.get('showReturned')) {
        return this.get('model');
      }
      return this.get('model').filterBy('state', 'borrowed');
    }
  }),
  actions: {
    toggleReturned: function() {
        this.toggleProperty('showReturned');
        return false;
    }
  }
});
