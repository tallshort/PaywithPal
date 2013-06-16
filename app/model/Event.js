Ext.define('PaywithPal.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 
            { name: 'name', type: 'string' }, 
            { name: 'expense', type: 'integer' }, 
            'date'
        ],
        proxy: {
            type: 'rest',
            url : 'data/events',
            reader: {
                type: 'json',
                root: 'events'
            }
        },
        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' }
    },

    addPayment: function(participant, amount) {

    },

    getNumberOfParticipants: function() {

    }

});