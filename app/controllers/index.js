
//Helper function to facilitate testing
function resetData(){
	Ti.App.Properties.removeProperty('db_initialized');
	Alloy.Collections.Picture.fetch();

	
	while(Alloy.Collections.Picture.length) { 
    	Alloy.Collections.Picture.at(0).destroy(); 
	}
	
}

// Initializer
function loadData(){
	
	// Write an info message to the log
	Ti.API.info('Database initialized: ' + Ti.App.Properties.hasProperty("db_initialized"));
	
	if(!Ti.App.Properties.hasProperty("db_initialized")) {
		
		Alloy.Collections.Picture.reset([{
			"title": "Databases",
			"description": "Guy drawing pseudo database stuff",
			"path": "/pictures/software_development.jpg",
			"location": "internet",
			"photographer": "unknown"
		}]);
		
		// Loop through the elements and save them
		Alloy.Collections.Picture.each(function(_m){
			_m.save();
		});
		
		// Set the flag in properties
		Ti.App.Properties.setString('db_initialized','oh yeah');
	}
}

// Event handlers



function doClickAdd(e){
	Ti.API.info("Add button pressed");	
	var addmodel = Alloy.createController("addmodel").getView();
	if(OS_IOS){
		$.navWin.openWindow(addmodel);
	}else{
		$.addmodel.open();
	}
}

// Use reset to test
//resetData();

loadData();

// Global reference to the nav window
Alloy.Globals.navWin = $.navWin;

if(OS_IOS){
	// on ios we launch a navigation window
	$.navWin.open();
}else{
	$.index.open();	
}

// Force update the tables
Alloy.Collections.Picture.fetch();




