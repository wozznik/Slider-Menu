/**
 * @class SliderMenu.model.MenuOption
 * @extends Ext.dataModel
 *
 * Basic model configuration for the list item (MenuOption) inside SliderMenu.view.Menu.
 * At the moment the Menu view only displays text. So, changes on icon field doesn't take
 * effect on the SliderMenu.view.Menu.
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */

Ext.define('SliderMenu.model.MenuOption', {
    extend: 'Ext.data.Model',
	
    requires: [

    ],
	
    config: {
    	fields: [
    		{name: 'id', type: 'int'}, //Option identifier
    		{name: 'view', type: 'string'}, //Action to fire
    		{name: 'icon', type: 'string'}, //Icon is not available at the moment
    		{name: 'useIcon', type: 'boolean'}, //Is false by default (see the comment above)
    		{name: 'text', type: 'string'}, //Text to display in the MenuOption
    	]
    }
});