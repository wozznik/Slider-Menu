/**
 * @class SliderMenu.view.SliderMenuContainer
 * @extends Ext.Panel
 *
 * Slider Menu component that extends Ext.Panel. There are
 * two elements inside:
 *   1) menucard: It's the left menu with the options of the app.
 *   2) maincard: Main view. It change depending of option selected.
 * 				  By default it's a NavigationView but you can change
 * 				  it for anotherone...
 * 
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik)
 */
 
Ext.define('SliderMenu.view.SliderMenuContainer', {
    extend: 'Ext.Panel',
    xtype: 'slidermenucontainer',
	
    requires: [
    	'SliderMenu.view.Menu',
    	'SliderMenu.view.Main',
    ],
	
    config: {
    	items: [
	    	{
	    		xtype: 'menucard',
	    		id: 'menucard',
	    	},
	    	{	
	    		xtype: 'maincard', 
	    		id: 'maincard',
	    	}
	    ]
    },

    initialize: function() {
    	this.callParent();
    	var menu = this.getMenu();
    	var record = menu.getStore().getAt(menu.getOptionSelected());
    	
    	menu.fireEvent('init', record, menu.getOptionSelected());
    },
    
	/**
     * Sets menu width between 0 <= width <= MaxViewportWidth
     *
     * @param {Ext.Number} width: A valid number representing the width of slide menu
     * @return {Ext.Boolean} true: 0 <= width <= MaxViewportWidth
     *						 false: otherwise
     */
    setWidth: function(width){
    	if(!Ext.isNumber(width)) return false;
    	if(Ext.viewport.getMaxWidth < width) return false;
    	if(width < 0) return false;

    	this.getMenu().setWidth(width);
    	this.getMain().setMenuWidth(width);
    	return true;
    },

    /**
     * Sets menu title
     *
     * @param {Ext.String} title: Value of the new title
     * @return {Ext.Boolean} true: valid title
     *						 false: otherwise
     */
    setTitle: function(title){
    	if(!Ext.isString(title)) return false;

    	this.getMenu().setTitle(title);

    	return true;
    },

    /**
     * Sets duration of close menu animation
     *
     * @param {Ext.Number} duration: Time of the close animation
     * @return {Ext.Boolean} false: duration is not a number
     *						 true: otherwise
     */
    setCloseAnimationDuration: function(duration){
    	if(!Ext.isNumber(duration)) return false;

    	this.getMenu().setCloseAnimDuration(duration);
    },

    /**
     * Sets duration of open menu animation
     *
     * @param {Ext.Number} duration: Time of the open animation
     * @return {Ext.Boolean} false: duration is not a number
     *						 true: otherwise
     */
    setOpenAnimationDuration: function(duration){
    	if(!Ext.isNumber(duration)) return false;

    	this.getMenu().setOpenAnimDuration(duration);
    },

	/**
     * Sets the icon of the open menu button
     *
     * @param {Ext.String} icon: The name of the icon
     * @return {Ext.Boolean} false: icon is not a String
     *						 true: otherwise
     */
    setMenuIcon: function(icon){
    	if(!Ext.isString(icon)) return false;

    	this.getMain().setMenuButtonIcon(icon);
    	return true;
    },

    /**
     * Gets menu item from slidermenu
	 * @private
     */
    getMenu: function(){
    	return this.down('#menucard');
    },

    /**
     * Gets main container item from slidermenu
	 * @private
     */
    getMain: function(){
    	return this.down('#maincard');
    },

});