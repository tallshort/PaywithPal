Ext.define("PaywithPal.view.EventListContainer", {
    extend: "Ext.Container",
    xtype: 'eventlistcontainer',

    initialize: function () {

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'Event List',
            docked: "top",
            layout: { pack: 'right' },
            items: [
                newButton
            ]
        };

        var eventList = {
            xtype: "eventlist",
            store: Ext.getStore("eventStore"),
            listeners: {
                disclose: { fn: this.onEventListDisclose, scope: this }
            }
        };

        this.add([topToolbar, eventList]);
    },
    
    onNewButtonTap: function() {
        console.log("newEventEvent");
        this.fireEvent("newEventEvent", this);
    },

    onEventListDisclose: function (list, record, target, index, evt, options) {
        console.log("editEventEvent");
        this.fireEvent('editEventEvent', this, record);
    },

    config: {
        layout: {
            type: 'fit'
        }
    }
});