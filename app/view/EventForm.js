Ext.define('PaywithPal.view.EventForm', {
    extend: 'Ext.form.Panel',
    xtype: 'eventform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.Label',
        'Ext.field.DatePicker'
    ],
    config: {
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "编辑饭局",
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
                        label: '主题',
                        required: true
                    },
                    {
                        xtype: 'numberfield',
                        name: 'expense',
                        label: '消费',
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
                xtype: 'label',
                html: "一起败的饭友们",
                margin: "0 1.2em"
            },
            {
                xtype: "panel",
                itemId: "allocationPanel"
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        text: "添加饭友",
                        width: "30%",
                        id: "addAllocationBtn"
                    },
                    {
                        xtype: "spacer"
                    },
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

    getAllocationPanel: function() {
        return this.getComponent("allocationPanel");
    },

    onAddAllocationButtonTap: function() {
        this.getAllocationPanel().add({xtype: "allocationformitem"});
    },

    clearAllocations: function() {
        this.getAllocationPanel().removeAll(true, true);
    },

    addAllocationFormItem: function(partcipantId, actualPay) {
        var allocationFormItem = Ext.create("PaywithPal.view.AllocationFormItem");
        allocationFormItem.setAllocation(partcipantId, actualPay);
        this.getAllocationPanel().add(allocationFormItem);
    }
});
