import FriendBaseControler from './base';

export default FriendBaseControler.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends');
      return false;
    }
  }
});
