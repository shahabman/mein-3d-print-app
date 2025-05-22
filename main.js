// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev'); // Optional: Für die Entwicklung

function createWindow() {
  // Erstelle das Browser-Fenster.
  const win = new BrowserWindow({
    width: 1200, // Standardbreite
    height: 800, // Standardhöhe
    minWidth: 800, // Mindestbreite
    minHeight: 600, // Mindesthöhe
    webPreferences: {
      nodeIntegration: true, // Ermöglicht Node.js-Module im Renderer-Prozess (Vorsicht bei Sicherheit!)
      contextIsolation: false, // Deaktiviert die Kontext-Isolation
      enableRemoteModule: true, // Ermöglicht das 'remote'-Modul (Vorsicht bei Sicherheit!)
      preload: path.join(__dirname, 'preload.js') // Optional: Für sicherere Interaktion
    }
  });

  // Lade die React-App.
  // Im Entwicklungsmodus wird der React-Entwicklungsserver geladen.
  // Im Produktionsmodus wird die gebaute HTML-Datei geladen.
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // React-Entwicklungsserver
      : `file://${path.join(__dirname, '../build/index.html')}` // Gebaute React-App
  );

  // Öffne die DevTools, wenn im Entwicklungsmodus.
  if (isDev) {
    win.webContents.openDevTools();
  }
}

// Diese Methode wird aufgerufen, wenn Electron mit der Initialisierung fertig ist
// und Browser-Fenster erstellen kann.
app.whenReady().then(createWindow);

// Beende alle Prozesse, wenn alle Fenster geschlossen sind, außer auf macOS.
// Auf macOS ist es üblich, dass Anwendungen und ihre Menüleiste aktiv bleiben,
// bis der Benutzer Cmd + Q mit der Menüleiste explizit beendet.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Wenn das Dock-Symbol angeklickt wird und keine anderen Fenster geöffnet sind,
// sollte ein neues Fenster erstellt werden.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});