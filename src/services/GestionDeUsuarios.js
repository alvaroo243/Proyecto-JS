import { loginSupabase, signUpSupabase, logoutSupabase, recoverPasswordSupabase} from "./PeticionesApi.js";

export { loginUser, isLogged, registerUser, logout, forgotPassword, loginWithToken };

function expirationDate(expires_in){
    return Math.floor(Date.now() / 1000)+expires_in; 
}

async function loginUser(email, password) {
    let status = { success: false };
    try {
        let dataLogin = await loginSupabase(email, password);
        console.log("Data");
        console.log(dataLogin);
        localStorage.setItem("access_token", dataLogin.access_token); // Guardo en LocalStorage el token
        localStorage.setItem("expirationDate",expirationDate(dataLogin.expires_in)); // Guardo en LocalStorage la fecha de expiracion del token
        localStorage.setItem("uid", dataLogin.user.id); // Guardo la uid en LocalStorage
        localStorage.setItem("emailUsuario", dataLogin.user.email);
        status.success = true;
    }
    catch (err) {
        console.log("Error");
        console.log(err);
        status.success = false;
        status.errorText = err.error_description;
    }

    return status;
}

function loginWithToken(access_token,expires_in){
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expirationDate",expirationDate(expires_in));
}

function isLogged(){
    if(localStorage.getItem('access_token')){
        if(localStorage.getItem('expirationDate') > Math.floor(Date.now() / 1000))
        {
            return true;
        }
    }
    return false;
}

async function registerUser(email, password) {
    let status = { success: false };
    try {
        let data = signUpSupabase(email, password);
        console.log(data);
        status.success = true;
    }
    catch (err) {
        console.log(err);
        status.success = false;
        status.errorText = err.error_description;
    }
    return status;
}

async function logout() {
    // Recojo el token para luego hacer el logOut
    let token = localStorage.getItem("access_token");
    // Borro los datos del login
    localStorage.removeItem("access_token");
    localStorage.removeItem("expirationDate");
    await logoutSupabase(token);
}

async function forgotPassword(email){
    let responseForgot = await recoverPasswordSupabase(email);
    console.log(responseForgot);
}