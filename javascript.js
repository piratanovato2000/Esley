
const iniciar = document.getElementById("iniciarr")
const calculador = document.getElementById("calculador")


iniciar.addEventListener('click', function(){
    iniciar.style.display = 'none';

    calculador.classList.remove('ocultar');
});



const visual = document.getElementById("visual")


function agregar(valor){
    if (valor === '='){
        calcular();
    }else{
        visual.value += valor
    }
}
function limpiar(){
    visual.value = ''
}
function calcular(){
    try{
        visual.value = eval(visual.value)
    }catch (error){
        visual.value = "ERROR";
        setTimeout (() => {
            limpiar()},
            1500);
        }
}
