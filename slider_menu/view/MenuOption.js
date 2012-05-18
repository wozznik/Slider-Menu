/**
 * @class SliderMenu.view.menuoption
 * @extends Ext.dataview.component.DataItem
 * 
 * Represents a Menu Option inside the menu panel from SliderMenu
 * 
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */
Ext.define('SliderMenu.view.MenuOption', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'menuitem',
	
    requires: [
        'Ext.Img',
        'Ext.Label',
    ],
	
    config: {
    	layout: 'hbox',

		icon:{
    		xtype: 'button',
            ui: 'plain',
            iconAlign: 'center',
            padding: 0,
            disabled: true,
    	},

    	text:{
    		xtype: 'label',
    		margin: 5,
    	},

    
    	dataMap: {
    		getIcon:{
                setIconCls: 'iconCls',
                setIconMask: 'iconMask',
                setHidden: 'iconHidden',
    		},
    		getText:{
    			setHtml: 'text',
    		}
    	}
    },

    applyText: function(config){
    	return Ext.factory(config, Ext.Label, this.getText());
    },

    updateText: function(newText, oldText){
    	if(oldText){
            this.remove(oldText);
        }

        if(newText){
            this.add(newText);
        }
    },

    applyIcon: function(config){
    	return Ext.factory(config, Ext.Button, this.getIcon());
    },

    updateIcon: function(newIcon, oldIcon){
    	if(oldIcon){
            this.remove(oldIcon);
        }

        if(newIcon){
            this.add(newIcon);
        }
    },
});