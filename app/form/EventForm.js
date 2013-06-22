Ext.define('PaywithPal.form.EventForm', {
    extend: 'Ext.form.Panel',
    xtype: 'eventform',
    requires: [
        'Ext.field.Email',
        'Ext.field.Field'
    ],
    config: {
        items: [
            {
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                required: true 
            },
            {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                required: true
            },
            {
                xtype: 'textfield',
                name: 'phone',
                label: 'Phone',
                required: true 
            },
            {
                xtype: 'button',
                text: 'Submit'
            }
        ]
    }
});
