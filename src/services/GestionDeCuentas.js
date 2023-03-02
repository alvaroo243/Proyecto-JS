import { createData, updateData, getData, fileRequest, getFileRequest  } from "./PeticionesApi";

export {createCuenta, updateCuenta, getCuentaByUid, getAllCuentas};

async function createCuenta(email) {
    let token = localStorage.getItem("access_token");
    let uid = localStorage.getItem("uid");
    try {
        let cuentaResponse = await createData(`Cuenta`, token, {"uid":uid, "email":email}); 
        return true;
    } catch (err) {
        return false;
    }
    
}

async function updateCuenta(profile){

    let access_token = localStorage.getItem('access_token');
    let uid = localStorage.getItem('uid');

    let formImg = new FormData(); //FormData
    formImg.append("avatar", profile.avatar, 'avatarProfile.png');
    
    console.log(formImg);

    let avatarResponse = await fileRequest(`/storage/v1/object/avatars/avatar${uid}.png`,formImg,access_token)

   // console.log(avatarResponse);
    profile.avatar_url = avatarResponse.urlAvatar;
    delete profile.avatar;

    let responseUpdate = await updateData(`profiles?id=eq.${uid}&select=*`,access_token,profile);
   // console.log(responseUpdate);
   // createData('profiles',access_token,profile);

}

async function getCuentaByUid(){

    let access_token = localStorage.getItem('access_token');
    let uid = localStorage.getItem('uid');
    await getData(`Cuenta?uid=eq.${uid}&select=*`,access_token).then((responseGet)=> {
        return responseGet;
    });    
 
}

async function getAllCuentas() {
    let access_token = localStorage.getItem('access_token');
    await getData('Cuenta?select=*', access_token).then((responseGet)=> {
        return responseGet;
    });
}