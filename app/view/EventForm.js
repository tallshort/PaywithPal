Ext.define('PaywithPal.view.EventForm', {
    extend: 'Ext.form.Panel',
    xtype: 'eventform',
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
                        id: "saveBtn"
                    }
                ]
            },
            { 
                xtype: "fieldset",
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
                        maxValue: 5000,
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
                xtype: "toolbar",
                docked: "bottom",
                layout: { pack: 'right' },
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        id: "deleteBtn"
                    }
                ]
            }
        ],
        listeners: [{
            delegate: "#saveBtn",
            event: "tap",
            fn: "onSaveButtonTap"
        }, {
            delegate: "#homeBtn",
            event: "tap",
            fn: "onHomeButtonTap"
        }, {
            delegate: "#deleteBtn",
            event: "tap",
            fn: "onDeleteButtonTap"
        }],
        scrollable: 'vertical'
    },

    onSaveButtonTap: function () {
        console.log("saveEventEvent");
        this.fireEvent("saveEventEvent", this);
    },

    onHomeButtonTap: function () {
        console.log("backToHomeEvent");
        this.fireEvent("backToHomeEvent", this);
    },

    onDeleteButtonTap: function () {
        console.log("deleteEventEvent");
        this.fireEvent("deleteEventEvent", this);
    }
});
