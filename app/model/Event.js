Ext.define('PaywithPal.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 
            { name: 'name', type: 'string', defaultValue: "dinner"}, 
            { name: 'expense', type: 'int', defaultValue: 0 }, 
            { name: 'date', type: 'date' }
        ],
        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' },
        validations: [{
            type: 'presence', field: 'name'
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