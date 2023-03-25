import axios from "axios";

const passphrase = "pong!";

export function attemptConnection(url) {
    return new Promise(async (resolve, reject) => {
        try {
            await axios.get(buildURL(url, "ping")).then((res) => {
                resolve(parsePingResponse(res));
            });
        } catch {
            reject(false);
        }
    });
}

export function attemptMultipleConnections(urls) {
    return new Promise(async (resolve, reject) => {
        try {
            await Promise.any(
                urls.map((url) => axios.get(buildURL(url, "ping")))
            )
                .then((res) => {
                    resolve(parsePingResponse(res));
                })
                .catch((err) => {
                    reject(err);
                });
        } catch {
            reject(false);
        }
    });
}

export async function getFilesList(url) {
    return axios.get(buildURL(url, "files"));
}

// https://stackoverflow.com/questions/72681390/how-to-upload-a-file-from-react-front-end-to-fastapi
export function putFile(url, file) {
    return new Promise(async (resolve, reject) => {
        try {
            const fileFormData = new FormData();
            fileFormData.append("file", file);
            const headers = { "Content-Type": file.type };

            await axios
                .post(buildURL(url, `file`), fileFormData, headers)
                .then((res) => {
                    resolve(res);
                })
                .err((e) => {
                    reject(e);
                });
        } catch {
            reject(false);
        }
    });
}

// export function getFile(url, fileName) {}

// export function patchFile(url, fileName, newFileName) {}

// export function deleteFile(url, fileName) {}

export async function getPrinterStatus(url) {
    try {
        return axios.get(buildURL(url, "printerStatus"));
    } catch {
        return false;
    }
}

function parsePingResponse(res) {
    if (res.data.message === passphrase) {
        return urlFromResponse(res.config.url);
    } else {
        return false;
    }
}

function urlFromResponse(url) {
    return url.replace("http://", "").replace(":5000/ping", "");
}

function buildURL(base, endpoint) {
    return `http://${base}:5000/${endpoint}`;
}
