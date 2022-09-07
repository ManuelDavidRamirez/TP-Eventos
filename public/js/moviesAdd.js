window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.getElementById("titulo");
    let secret = ["s", "e", "c", "r", "e", "t"];
    let estadoSecreto = 0
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", ({target}) => {
        target.classList.toggle("fondoRojo");
    })

    inputTitulo.addEventListener("keyup", (e) => {
        if (e.key === secret[i]) {
            estadoSecreto++
            if (e.key === secret[5]) {
                alert ("SECRETO MAGICO")
            }
        } else {
            estadoSecreto = 0
            inputTitulo.value = null
        }
    })
}