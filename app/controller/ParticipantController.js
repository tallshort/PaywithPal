 Ext.define('PaywithPal.controller.ParticipantController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            participantListContainer: "participantlistcontainer",
            participantForm: "participantform",
            main: "main"
        }, 
        control: {
            participantListContainer: {
                newParticipantEvent: "newParticipant",
                editParticipantEvent: "editParticipant"
            },
            participantForm: {
                saveParticipantEvent: "saveParticipant",
                backToHomeEvent: "backToHome",
                deleteParticipantEvent: "deleteParticipant"
            }
        },
        routes: {
            
        }
    },

    init: function () {
        this.callParent();
        console.log("init participant controller");
    },

    launch: function () {
        this.callParent();
        Ext.getStore("participantStore").load();
        console.log("launch participant controller");
    },

    newParticipant: function() {
        console.log("newParticipant");
        var newParticipant = Ext.create("PaywithPal.model.Participant");
        this.activateParticipantForm(newParticipant);
    },

    activateParticipantForm: function (record) {
        var participantForm = this.getParticipantForm();
        participantForm.setRecord(record);
        Ext.Viewport.animateActiveItem(participantForm, { type: 'slide', direction: 'left' });
    },

    editParticipant: function(list, record) {
        console.log("editParticipant: " + record);
        this.activateParticipantForm(record);
    },

    deleteParticipant: function() {
        console.log("deleteParticipant");
        var that = this;
        Ext.Msg.confirm('确认', '您确认删除吗?', function(e) {
           if (e == "yes") {
                var participantForm = that.getParticipantForm();
                var currentParticipant = participantForm.getRecord();
                var participantStore = Ext.getStore("participantStore");
                participantStore.remove(currentParticipant);
                participantStore.sync();
                that.activateParticipantList();
             }
         });
    },

    saveParticipant: function() {
        console.log("saveParticipant");
        var participantForm = this.getParticipantForm();
        var currentParticipant = participantForm.getRecord();
        var newValues = participantForm.getValues();
        currentParticipant.set('name', newValues.name);
        currentParticipant.set('email', newValues.email);
        currentParticipant.set('phone', newValues.phone);
        if (currentParticipant.isValid()) {
            var participantStore = Ext.getStore("participantStore");
            if (null == participantStore.findRecord('id', participantStore.data.id)) {
                participantStore.add(currentParticipant);
            }
            participantStore.sync();
            participantStore.sort([{ property: 'name', direction: 'DESC'}]);
            this.activateParticipantList();
        } else {
            currentParticipant.reject();
            Ext.Msg.alert('Validation', "输入有非法值，请更正。", Ext.emptyFn);
        }
    },

    activateParticipantList: function() {
        Ext.Viewport.animateActiveItem(this.getMain(), { type: 'slide', direction: 'right' });
    },

    backToHome: function() {
        this.activateParticipantList();
    }

});