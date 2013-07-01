Ext.define('PaywithPal.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 
            { name: 'title', type: 'string', defaultValue: "晚饭"}, 
            { name: 'expense', type: 'int', defaultValue: 10 }, 
            { name: 'date', type: 'date' }
        ],

        idProperty: 'id',
        identifier: {
            type: 'uuid'
        },

        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' },

        validations: [{
            type: 'presence', field: 'title', message: 'Please enter a title for this event.'
        }, {
            type: 'presence', field: 'expense'            
        }, {
            type: 'presence', field: 'date'            
        }]
    },

    addPayment: function(participant, amount) {

    },

    getNumberOfParticipants: function() {

    }

});