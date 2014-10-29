

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
		},{
			"title": "Dog Dev",
			"description": "Maybe this is a smart blonde?",
			"path": "/pictures/dogdev.jpg",
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

loadData();


if(OS_IOS){
	// on ios we launch a navigation window
	$.navWin.open();
}else{
	$.index.open();	
}

// Force update the tables
Alloy.Collections.Picture.fetch();




