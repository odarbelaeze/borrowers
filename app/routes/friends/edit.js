import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  },
});
