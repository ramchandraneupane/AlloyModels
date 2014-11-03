var args = arguments[0] || {};

function doClickOnTV(e){
	var detailWin = Alloy.createController("details", { "$model": Alloy.Collections.Picture.get(e.rowData.model) }).getView();
	if(OS_IOS){
		Alloy.Globals.navWin.openWindow(detailWin);
	}else{
		$.detailWin.open();
	}
}