/**
 * @class SliderMenu.view.Menu
 * @extends Ext.dataview.List
 *
 * The left menu extends a dataview list.
 * By default, it has a toolbar on top of the list, you can delete
 * the toolbar or modify the list layout.
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik)
 */

Ext.define('SliderMenu.view.Menu', {
    extend: 'Ext.dataview.List',
    xtype: 'menucard',
	
    requires: [
        'Ext.Toolbar' //By default it has a toolbar on top
    ],
	
    config: {
        //Menu is on top left and z-index of 0 (hidden when menu is not slided)
        style: 'position: absolute; top: 0; left: 0; height: 100%;' +
                'z-index: 0',
        
        //By default title sets to 'Slider Menu'
        title: 'Slider Menu', //You can change it using menu.setTitle('new title');

        optionSelected: 0, //By default the first option is selected
        width: 250, //By default width sets to 250px
        closeAnimDuration: 300, //By default the duration of close animation is 300ms
        openAnimDuration: 300, //By default the duration of open animation is 300ms

        //NOTE: You need to overwride this css class to customize the theme
        cls: 'x-slidermenu-menu',

        docked: 'left',

        store: 'MenuOptionsStore',

        itemTpl: '{text}', //TODO: Make it configurable

        items:{
            xtype: 'toolbar',
        },
    },

    initialize: function(){
        //Sets toolbar menu title to default value
        this.setToolbarTitle(this.getTitle());
        this.callParent();
    },

    refresh: function(){
        this.callParent();
        this.select(this.getOptionSelected());
    },

    applyTitle: function(newTitle){
        if(newTitle){
            this.setToolbarTitle(newTitle);
            return newTitle;
        }
    },

    /**
     * Generic method to change the toolbar title inside menu panel.
     *
     * @param {String} newTitle: The new value of the toolbar title
     * @return {Boolean} true: Title has been setted correctly
     * @return {Boolean} false: Param isn't a valid string
     */
    setToolbarTitle: function(newTitle){
        if(!Ext.isString(newTitle)) return false;

        this.items.items[0].setTitle(newTitle);
        return true;
    }
});