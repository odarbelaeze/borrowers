import FriendBaseControler from './base';

export default FriendBaseControler.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
