Ext.define('PaywithPal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: 'Events',
                iconCls: 'home',
                xtype: 'eventlistcontainer'
            },
            {
                title: 'Participants',
                iconCls: 'user',
                xtype: 'participantlistcontainer'
            }
        ]
    }
});