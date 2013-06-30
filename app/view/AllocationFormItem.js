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
                flex: 3,
            },
            {
                xtype: "numberfield",
                flex: 1,
                margin: "0 0.5em",
                placeHolder: "分担金额",
                minValue: 0,
                value: 0,
                name: "actualPay[]"
            },
            {
                xtype: "button",
                flex: 1,
                text: "删除"
            }
        ]
    }
});