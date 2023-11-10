const ipTarget = document.querySelector("#ip");
const HidTarget = document.querySelector("#Hid");
const login = document.querySelector("#login");

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

fetch('https://api.ipify.org/')
    .then((result) => result.text())
    .then(ip => {
        ipTarget.setAttribute('value', ip);

        HidTarget.setAttribute('value', generateHash());

        login.setAttribute('data-hidden', 'false');
    })
    .catch(err => {
        alert("Error! Please Reload. If the error persists, please reach the respective authorities! \n\nError Code : "+ err)
    })

