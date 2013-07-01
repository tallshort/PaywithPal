Ext.define('PaywithPal.store.ParticipantStore', {
    extend: 'Ext.data.Store',
    xtype: 'participantstore',
    requires: [
        'PaywithPal.model.Participant'
    ],
    config: {
        model: 'PaywithPal.model.Participant',
        storeId: 'participantStore',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id: 'participants-local-storage'
        },
        sorters: [{ property: 'name', direction: 'DESC'}]
    }
});