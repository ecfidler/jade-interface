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
