Ext.define('PaywithPal.model.Allocation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            { name: 'actualPay', type: 'integer', defaultValue: 0 },
            { name: 'shouldPay', type: 'integer', defaultValue: 0 },
            { name: 'eventId' },
            { name: 'participantId' }
        ],

        idProperty: 'id',
        identifier: {
            type: 'uuid'
        },
        belongsTo: { model: 'PaywithPal.model.Event', name: 'event', foreignKey: 'eventId' },
        belongsTo: { model: 'PaywithPal.model.Partcipant', name: 'owner', foreignKey: 'participantId' }
    },

    addShouldPay: function(amount) {
        this.set('shouldPay', this.get('shouldPay') + amount);
    },

    getRemainPay: function() {
        return (this.get('shouldPay') - this.get('actualPay'));
    }

});