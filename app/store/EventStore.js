Ext.define('PaywithPal.store.EventStore', {
    extend: 'Ext.data.Store',
    xtype: 'eventstore',
    requires: [
        'PaywithPal.model.Event'
    ],
    config: {
        model: 'PaywithPal.model.Event',
        storeId: 'eventStore',
        autoLoad: true,
        sorters: [{
            property: 'date',
            direction: 'ASC'
        }],
        proxy: {
            type: 'memory'
        }
    }
});