Ext.define('PaywithPal.view.AllocationFormItem', {
    extend: 'Ext.Container',
    xtype: 'allocationformitem',
    requires: [
        'Ext.field.Number',
        'Ext.field.Select'
    ],
    config: {
        margin: "0.5em",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: "selectfield",
                store: "participantStore", 
                displayField: "name", 
                valueField: "id",
                name: "participantId[]",
                itemId: "participantSelectField",
                flex: 3,
            },
            {
                xtype: "numberfield",
                flex: 1,
                margin: "0 0.5em",
                placeHolder: "分担金额",
                minValue: 0,
                value: 0,
                name: "actualPay[]",
                itemId: "actualPayField"
            },
            {
                xtype: "button",
                flex: 1,
                text: "删除",
                itemId: "deleteAllocationBtn"
            }
        ],
        listeners: [{
            delegate: "#deleteAllocationBtn",
            event: "tap",
            fn: "onDeleteAllocationButtonTap"
        }]
    },

    setAllocation: function(participantId, actualPay) {
        this.getComponent("participantSelectField").setValue(participantId);
        this.getComponent("actualPayField").setValue(actualPay);
    },

    onDeleteAllocationButtonTap: function() {
        this.getParent().remove(this, true);
    }
});