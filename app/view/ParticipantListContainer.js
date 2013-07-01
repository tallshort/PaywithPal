Ext.define("PaywithPal.view.ParticipantListContainer", {
    extend: "Ext.Container",
    xtype: 'participantlistcontainer',
    
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: "toolbar",
                title: '饭友一览',
                docked: "top",
                layout: { pack: 'right' },
                items: [
                    {
                        xtype: "button",
                        text: '新建',
                        ui: 'action',
                        id: "newParticipantBtn"
                    }
                ]
            },
            {
                xtype: "participantlist",
                store: { xtype: "participantstore" },
                id: "participantList"
            }
        ],
        listeners: [{
            delegate: "#newParticipantBtn",
            event: "tap",
            fn: "onNewButtonTap"
        }, {
            delegate: "#participantList",
            event: "disclose",
            fn: "onParticipantListDisclose"
        }]
    },

    onNewButtonTap: function() {
        console.log("newParticipantEvent");
        this.fireEvent("newParticipantEvent", this);
    },

    onParticipantListDisclose: function (list, record, target, index, evt, options) {
        console.log("editParticipantParticipant");
        this.fireEvent('editParticipantEvent', this, record);
    }
});