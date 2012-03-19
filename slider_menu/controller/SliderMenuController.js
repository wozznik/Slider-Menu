/**
 * @class SliderMenu.controller.SliderMenuController
 * @extends Ext.app.Controller
 *
 * Controller for SliderMenu. All events are controlled here. 
 * So, you must implement the methods to accept each action launched
 * by Menu.
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik) 
 */

Ext.define('SliderMenu.controller.SliderMenuController', {
    extend: 'Ext.app.Controller',

    requires: [
    	'SliderMenu.view.Main',
    	'SliderMenu.view.Menu',
    ],
    
    config: {
    	refs: {
    		main: 'maincard',
    		menu: 'menucard',
            mainWrapper: 'mainwrapper',
            menuButton: 'button[action=openMenu]',
    	},

    	control: {
            menuButton: {
    			tap: 'onOpenMenuButtonTapped'
    		},
            
    		menu: {
                itemtap: 'onMenuOptionTapped',
                init: 'onInitMenu',
    		},

            main: {
                push: 'onMainPush',
                pop: 'onMainPop',
                tap: 'onMainTapped',
            },

            mainWrapper: {
                tap: 'onMainTapped'
            }
    	},
    },

    /**
     * When the main menu is tapped (only when it's masked -> menu is open) 
     * we close slider menu
     */
    onMainTapped: function(){
        var main = this.getMain();
        var menu = this.getMenu();

        main.closeMenu(menu.getCloseAnimDuration());
    },

    /**
     * When we push a view from Main (Ext.navigation.View), we need to hide 
     * menu button
     */
    onMainPush: function(){
        this.getMenuButton().hide();
    },

    /**
     * When we pop a view from Main (Ext.navigation.View), we need to show 
     * menu button again
     */
    onMainPop: function(){
        this.getMenuButton().show();
    },

    /**
     * Fires after initialization menu.
     * Change initial view of main to default view associated 
     * to default option
     */
    onInitMenu: function(record, index){
        this.changeViewTo(record, index, 0);
    },

    /**
     * Fires when open menu button is tapped
     */
    onOpenMenuButtonTapped: function(){
    	var main = this.getMain();
        var menu = this.getMenu();

        if (main.isClosed()) {
            main.openMenu(menu.getOpenAnimDuration());
        } else {
            main.closeMenu(menu.getCloseAnimDuration());
        }

        this.getMenuButton().show();
    },

    /**
     * Fires when settings list item is selected
     *
     * @param {Ext.dataview.List} list: The menu option list
     * @param {Ext.dataview.Model} record: The item record
     */
    onMenuOptionTapped: function(menu, index, target, record) {
        this.changeViewTo(record, index, this.getMenu().getCloseAnimDuration());
    },

    /**
     * Change actual main view to view associated of record
     *
     * @param {Ext.dataview.Model} record: The item record
     * @param {Ext.Number} index: The menu option selected
     * @param {Ext.Number} duration: duration of the close animation
     */
    changeViewTo: function(record, index, duration){
        var menu = this.getMenu();
        var main = this.getMain();

        menu.select(index);
        var view = Ext.create(record.data.view);

        main.changeViewTo(view);
        main.closeMenu(duration);
    }
});

