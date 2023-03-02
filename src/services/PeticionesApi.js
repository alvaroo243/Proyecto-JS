export {loginSupabase, fileRequest, getFileRequest, signUpSupabase , logoutSupabase, recoverPasswordSupabase, getData, updateData, createData};

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvaWt1YWhtdGVycnlzc2hjd3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMDc5NjgsImV4cCI6MTk4MzU4Mzk2OH0.BIdzUgQGNdQx1s7Dn9IIRnHOJj_bALoBY7p-gQYh3K8"
const URL_BASE = "https://soikuahmterrysshcwwv.supabase.co";
const headers = {
    "apiKey": SUPABASE_KEY,
    "Content-Type": "application/json"
}; 

async function supaRequest(url,method,headers,body){
    let response = await fetch(url,{ method, headers, body: JSON.stringify(body)});
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){
            return await response.json();
        }
        return {};
    }
    else{
        return Promise.reject(await response.json());
    }
}

async function fileRequest(url,body,token){
    const headersFile = {
        "apiKey": SUPABASE_KEY,
        "Authorization" :`Bearer ${token}`,
        "x-upsert": true 
    }; 
    let response = await fetch(`${URL_BASE}${url}`,{
        method: 'POST',
        headers: headersFile,
        body
    });
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){
            let datos = await response.json();
            datos.urlAvatar = `${URL_BASE}${url}`;
            return datos;
        }
        return {};
    }
    else{
        return Promise.reject(await response.json());
    }
}

async function getFileRequest(url,token){
    const headersFile = {
        "apiKey": SUPABASE_KEY,
        "Authorization" :`Bearer ${token}`,
    }; 
    let response = await fetch(`${url}`,{
        method: 'GET',
        headers: headersFile,
        
    });
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){
            let datos = await response.blob();
            return datos;
        }
        return {};
    }
    else{
        return Promise.reject(await response.json());
    }
}

async function loginSupabase(email,password){ 
    let url = `${URL_BASE}/auth/v1/token?grant_type=password`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function signUpSupabase(email,password){ 
    let url = `${URL_BASE}/auth/v1/signup`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function logoutSupabase(token){ 
    let url = `${URL_BASE}/auth/v1/logout`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token}; // Destructuring
    let data = await supaRequest(url,'post',headersAux,{});
    return data;
}

async function recoverPasswordSupabase(email){
    let url = `${URL_BASE}/auth/v1/recover`;
    let headersAux = {...headers}; // Destructuring
    let data = await supaRequest(url,'post',headersAux,{"email":email});
    return data;
}

async function getData(URI,token){
    let url = `${URL_BASE}/rest/v1/${URI}`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token}; // Destructuring
    let data = await supaRequest(url,'get',headersAux); // Las peticiones get no me funcionan y no se porque, pienso que las hago bien
    return data;
}

async function updateData(URI,token,data){
    let url = `${URL_BASE}/rest/v1/${URI}`;
    let headersAux = {...headers, // Destructuring
        "Authorization" :"Bearer "+token,
        "Prefer" : "return=representation"
    };
    let response = await supaRequest(url,'PATCH',headersAux,data);
    return response;
}

async function createData(URI,token,data){
    let url = `${URL_BASE}/rest/v1/${URI}`;
    let headersAux = {...headers, // Desstucturing
        "Authorization" :"Bearer "+token,
        "Prefer" : "return=minimal"
    };
    let response = await supaRequest(url,'post',headersAux,data);
    return response;
}

