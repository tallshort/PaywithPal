Ext.define("PaywithPal.view.EventList", {
    extend: "Ext.List",
    xtype: "eventlist",
    config: {
        loadingText: "Loading Events...",
        emptyText: '<p class="empty-list">No events found.</p>',
        onItemDisclosure: true,
        grouped: true,
        itemTpl: '<div class="event-list-item"><div class="title">{title}</div><div><small>共{expense}元</small> <small>{[Ext.Date.format(values.date, "m.d")]}</small></div></div>'
    }
});