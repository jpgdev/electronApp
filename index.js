var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

//app.on('window-all-closed', () => {  
//    if (process.platform != 'darwin') {
//        app.quit();
//    }
//});

app.on('ready', function () {
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainWindow.loadUrl('file://' + __dirname + '/browser/views/index.html');
	
	mainWindow.on('closed', function() {
	    mainWindow = null;
	});
});