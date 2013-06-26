Ext.define('PaywithPal.view.EventForm', {
    extend: 'Ext.form.Panel',
    xtype: 'eventform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.DatePicker',
        'Ext.field.Select'
    ],
    config: {
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "编辑活动",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "返回",
                        id: "homeBtn"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "保存",
                        id: "saveEventBtn"
                    }
                ]
            },
            { 
                xtype: "fieldset",
                title: "基本信息",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: '标题',
                        required: true
                    },
                    {
                        xtype: 'numberfield',
                        name: 'expense',
                        label: '费用',
                        minValue: 1,
                        stepValue: 1,
                        required: true
                    },
                   {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: '日期',
                        dateFormat: 'D d M Y',
                        placeHolder: 'dd/mm/yyyy',
                        picker: {
                            slotOrder: [ 'day', 'month', 'year' ],
                            yearFrom: (new Date()).getFullYear(),
                            yearTo: (new Date()).getFullYear() + 1 
                        }
                    }
                ]
            },
            {
                xtype: "container",
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
                        flex: 3,
                    },
                    {
                        xtype: "numberfield",
                        flex: 1,
                        margin: "0 0.5em",
                        placeHolder: "分担金额",
                        minValue: 0,
                        value: 0
                    },
                    {
                        xtype: "button",
                        flex: 1,
                        text: "删除"
                    }
                ]
            },
            {
                xtype: "button",
                text: "添加参与者",
                width: "30%",
                id: "addAllocationBtn"
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                layout: { pack: 'right' },
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        id: "deleteEventBtn"
                    }
                ]
            }
        ],
        listeners: [{
            delegate: "#saveEventBtn",
            event: "tap",
            fn: "onSaveButtonTap"
        }, {
            delegate: "#homeBtn",
            event: "tap",
            fn: "onHomeButtonTap"
        }, {
            delegate: "#deleteEventBtn",
            event: "tap",
            fn: "onDeleteButtonTap"
        }, {
            delegate: "#addAllocationBtn",
            event: "tap",
            fn: "onAddAllocationButtonTap"
        }],
        scrollable: 'vertical'
    },

    onSaveButtonTap: function() {
        console.log("saveEventEvent");
        this.fireEvent("saveEventEvent", this);
    },

    onHomeButtonTap: function() {
        console.log("backToHomeEvent");
        this.fireEvent("backToHomeEvent", this);
    },

    onDeleteButtonTap: function() {
        console.log("deleteEventEvent");
        this.fireEvent("deleteEventEvent", this);
    },

    onAddAllocationButtonTap: function() {
        console.log("addAllocationEvent");
        this.fireEvent("addAllocationEvent", this);
    }
});
