
let button1 = document.getElementById("button"); // aca buscamos por medio de la ip el boton de html y le damos una variable 
let num = 0;
button1.addEventListener("click", function(){
    num++; // aca lo que hacemos es que automaticamente nos genera un id distinto para la caja de texto y el boton eliminar 
    console.log(num);
    let cuadro = document.createElement("div"); // creamos un elemento div
    cuadro.className = "cuadro_tarea"; // le damos una clase ya creada
    
    let check = document.createElement("input"); // creamos un elemento checkbox
    check.type = "checkbox"; // le damos una clase ya creada
    check.id = "tarea"; // le damos un id
    check.className = "check"; // le damos una clase

    let texto = document.createElement("input");
    texto.type = "text";
    texto.id = "caja_tarea" + num; // aca le damos una id y de paso le asignamos un valor para identificar cada uno en orden numerico
    texto.for = "tarea"; // esto es para que se pueda comunicar con el id del check
    texto.className = "texto";

    let boton_eliminar = document.createElement("input");
    boton_eliminar.type = "button";
    boton_eliminar.id = "boton"+ num;
    boton_eliminar.className = "boton_eliminar"

    let contenedor = document.getElementById("cajaT"); // aca ubico el contenedor para que los elementos se inserten despues de el
    contenedor.appendChild(cuadro); // insertamos el div
    cuadro.appendChild(check); // dentro del divb insertamos el check y los demas elementos
    cuadro.appendChild(texto);
    cuadro.appendChild(boton_eliminar);

    let btn_eliminar = document.getElementById("boton" + num);  // aqui cada boton tiene su propia id y por ende elimina su respectivo div
    btn_eliminar.addEventListener("click", function(){
        cuadro.remove();
    });

    let input = document.getElementById("caja").value;  // captura el texto cuadro A
    document.getElementById("caja_tarea" + num).value = input; // coloca el texto dentro del cuadro B
    document.getElementById("caja").value = ""; // elimina el texto del cuadro A
});

