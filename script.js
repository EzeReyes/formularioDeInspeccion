
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