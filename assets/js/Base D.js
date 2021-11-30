function desencriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_descodificada = atob(palabra);
    document.getElementById("textor").innerHTML = palabra_descodificada;
} 

const open = document.getElementById('open');
const ventana = document.getElementById('ventana');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    ventana.classList.add('show');
});
close.addEventListener('click', () => {
    ventana.classList.remove('show');
});