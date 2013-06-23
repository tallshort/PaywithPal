Ext.define('PaywithPal.store.ParticipantStore', {
    extend: 'Ext.data.Store',
    xtype: 'participantstore',
    requires: [
        'PaywithPal.model.Participant'
    ],
    config: {
        model: 'PaywithPal.model.Participant',
        storeId: 'participantStore',
        data: [
            {name: "Jian Zhang", email: "tallshort@gmail.com", phone: "13810820375"},
            {name: "Jian Zhang 2", email: "tallshort@gmail.com", phone: "13810820375"},
            {name: "Jian Zhang 3", email: "tallshort@gmail.com", phone: "13810820375"},
            {name: "Jian Zhang 4", email: "tallshort@gmail.com", phone: "13810820375"}
        ],
        sorters: [{ property: 'name', direction: 'DESC'}]
    }
});