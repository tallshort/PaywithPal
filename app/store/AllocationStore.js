Ext.define('PaywithPal.store.AllocationStore', {
    extend: 'Ext.data.Store',
    xtype: 'allocationstore',
    requires: [
        'PaywithPal.model.Allocation',
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: 'PaywithPal.model.Allocation',
        storeId: 'allocationStore',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id: 'allocations-local-storage'
        },
        sorters: [{ property: 'id', direction: 'ASC'}]
    }
});