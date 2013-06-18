Ext.define('PaywithPal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'PaywithPal.form.EventForm'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: 'Events',
                iconCls: 'home',
                html: 'Events Screen'
            },
            {
                title: 'Participants',
                iconCls: 'user',
                html: 'Participants Screen'
            },
            {
                title: 'Event Form',
                iconCls: 'user',
                xtype: 'eventform'
            }
        ]
    }
});