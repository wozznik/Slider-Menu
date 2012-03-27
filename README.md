Slider Menu
===============

This is a demo project that use a custom implementation of Facebook-like slide in menu for Sencha Touch 2. 
The implementation of the menu is inside "slider_menu" directory.

This is a work in progress and still needs work to improve and change things...

Getting Started
---------------

To use Slider Menu in your application, you need:

1) Copy the "slider_menu" folder inside your application root folder Ex: path_to_www/MyApp/slider_menu 

2) Add following code at the beginning of your app.js:

    Ext.Loader.setPath({
	    'SliderMenu': 'slider_menu/'
	});

3) Add SliderMenuContainer view inside required views from app.js:

	 views: [
        'SliderMenu.view.SliderMenuContainer',
        //Add here your other views...
    ],

4) Add SliderMenuController inside required controllers from app.js:
	controllers: [
		'SliderMenu.controller.SliderMenuController',
		//Add here your other controllers...
	],

5) Add MenuOption model inside required models from app.js: 
	models: [
		'SliderMenu.model.MenuOption'
		//Add here your other models...
	],

6) Add MenuOptions store inside required stores from app.js:
	stores: [
		'SliderMenu.store.MenuOptions'
	],

7) Modify data array inside "slider_menu/store/MenuOptions.js" to link each menu option, to views of your application:

	data: [
		{id: 1, view: 'yourAPP.view.someview', icon: 'undefined', useIcon:true, text:'menu_option_text'},
		....
		{id: N, view: 'yourAPP.view.anotherview', icon: 'undefined', useIcon:true, text:'other_menu_option_text'},
	]

** Note: The SliderMenu automatically creates the view associated to the menu option selected and put it inside the main view. **

8) Add a SliderMenuContainer instance inside Viewport:
	
	Ext.Viewport.add(Ext.create('SliderMenu.view.SliderMenuContainer'));

For a more complete example, see demo application.

Configuration
---------------
To configure the slider menu, you need an instance of it:

	var sliderMenu = Ext.create('SliderMenu.view.SliderMenuContainer');

and then you can configure a set of parameters:

###Menu title 

	sliderMenu.setTitle('Options...'); //Sets menu title to "Options..."

###Width (in px)

	sliderMenu.setWidth(200); //Sets menu width to 200px

###Duration of close animation (in ms)

	sliderMenu.setCloseAnimationDuration(300); //Sets the duration of close animation to 300ms

###Duration of open animation (in ms)

	sliderMenu.setOpenAnimationDuration(300); //Sets the duration of open animation to 300ms

###Menu icon

** Note: It's important that the icon is declared inside your app.css. Otherwise, a blank button will be showed **
	
	sliderMenu.setMenuIcon('list'); //Sets icon of menu button to 'list' icon

###SliderMenu UI

	slidermenu.setMenuToolbarUi('slider-menu-red');
    slidermenu.setMainToolbarUi('slider-menu-red');

In your app.scss you need to define your custom toolbar UI theme for SliderMenu with something like this:
	
	@include sencha-toolbar-ui( 'slider-menu-red', darken(#f00, 20), 'flat');

Themming
----------
You can change the style of your slider menu, overwriding two classes:
	
	.x-slidermenu-main 
	.x-slidermenu-menu

By default, you must to overwride a open subclass of main to sets a shadow effect between menu and main container. 

Ex:

	.x-slidermenu-main.open {
	     box-shadow: 0 0 4px 1px #333;
	     -webkit-box-shadow: 0 0 4px 1px #333;
	}

