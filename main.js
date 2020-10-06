const { app, BrowserWindow } = require("electron"); //引入electron
let win;
let windowConfig = {
  width: 1280,
  height: 720,
  fullscreen: true,
  show:false,
  // transparent: true,
  // frame: false,
}; 
function createWindow() {
  win = new BrowserWindow(windowConfig);
  win.loadURL(`file://${__dirname}/index.html`);
  win.maximize()
  win.show()
  // win.webContents.openDevTools(); 
  win.on("close", () => {
    win = null;
  });
  win.on("resize", () => {
    // win.reload();
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  app.quit();
});
app.on("activate", () => {
  if (win == null) {
    createWindow();
  }
});
