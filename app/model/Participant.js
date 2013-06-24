Ext.define('PaywithPal.model.Participant', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 
             { name: 'name', type: 'string' },
             { name: 'email', type: 'string' }, 
             { name: 'phone', type: 'string' }
        ],

        idProperty: 'id',
        identifier: {
            type: 'uuid'
        },

        validations: [{
            type: 'presence', field: 'name'
        }, {
            type: 'presence', field: 'email'            
        }, {
            type: 'presence', field: 'phone'            
        }],

        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' }
    }

});
