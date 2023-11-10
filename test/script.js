let data = document.querySelector("#data")

data.innerHTML += window.navigator.userAgent
data.innerHTML += "<br>"
data.innerHTML += window.navigator.hardwareConcurrency
data.innerHTML += "<br>"
try {
    data.innerHTML += window.navigator.userAgentData.platform
} catch (error) {
    data.innerHTML += window.navigator.oscpu
}
data.innerHTML += "<br>"
try {
    data.innerHTML += window.navigator.userAgentData.brands[0].brand
} catch (error) {
    data.innerHTML += window.navigator.appCodeName
}
data.innerHTML += "<br>"
data.innerHTML += window.navigator.maxTouchPoints
data.innerHTML += "<br>"
data.innerHTML += window.screen.height;
data.innerHTML += "<br>"
data.innerHTML += window.screen.width;
data.innerHTML += "<br>"
data.innerHTML += window.screen.pixelDepth;
data.innerHTML += "<br>"
data.innerHTML += window.navigator.vendor
data.innerHTML += "<br>"
data.innerHTML += window.navigator.deviceMemory;
data.innerHTML += "<br>"
data.innerHTML += "<br>"


function generateHash() {
    let string = null

    string += window.navigator.hardwareConcurrency

    try {
        string += window.navigator.userAgentData.platform
    } catch (error) {
        string += window.navigator.oscpu
    }

    try {
        string += window.navigator.userAgentData.brands[0].brand
    } catch (error) {
        string += window.navigator.appCodeName
    }

    string += window.navigator.maxTouchPoints

    string += window.screen.height;

    string += window.screen.width;

    string += window.screen.pixelDepth;

    string += window.navigator.vendor;   // Dont works on safari & Firefox

    string += window.navigator.deviceMemory;

    let hash = 0;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 2) + hash) + char;
        hash = hash & hash;
        if (hash < 0) {
            hash = -1 * hash
        }
    }

    return hash
}

data.innerHTML += "Hash Generated : "
data.innerHTML += generateHash()