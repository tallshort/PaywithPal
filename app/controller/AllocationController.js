 Ext.define('PaywithPal.controller.AllocationController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            eventForm: "eventform"
        }, 
        control: {
            
        }
    },

    init: function() {
        this.callParent();
        console.log("init allocation controller");
    },

    launch: function() {
        this.callParent();
        console.log("launch allocation controller");
    }

});