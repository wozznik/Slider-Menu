/**
 * @class SliderMenu.view.Main
 * @extends Ext.navigation.View
 *
 * The right view of SliderMenu, by default is a NavigationView
 * that it has inside a container (mainwrapper).
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */

Ext.define('SliderMenu.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'maincard',
    
    requires: [
        'SliderMenu.view.MainWrapper'
    ],

    config: {
        docked: 'left',
        style: 'width: 100%; opacity: 1;',
        layout: 'card',

        menuButtonIcon: 'more',
        menuWidth: 250,

        //You need to overwride this css class to customize the theme
        cls: 'x-slidermenu-main', 

        //This component is draggable 
        //(it allows to show or not the left menu)
        draggable:{
            direction: 'horizontal',
            constraint: { //By default slider menu is closed
                min: {x: 0, y: 0},
                max: {x: 0, y: 0},
            },
        },

        //By default the navigation bar has a icon docked left
        navigationBar:{
            items:{
                action: 'openMenu',
                iconMask: true,
                iconCls: null, //By default is more icon
                align: 'left',
            }
        },

        items: {
            xtype: 'mainwrapper',
            id: 'mainwrapper',
        },

    },

    initialize: function(){
        //initialize icon of menu button
        this.setMenuButtonIcon(this.getMenuButtonIcon());
        this.callParent();
    },

    applyMenuButtonIcon: function(icon){
        if(Ext.isString(icon)){
            this.down('button[action=openMenu]').setIconCls(icon);
            return icon;
        }
    },

    pop: function(){
        this.callParent();
        this.setNavBarTitle(this.down('#mainwrapper').getActiveView().getTitle());
    },

    isClosed: function() {
        return (this.getDraggable().offset.x == 0);
    },

    /**
     *
     * Change view inside Container
     *
     * @param {Ext.Container} view: The new view to show
     */
    changeViewTo: function(view){
        this.down('#mainwrapper').changeViewTo(view);
        this.setNavBarTitle(view.getTitle());
    },

    /**
     *
     * Generic method to change NavigationBar title
     *
     * @param {Ext.String} title: The new title of navigation bar
     * @return {Ext.Boolean} false: Param title is not a String
     *                       true: otherwise
     */
    setNavBarTitle: function(title){
        if(!Ext.isString(title)) return false;

        var bar = this.getNavigationBar();
        if (bar.titleComponent.element){
            bar.titleComponent.element.setWidth('auto');
        } 
        
        bar.titleComponent.setTitle(title);
        bar.refreshProxy();
        return true;
    },


    /**
     * Closes the slide menu.
     * 
     * @param {Ext.Number} duration: Animation duration
     * @return {Ext.Boolean} false: duration is not valid
     *                       true: otherwise
     */
    closeMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(0, duration, false); //Sets offset to 0 (close menu)
        return true;
    },
    
    /**
     * Opens the slide menu.
     * 
     * @param {Ext.Number} duration: Animation duration
     * @return {Ext.Boolean} false: duration is not valid
     *                       true: otherwise
     */
    openMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(this.getMenuWidth(), duration, true); //Sets offset to 250 (open menu)
        this.addCls('open');
        return true;
    },

    /**
     *  Swap slide menu (From open to close or from close to open).
     */
     swapMenu: function(offsetX, duration, masked){
        var constraint = this.getDraggable().getConstraint();
        constraint.min.x = offsetX;
        constraint.max.x = offsetX;
        this.slideMenu(offsetX, duration);
        
        if(masked){
            //open menu -> create a special mask to detects tap events
            this.setMasked({
                xtype: 'mask',
                listeners: {
                    tap: function(){
                        //Main (this.parent) fires a tap event only when the main is wrapped
                        this.parent.fireEvent('tap'); 
                    }
                }
            })
        }else{
            this.setMasked(false);
        }
     },

    /**
     * Slides the menu changing offset to 'x' with an slide animation of
     * 'duration' ms.
     * If value of 'x' or 'duration' is undefined -> return false
     * 
     * @param {Integer} x: Value of the new offset.x
     * @param {Integer} duration: Value of the animation duration effect.
     * 
     * @return {Boolean} If value of 'x' or 'duration' is undefined then return false
     *                   otherwise return true.
     */
    slideMenu: function(x, duration) {
        if(!Ext.isNumber(x) || !Ext.isNumber(duration)) return false;

        var draggable = this.getDraggable();

        draggable.setOffset(x, 0, {
            duration: duration
        });

        return true;
    },

});