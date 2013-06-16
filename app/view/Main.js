Ext.define('PaywithPal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.form.FormPanel',
        'Ext.form.FieldSet',
        'Ext.Button',
        'Ext.field.TextArea',
        'Ext.field.Field',
        'Ext.field.Email'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                        }
                    }
                ]
            }
        ]
    }
});