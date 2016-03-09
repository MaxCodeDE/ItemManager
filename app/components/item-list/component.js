import Ember from 'ember';

export default Ember.Component.extend({
    
    
    suche: '',
    items: null,
    
    itemsText: function() {
        if (this.get('suche') !== '') {
            return 'Suche nach: ' + this.get('suche');
        } else {
            return 'Items: ';
        }
    }.property('suche'),
    
    
    willInsertElement: function() {
        this.filter();
    },
    
    
    filter: function() {
            var that = this;
            var items = this.store.peekAll('item');
            var suche = this.get('suche').toLowerCase();
            var filteredModels = [];
            items.forEach(function(item) {
                var name = item.get('name').toLowerCase();
                if (name.indexOf(suche) >= 0) {
                    filteredModels.push(item); 
                    console.log('Suche: ' + that.get('suche') + ' Item: ' + item.get('name'));
                }
            });
            this.set('items', filteredModels);
        
    }.observes('suche')
    
    
    
});
