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
    //transparent: true,
    //frame: true,
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

  win.focus()

  if (isDev) {
    win.openDevTools();
  }

}

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