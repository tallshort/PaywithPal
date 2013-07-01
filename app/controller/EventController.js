 Ext.define('PaywithPal.controller.EventController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            eventListContainer: "eventlistcontainer",
            eventForm: "eventform",
            main: "main"
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
        var newEvent = Ext.create("PaywithPal.model.Event", {
            date: new Date()
        });
        this.activateEventForm(newEvent);
    },

    activateEventForm: function (eventRecord) {
        var eventForm = this.getEventForm();
        eventForm.setRecord(eventRecord);
        eventForm.clearAllocations();
        allocations = Ext.getStore("allocationStore").queryBy(function(allocationRecord) {
            return allocationRecord.get("eventId") == eventRecord.get("id");
        });
        allocations.each(function(allocation) {
            eventForm.addAllocationFormItem(allocation.get("participantId"), allocation.get("actualPay"));
        });
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
            if (null == eventStore.getById(currentEvent.get("id"))) {
                eventStore.add(currentEvent);
            }
            eventStore.sync();
            
            // Remove old allocations
            var allocationStore = Ext.getStore("allocationStore");
            var oldAllocations = Ext.getStore("allocationStore").queryBy(function(allocationRecord) {
                return allocationRecord.get("eventId") == currentEvent.get("id");
            });
            allocationStore.remove(oldAllocations.items);

            // Save new allocations
            var participantIds = newValues["participantId[]"];
            var actualPays = newValues["actualPay[]"];
            Ext.Array.each(participantIds, function(value, index) {
                allocationStore.add(Ext.create("PaywithPal.model.Allocation", {
                    participantId: value,
                    eventId: currentEvent.get('id'),
                    actualPay: actualPays[index]
                }));
            });
            allocationStore.sync();

            this.activateEventList();
        } else {
            currentEvent.reject();
            Ext.Msg.alert('Validation', "输入有非法值，请更正。", Ext.emptyFn);
        }
    },

    activateEventList: function() {
        Ext.Viewport.animateActiveItem(this.getMain(), { type: 'slide', direction: 'right' });
    },

    backToHome: function() {
        this.activateEventList();
    }

});