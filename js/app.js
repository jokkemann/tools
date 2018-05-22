//#region keycode
const keyCodeDisplay = document.querySelector('#keycode')
const keyDisplay = document.querySelector('#pressedkey')

function setKeyInfo(e) {
    keyCodeDisplay.innerHTML = e.keyCode;
    keyDisplay.innerHTML = `<div>${e.key}</div>`;
}
window.addEventListener('keydown', setKeyInfo)
//#endregion