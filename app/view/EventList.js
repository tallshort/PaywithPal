Ext.define("PaywithPal.view.EventList", {
    extend: "Ext.List",
    xtype: "eventlist",
    config: {
        loadingText: "Loading Events...",
        emptyText: '<p class="empty-list">No events found.</p>',
        onItemDisclosure: true,
        itemTpl: '<div class="list-item-title"><b>{[Ext.Date.format(values.date, "Y-m-d")]}</b> {title} {expense}</div>'
    }
});