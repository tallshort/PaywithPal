Ext.define("PaywithPal.view.EventList", {
    extend: "Ext.List",
    xtype: "eventlist",
    config: {
        loadingText: "加载饭局...",
        emptyText: '<p class="empty-list">暂无饭局，找三五饭友败一个呗～</p>',
        onItemDisclosure: true,
        grouped: true,
        itemTpl: '<div class="list-item"><div class="title">{title}</div><div><small>共{expense}元</small> <small>{[Ext.Date.format(values.date, "m.d")]}</small></div></div>'
    }
});