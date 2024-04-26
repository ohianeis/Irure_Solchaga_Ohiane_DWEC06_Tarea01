import data from './data.js';
//obtiene los datos del objeto en data.js y devuelve los datos o un mensaje de error
export const pedirDatos=()=>{
return new Promise((resolve,reject)=>{
    
        resolve(data);
            
        reject({
            error: "No se encontro la imágen"
        })
   
})
}