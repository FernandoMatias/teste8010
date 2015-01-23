Ext.define('Touch2Demo.view.teste', {
    extend: 'Ext.form.Panel',
    alias: 'widget.teste',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'TESTE',
		
	    },
	    {
		xtype: 'button',
		action: 'menuIniciar',
		ui: 'decline',
		text: 'Volta'
	    }
	]
    }
});