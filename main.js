var app = require('app');

// the native webkit browser window that we'll render our app in
var BrowserWindow = require('browser-window');

// understand how and when things go wrong
require('crash-reporter').start();

// hook for all active windows being closed
app.on('window-all-closed', function() {
    // if not on OSX, quit the app (user expected behavior)
    if (process.platform != 'darwin') {
        app.quit();
    }
});


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadUrl('file://' + __dirname + '/public/index.html');

    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
