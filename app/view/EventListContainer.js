Ext.define("PaywithPal.view.EventListContainer", {
    extend: "Ext.Container",
    xtype: 'eventlistcontainer',
    
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: "toolbar",
                title: '活动列表',
                docked: "top",
                layout: { pack: 'right' },
                items: [
                    {
                        xtype: "button",
                        text: '新建',
                        ui: 'action',
                        id: "newEventBtn"
                    }
                ]
            },
            {
                xtype: "eventlist",
                store: { xtype: "eventstore" },
                id: "eventList"
            }
        ],
        listeners: [{
            delegate: "#newEventBtn",
            event: "tap",
            fn: "onNewButtonTap"
        }, {
            delegate: "#eventList",
            event: "disclose",
            fn: "onEventListDisclose"
        }]
    },

    onNewButtonTap: function() {
        console.log("newEventEvent");
        this.fireEvent("newEventEvent", this);
    },

    onEventListDisclose: function (list, record, target, index, evt, options) {
        console.log("editEventEvent");
        this.fireEvent('editEventEvent', this, record);
    }
});