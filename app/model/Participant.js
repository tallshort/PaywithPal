Ext.define('PaywithPal.model.Participant', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name', 'email', 'phone'],
        proxy: {
        },
        hasMany: { model: 'PaywithPal.model.Allocation', name: 'allocations' }
    }

});