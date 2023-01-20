const teclas = document.querySelectorAll(".oitava > div");

function desmarcar(tecla){
    console.log("soltei");
    tecla.classList.remove("selecionada");
}

teclas.forEach(function(tecla){
    
    tecla.onmousedown = function(){
        console.log("cliquei");
        tecla.classList.add("selecionada");
    }
    tecla.onmouseup = () => desmarcar(tecla);
    
    tecla.onmouseleave = () => desmarcar(tecla);
})

 

// let intervalo = null;

// var timer = function () {

//     let count = 0;

//     intervalo = setInterval(() => {
//         console.log(count);
//         count++
//     }, 200)
// }

// var stop = function () {
//     setTimeout(() => {
//         clearInterval(intervalo)
//         console.log('executei');
//     }, 2000)
// }

// timer();
// stop();

