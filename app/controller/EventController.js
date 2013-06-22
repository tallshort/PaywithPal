 Ext.define('PaywithPal.controller.EventController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            eventListContainer: "eventlistcontainer",
            eventForm: "eventform"
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
        var now = new Date();
        var newEvent = Ext.create("PaywithPal.model.Event", {
            id: this.generateEventId(now),
            date: now
        });
        this.activateEventForm(newEvent);
    },

    generateEventId: function(now) {
        return now.getTime() + this.getRandomInt(0, 100);
    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    activateEventForm: function (record) {
        var eventForm = this.getEventForm();
        eventForm.setRecord(record);
        Ext.Viewport.animateActiveItem(eventForm, { type: 'slide', direction: 'left' });
    },

    editEvent: function(list, record) {
        console.log("editEvent: " + record);
        this.activateEventForm(record);
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