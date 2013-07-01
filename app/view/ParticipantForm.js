Ext.define('PaywithPal.view.ParticipantForm', {
    extend: 'Ext.form.Panel',
    xtype: 'participantform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "编辑饭友",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "返回",
                        id: "participantHomeBtn"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "保存",
                        id: "saveParticipantBtn"
                    }
                ]
            },
            { 
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: '名字',
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
                        label: '电话',
                        required: true
                    }
                ]
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                layout: { pack: 'right' },
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        id: "deleteParticipantBtn"
                    }
                ]
            }
        ],
        listeners: [{
            delegate: "#saveParticipantBtn",
            event: "tap",
            fn: "onSaveButtonTap"
        }, {
            delegate: "#participantHomeBtn",
            event: "tap",
            fn: "onHomeButtonTap"
        }, {
            delegate: "#deleteParticipantBtn",
            event: "tap",
            fn: "onDeleteButtonTap"
        }],
        scrollable: 'vertical'
    },

    onSaveButtonTap: function () {
        console.log("saveParticipantParticipant");
        this.fireEvent("saveParticipantEvent", this);
    },

    onHomeButtonTap: function () {
        console.log("backToHomeEvent");
        this.fireEvent("backToHomeEvent", this);
    },

    onDeleteButtonTap: function () {
        console.log("deleteParticipantEvent");
        this.fireEvent("deleteParticipantEvent", this);
    }
});
