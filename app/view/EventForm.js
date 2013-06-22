Ext.define('PaywithPal.view.EventForm', {
    extend: 'Ext.form.Panel',
    xtype: 'eventform',
    config: {
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Edit Event",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Home"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save"
                    }
                ]
            },
            { 
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title',
                        required: true
                    },
                    {
                        xtype: 'numberfield',
                        name: 'expense',
                        label: 'Expense',
                        minValue: 1,
                        maxValue: 5000,
                        stepValue: 1,
                        required: true
                    },
                   {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'Date',
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
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        scope: this
                    }
                ]
            }
        ],

        scrollable: 'vertical'
    }
});
