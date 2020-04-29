var electron = require("electron")

var registerTestHandler = function(onFunction) {
	onFunction("test", console.log)
}

electron.app.whenReady()
.then(function() {
	registerTestHandler(electron.ipcMain.on)
})
