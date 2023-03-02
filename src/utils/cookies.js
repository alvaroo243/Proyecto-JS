export { getCookie, setCookie };

// Cookies de W3Schools

function getCookie(nombreCookie) {
    let nombre = nombreCookie + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}

function setCookie(nombreCookie, valorCookie) {
    document.cookie = nombreCookie + "=" + valorCookie + ";";
}