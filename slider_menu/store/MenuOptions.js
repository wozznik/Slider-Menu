/**
 * @class SliderMenu.store.MenuOptions
 * @extends Ext.data.Store
 *
 * Defines store of MenuOptions that are showed inside SliderMenu.view.Menu.
 * It must be modified to adapt SliderMenu at your app.
 * By default, the data is hardcored inside class, but you can get it using a 
 * proxy (Ajax, Rest, LocalStorage...).
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */
Ext.define('SliderMenu.store.MenuOptions', {
    extend: 'Ext.data.Store',
	
    requires: [,
    ],
	
    config: {
    	model: 'SliderMenu.model.MenuOption',
		storeId: 'MenuOptionsStore',
		
		//Customize your menu options
		data: [
			{id: 1, xtype: 'option1card', iconCls: 'action', iconMask:true, text:'Option 1'},
			{id: 2, xtype: 'option2card', iconCls: 'action', iconMask:true, text:'Option 2'},
			{id: 3, xtype: 'option3card', iconCls: 'action', iconMask:true, text:'Option 3'},
		]
    }
});