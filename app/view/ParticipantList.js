Ext.define("PaywithPal.view.ParticipantList", {
    extend: "Ext.List",
    xtype: "participantlist",
    config: {
        loadingText: "加载参与者...",
        emptyText: '<p class="empty-list">暂无参与者</p>',
        onItemDisclosure: true,
        itemTpl: '<div class="list-item"><div class="title">{name}</div><div><small>{phone} {email}</small></div></div>'
    }
});