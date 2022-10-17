const textoIngresado = document.querySelector(".texto-ingresado");
const textoResultado = document.querySelector(".texto-resultado");
const botonCopiar = document.querySelector(".btncopiar");
const contenedorMensaje = document.querySelector(".contenedor-mensaje");
const overlayMensajevacio = document.querySelector(".texto-vacio");
const overlayMensacopiado = document.querySelector(".texto-copiado");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

//Llama a la funcion encriptar, por medio del btn
function btnEncriptar() {

    if (textoIngresado.value == "") {

        overlayMensajevacio.classList.add("active");


    } else {

        //Creamos una variable donde alamacenamos el valor de la funcion encriptar
        const resultadoTextoEncriptado = encriptar(textoIngresado.value)

        //Enviamos el resultado a la otra texarea
        textoResultado.value = resultadoTextoEncriptado;

        textoResultado.style.backgroundImage = "none";

        textoIngresado.value = "";

        botonCopiar.classList.add("active");

        contenedorMensaje.classList.add("hidden");
    }

}

//Creamos la funcion que encripta el texto
function encriptar(textoEncriptado) {
    //Uso de matriz: Es un array (lista).En este caso una lista ["e","enter"] dentro de otra lista nombreLis[["e","enter"]] (lista);  
    let arrayEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    //Convertir el texto ingresado en minuscula
    textoEncriptado = textoEncriptado.toLowerCase();

    //Variable i de indice, condicion, incremental
    for (let i = 0; i < arrayEncriptacion.length; i++) {

        //Usamos el metodo includes, para validar si en el indice (i) se incluye alguna letra del array en la posicion 0
        if (textoEncriptado.includes(arrayEncriptacion[i][0])) {

            //Usamos el metodo replaceAll, ya que replace solo cambiaria la primera letra. 
            //Cambia la letra de la posicion 0  por las letras de la posicion 1, del mismo indice
            textoEncriptado = textoEncriptado.replaceAll(arrayEncriptacion[i][0], arrayEncriptacion[i][1]);
        }
    }
    return textoEncriptado;
}

//Llama a la funcion desencirptar
function btnDesencirptar() {

    if (textoIngresado.value == "") {

        overlayMensajevacio.classList.add("active");


    } else {

        const resultadoTextoDesencriptado = desencriptar(textoIngresado.value);

        textoResultado.value = resultadoTextoDesencriptado

        textoResultado.style.backgroundImage = "none";

        botonCopiar.classList.add("active");

        textoIngresado.value = ""

        contenedorMensaje.classList.add("hidden")
    }
}


//Creamos la funcion desencriptar el texto
function desencriptar(textoDesencriptado) {

    let arrayDesencriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < arrayDesencriptacion.length; i++) {

        if (textoDesencriptado.includes(arrayDesencriptacion[i][1])) {

            textoDesencriptado = textoDesencriptado.replaceAll(arrayDesencriptacion[i][1], arrayDesencriptacion[i][0]);

        }
    }
    return textoDesencriptado

}

//Llama la funcion copiar
function btnCopiar() {

    const textoCopiado = copiar(textoResultado.value);

    textoResultado.style.backgroundImage = "url(pictures/Muñeco.png)";

    contenedorMensaje.classList.remove("hidden");

    textoIngresado.focus();

    overlayMensacopiado.classList.add("active");

}


//Creamos la funcion copiar
function copiar() {

    //Selecciona todo el texto del texare o input
    textoResultado.select()

    //Copia el texto en el clipboard
    navigator.clipboard.writeText(textoResultado.value);

    botonCopiar.classList.remove("active");

    textoResultado.value = "";
}

function btnCerrar() {
    overlayMensajevacio.classList.remove("active");
    overlayMensacopiado.classList.remove("active")
    textoIngresado.focus();

}
