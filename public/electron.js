const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')

let win

const createWin = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    transparent: true,
    frame: true,
    titleBarStyle: 'hidden',
    maximizable: false,
    fullscreenable: false,
    resizable: false,
    navigateOnDragDrop: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname + '/preload.js')
    }
  })
  win.loadURL(isDev ? 'http://localhost:3000' : url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.on('did-finish-load', function () {
    win.show();
    win.focus()
  });

  win.once('ready-to-show', () => {
    win.show()
    win.focus()
  })

  if (isDev) {
    win.openDevTools({ mode: 'undocked' })
  }

}

app.disableHardwareAcceleration()

app.whenReady().then(createWin)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWin()
  }
})