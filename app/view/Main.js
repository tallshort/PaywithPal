Ext.define('PaywithPal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
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
            }
        ]
    }
});