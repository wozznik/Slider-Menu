//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});

Ext.Loader.setPath({
    'SliderMenu': 'slider_menu'
});

//</debug>

Ext.application({
    name: 'SliderMenuDemo',

    requires: [
        'Ext.MessageBox'
    ],

    //You must to put SliderMenu dependencies inside
    // views, controllers, stores and models
    views: [
        'SliderMenu.view.SliderMenuContainer',
        //Add here your view dependencies
        'SliderMenuDemo.view.Option1',
        'SliderMenuDemo.view.Option2',
        'SliderMenuDemo.view.Option3',
        ],
        
    controllers: ['SliderMenu.controller.SliderMenuController'],
    stores: ['SliderMenu.store.MenuOptions'],
    models: ['SliderMenu.model.MenuOption'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var slidermenu = Ext.create('SliderMenu.view.SliderMenuContainer');
        
        slidermenu.setTitle('Options...');
        slidermenu.setWidth(250);
        slidermenu.setMenuIcon('list');
        slidermenu.setMenuToolbarUi('slider-menu-red');
        slidermenu.setMainToolbarUi('slider-menu-red');

        // Initialize the main view
        Ext.Viewport.add(slidermenu);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
