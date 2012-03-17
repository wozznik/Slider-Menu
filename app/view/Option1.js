/**
 * @class SliderMenuDemo.view.Option1
 * @extends Ext.Panel
 * 
 * Option 1 Panel
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */
Ext.define('SliderMenuDemo.view.Option1', {
    extend: 'Ext.Panel',
    xtype: 'option1card',
	
    requires: [

    ],
	
    config: {
    	title: 'Option 1',
    	
        items: {
            xtype: 'button',
            centered: true,
            text: 'Push new view',
            listeners: {
                tap: function(){
                    var panel = Ext.create(Ext.Panel, {
                        title: 'Panel 2',
                        html: 'Hello, my name is Panel 2....',
                    });

                    this.parent.parent.parent.push(panel);
                }
            }
        }
    }

});	