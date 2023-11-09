const ipTarget = document.querySelector("#ip");
const login = document.querySelector("#login");


fetch('https://api.ipify.org/')
    .then((result) => result.text())
    .then(ip => {
        ipTarget.setAttribute('value', ip);
        login.setAttribute('data-hidden', 'false');
    })
    .catch(err => {
        alert("Error! Please Reload. If the error persists, please reach the respective authorities! \n\nError Code : "+ err)
    })

