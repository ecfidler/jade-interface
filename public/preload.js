// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");

const windowControl = {
    control: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
    },
};

contextBridge.exposeInMainWorld("electron", windowControl);

process.once("loaded", () => {
    contextBridge.exposeInMainWorld("versions", process.versions);
});
