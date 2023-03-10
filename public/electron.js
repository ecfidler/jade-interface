// Originally Retrived on 1/24/23 from https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/

// Module to control the application lifecycle and the native browser window.
const { app, BrowserWindow, protocol, ipcMain } = require("electron");
const path = require("path");
const url = require("url");

const isDev = require("electron-is-dev");

let installExtension, REACT_DEVELOPER_TOOLS;

if (isDev) {
    const devTools = require("electron-devtools-installer");
    installExtension = devTools.default;
    REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
    app.quit();
}

// Create the native browser window.
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 830,
        frame: false,
        transparent: true,
        // Set the path of an additional "preload" script that can be used to
        // communicate between node-land and browser-land.
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // In production, set the initial browser path to the local bundle generated
    // by the Create React App build process.
    // In development, set it to localhost to allow live/hot-reloading.
    const appURL = app.isPackaged
        ? url.format({
              pathname: path.join(__dirname, "index.html"),
              protocol: "file:",
              slashes: true,
          })
        : "http://localhost:3000";
    mainWindow.loadURL(appURL);

    // Automatically open Chrome's DevTools in development mode.
    // if (!app.isPackaged) {
    //     mainWindow.webContents.openDevTools();
    // }
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
function setupLocalFilesNormalizerProxy() {
    protocol.registerHttpProtocol(
        "file",
        (request, callback) => {
            const url = request.url.substr(8);
            callback({ path: path.normalize(`${__dirname}/${url}`) });
        },
        (error) => {
            if (error) console.error("Failed to register protocol");
        }
    );
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    setupLocalFilesNormalizerProxy();

    if (isDev) {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((error) => console.log(`An error occurred: , ${error}`));
    }

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = "https://my-electron-app.com";
app.on("web-contents-created", (event, contents) => {
    contents.on("will-navigate", (event, navigationUrl) => {
        const parsedUrl = new URL(navigationUrl);

        if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
            event.preventDefault();
        }
    });
});

ipcMain.on("app/close", () => {
    app.quit();
});

ipcMain.on("app/minimize", () => {
    BrowserWindow.getFocusedWindow().minimize();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
