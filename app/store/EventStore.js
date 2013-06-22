Ext.define('PaywithPal.store.EventStore', {
    extend: 'Ext.data.Store',
    xtype: 'eventstore',
    requires: [
        'PaywithPal.model.Event'
    ],
    config: {
        model: 'PaywithPal.model.Event',
        storeId: 'eventStore',
        data: [
            { title: "Dinner 1", expense: 100, date: new Date() },
            { title: "Dinner 2", expense: 100, date: Ext.Date.add(new Date(), Ext.Date.DAY, 1) },
            { title: "Dinner 3", expense: 100, date: Ext.Date.add(new Date(), Ext.Date.DAY, 2) },
            { title: "Dinner 4", expense: 100, date: Ext.Date.add(new Date(), Ext.Date.DAY, 3) },
            { title: "Dinner 5", expense: 100, date: Ext.Date.add(new Date(), Ext.Date.DAY, 4) }
        ],
        sorters: [{ property: 'date', direction: 'DESC'}]
    }
});