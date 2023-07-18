
let texto = 0; // Agregar contenido al span
let contenedor = document.getElementById("miElemento");
let desea = document.querySelector(".desea");
let miElemento2 = document.getElementById("miElemento2");



a.addEventListener("click", function(event) {
    event.preventDefault();
    c.style.display="block";
    miElemento2.style.display="none";
        sumar();
    let nuevoDiv = document.createElement("div");
    let spanElement = document.createElement("span");
    let nuevoInput1 = document.createElement("input");
    let nuevoInput2 = document.createElement("input");
    let nuevoInput3 = document.createElement("input");
    nuevoDiv.appendChild(spanElement);
    nuevoDiv.appendChild(nuevoInput1);
    nuevoDiv.appendChild(nuevoInput2);
    nuevoDiv.appendChild(nuevoInput3);
    nuevoDiv.classList.add("btnBuscar");
    spanElement.textContent = `${texto}`; // Agregar contenido al span
    nuevoInput1.type = "date";
    nuevoInput2.type = "text";
    nuevoInput3.type = "text";
    nuevoInput1.placeholder = "Ingrese fecha";
    nuevoInput2.placeholder = "Ingrese nombre del buque";
    nuevoInput3.placeholder = "Ingrese matrícula del buque";
    nuevoInput1.maxLength = "12";
    nuevoInput2.maxLength = "12";
    nuevoInput3.maxLength = "12";
    contenedor.appendChild(nuevoDiv);
    nuevoDiv.style.display="flex";
    nuevoDiv.style.alignItems="center";
    nuevoDiv.style.justifyContent="space-around";
    nuevoDiv.style.margin="1rem";
    nuevoDiv.style.gap="10px";

})

b.addEventListener("click", function(event) {
    event.preventDefault();
    contenedor.innerHTML=" ";
    miElemento2.style.display="block";
    c.style.display="block";
    miElemento2.innerHTML = "<p>Sin movimiento</p>";
    texto=0;    })

// function validar () {
//     a === true ? miElemento2.style.display="none": miElemento2.style.display="block";
//     b === true ? contenedor.parentNode.removeChild(nuevoDiv) : null;
// }

c.addEventListener("click", function(event) {
    event.preventDefault();
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    desea.style.display="none";
    console.log("haz hecho click en C")
})

function sumar () {
    texto++;
}

crear.addEventListener("click", function(event) {
    event.preventDefault();
    crearFirma()
})


function crearFirma() {
    let container = document.getElementById("container");
    container.style.display="grid";
    container.style.width="25rem";
    container.style.textWrap="nowrap";
    container.style.gridTemplateColumns="repeat(2, 1fr)";

    // Crear contenedor div
    let div = document.createElement("div");
    div.style.margin="5rem 0 10px 10px";
    div.style.display="flex";
    div.style.flexDirection="column";
    // Crear campo de texto
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Ingrese Nombre y Apellido";
    input.maxLength = 30;
    input.style.textAlign="center";
    input.style.width="15rem";

    // Crear etiqueta select
    let select = document.createElement("select");
    select.style.textAlign="center";

    // Crear opciones para el select
    let opciones = [
        "JERARQUIA",
        "PREFECTO PRINCIPAL",
        "PREFECTO",
        "SUBPREFECTO",
        "OFICIAL PRINCIPAL",
        "OFICIAL AUXILIAR",
        "OFICIAL AYUDANTE"
    ];

    for (let i = 0; i < opciones.length; i++) {
        let option = document.createElement("option");
        option.value = opciones[i];
        option.text = opciones[i];
        select.appendChild(option);
    }

    // Agregar los elementos al contenedor
    div.appendChild(input);
    div.appendChild(select);

    container.appendChild(div);
}

finalizarFirma.addEventListener("click", function(event) {
    event.preventDefault();
    crear.style.display="none";
    finalizarFirma.style.display="none";
})
