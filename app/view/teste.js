Ext.define('Touch2Demo.view.teste', {
    extend: 'Ext.form.Panel',
    alias: 'widget.teste',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'TESTE'
		
	    },
	      {
		xtype: 'fieldset',
		title: 'Contato',
		items: [
		    {
			xtype: 'textfield',
			name: 'nome',
			label: 'Nome'
		    },
		    {
			xtype: 'textfield',
			name: 'sobrenome',
			label: 'Sobrenome'
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'menuIniciar',
		ui: 'decline',
		text: 'Volta'
	    },
	    {
		xtype: 'button',
		action: 'login',
		ui: 'decline',
		text: 'Login'
	    }
	]
    }
});
