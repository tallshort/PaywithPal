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
            },
            eventForm: {
                saveEventEvent: "saveEvent",
                backToHomeEvent: "backToHome",
                deleteEventEvent: "deleteEvent"
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

    deleteEvent: function() {
        console.log("deleteEvent");
        var that = this;
        Ext.Msg.confirm('确认', '您确认删除吗?', function(e) {
           if (e == "yes") {
                var eventForm = that.getEventForm();
                var currentEvent = eventForm.getRecord();
                var eventStore = Ext.getStore("eventStore");
                eventStore.remove(currentEvent);
                eventStore.sync();
                that.activateEventList();
             }
         });
    },

    saveEvent: function() {
        console.log("saveEvent");
        var eventForm = this.getEventForm();
        var currentEvent = eventForm.getRecord();
        var newValues = eventForm.getValues();
        currentEvent.set('title', newValues.title);
        currentEvent.set('expense', newValues.expense);
        currentEvent.set('date', newValues.date);
        if (currentEvent.isValid()) {
            var eventStore = Ext.getStore("eventStore");
            if (null == eventStore.findRecord('id', eventStore.data.id)) {
                eventStore.add(currentEvent);
            }
            eventStore.sync();
            eventStore.sort([{ property: 'date', direction: 'DESC'}]);
            this.activateEventList();
        } else {
            currentEvent.reject();
            Ext.Msg.alert('Validation', "Please correct the invalid inputs.", Ext.emptyFn);
        }
    },

    activateEventList: function() {
        Ext.Viewport.animateActiveItem(this.getEventListContainer(), { type: 'slide', direction: 'right' });
    },

    backToHome: function() {
        this.activateEventList();
    }

});