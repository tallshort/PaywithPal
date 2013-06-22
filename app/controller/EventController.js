 Ext.define('PaywithPal.controller.EventController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            eventListContainer: "eventlistcontainer"
        }, 
        control: {
            eventListContainer: {
                newEventEvent: "newEvent",
                editEventEvent: "editEvent"
            }
        },
        routes: {
            
        }
    },

    init: function () {
        this.callParent();
        console.log("init event controller");
    },

    launch: function () {
        this.callParent();
        Ext.getStore("eventStore").load();
        console.log("launch event controller");
    },

    newEvent: function() {
        console.log("newEvent");
    },

    editEvent: function(list, record) {
        console.log("editEvent: " + record);
    },

    deleteEvent: function(id) {
        console.log("deleteEvent: " + id);
    },

    showEvent: function(id) {
        console.log("showEvent: " + id);
    },

    showEvents: function() {
        console.log("showEvents");
    }

});