Ext.define('PaywithPal.store.EventStore', {
    extend: 'Ext.data.Store',
    xtype: 'eventstore',
    requires: [
        'PaywithPal.model.Event'
    ],
    config: {
        model: 'PaywithPal.model.Event',
        storeId: 'eventStore',
        proxy: {
            type: 'localstorage',
            id: 'events-local-storage'
        },
        sorters: [{ property: 'date', direction: 'DESC'}]
    }
});