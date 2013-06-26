 Ext.define('PaywithPal.controller.AllocationController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            eventForm: "eventform"
        }, 
        control: {
            eventForm: {
                addAllocationEvent: "addAllocation"
            }
        }
    },

    init: function() {
        this.callParent();
        console.log("init allocation controller");
    },

    launch: function() {
        this.callParent();
        console.log("launch allocation controller");
    },

    addAllocation: function() {
        console.log("addAllocation");
    }

});