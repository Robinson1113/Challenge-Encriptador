//-----------seleccion de elementos -----------//

const btnEncriptar = document.querySelector(".boton__encriptar");
const txtEncriptar =document.querySelector(".texto__encriptar")
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".texto__desecriptado")
const btnCopiar = document.querySelector(".boton__copiar");
const btnDesencriptar = document.querySelector(".boton__desencriptar")

//----------Boton de encriptar--------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(txt);

    if(texto == ""){
        
        aviso.style.fontWeight = "800";
        aviso.textContent = "Apenas letras minúsculas y sin acento.";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== txt){
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
         
        etTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en miniscula.";
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        
    }
    
});

//-------------------boton de Desecriptar--------------//


btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(txt);

    if(texto == ""){
        
        aviso.style.fontWeight = "800";
        aviso.textContent = "Apenas letras minúsculas y sin acento.";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== txt){
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
         
        etTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en miniscula.";
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        
    }
    
});

//--------Boton de Copiar------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = document.querySelector(".evaluar");
    copiar.select();
    document.execCommand("copy");
});
