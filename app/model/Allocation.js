Ext.define('PaywithPal.model.Allocation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            { name: 'actualPay', type: 'integer' },
            { name: 'shouldPay', type: 'integer' } 
        ],
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