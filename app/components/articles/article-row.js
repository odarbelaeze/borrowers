import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,        // Should be passed in
  articleStates: null,  // Should be passed in
  actions: {
    saveArticle() {
      let article = this.get('article');
      alert('Oh');
      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
