Ext.define('PaywithPal.model.Allocation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            { name: 'actualPay', type: 'integer', defaultValue: 0 },
            { name: 'shouldPay', type: 'integer', defaultValue: 0 } 
        ],

        idProperty: 'id',
        identifier: {
            type: 'uuid'
        },
        
        proxy: {
        },
        belongsTo: { model: 'PaywithPal.model.Partcipant', name: 'owner' }
    },

    addShouldPay: function(amount) {
        this.set('shouldPay', this.get('shouldPay') + amount);
    },

    getRemainPay: function() {
        return (this.get('shouldPay') - this.get('actualPay'));
    }

});