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
        
        proxy: {
        },
        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' }
    }

});