// MANIPULAR EL DOM
const saludo = document.getElementById("saludo");
saludo.innerHTML = "Hello World";

document.addEventListener("keyup", evt => {
    switch (evt.key) {
        case "ArrowRight":
            cambiarTextoDivs("Izquierda");
            break;
        case "ArrowUp":
            cambiarTextoDivs("Arriba");
            break;
        case "ArrowLeft":
            cambiarTextoDivs("Derecha");
            break;
        case "ArrowDown":
            cambiarTextoDivs("Abajo");
            break;
    }
});

const cambiarColorCajas = () => {
    const box = document.getElementsByClassName("box");
    console.log(box);
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
    }
}

const cambiarTextoDivs = (text) => {
    const divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        // divs[i].innerHTML = "Tag div"
        divs[i].textContent = text;
    }
}