import Ember from 'ember';

export default Ember.Route.extend({

    // Hier wird die JSON aus dem /public/ Ordner geladen und in die item modele gepackt. Die Item modele werden in eine Array gepusht
    //und zurück gegeben. Durch das EmberJS data-binding müssen nur die modele bearbeitet werden und die Liste aktualisiert sich mit.
    //Für filter etc.
    
    model: function() {
        return this.setupItems();  
    },
    
    
    
    setupItems: function() {
        var result;
            var url = 'files/items.json';
            var that = this;
            result = Ember.$.getJSON(url).then(function(json) {
                
                var items = [];
                
                json.forEach( function (item) {
                    var store = that.get('store');
                    var storeItem = store.createRecord('item', {
                        name: item['name'],
                        type: item['type'],
                        meta: item['meta'],
                        text_type: item['text_type']
                    });
                    items.push(storeItem);
                });
                
                return items;
            });
        return result;
  },
    
    


});
