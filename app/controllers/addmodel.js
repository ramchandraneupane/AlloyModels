var args = arguments[0] || {};

function doCleanUp(e){
	$.destroy();
}

function doClickSave(e){
	var model = Alloy.createModel("Picture",{
		title: $.booktitle.value,
		description: $.description.value,
		path: "/pictures/dogdev.jpeg",
		location: $.location.value,
		photographer: $.photographer.value
	});
	
	Alloy.Collections.Picture.add(model);
	model.save();
	
	$.addmodel.close();
}
