Ext.define('PaywithPal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: '饭局',
                iconCls: 'home',
                xtype: 'eventlistcontainer'
            },
            {
                title: '饭友',
                iconCls: 'user',
                xtype: 'participantlistcontainer'
            }
        ]
    }
});