/**
 * @class SliderMenu.view.Mainwrapper
 * @extends Ext.Container
 *
 * MainWrapper controls which view would be showed inside 
 * SliderMenu.view.Main.
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik)
 */

Ext.define('SliderMenu.view.MainWrapper', {
    extend: 'Ext.Panel',
    xtype: 'mainwrapper',
	
    requires: [
    ],
	
    config: {
        layout: 'card',
        activeView: null,
        title: 'xxxxxxxxxxxxxxxxx', //it's a hack to sets title width

        items:{

        }
    },


    /**
     * TODO: REFACTOR
     *
     * Change view inside Container
     * @param {Ext.Container} view The new view to show
     */
    changeViewTo: function(newView) {
        var N = this.getItems().length;
        if(N > 1) return false;

        if(N == 1){
            this.removeAt(0);
        }

        //this.setTitle(newView.getTitle());
        this.setActiveView(newView);
        this.add(this.getActiveView());
    }
});