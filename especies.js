let producto = { 
1: "Pescado Fresco Variado",
2: "Abadejo",
3: "Merluza",
4: "Besugo",
5: "Calamar",
6: "Caballa",
7: "Pejerrey",
8: "Bacalao",
9: "Brótola",
10: "Merluza Negra",
11: "Mero",
12: "Pez Palo",
13: "Raya",
14: "Salmón de Mar"
    }
// Obtener la etiqueta select
let select = document.getElementById("mySelect");

// Recorrer el objeto y crear las opciones
for (var key in producto) {
  if (producto.hasOwnProperty(key)) {
    let option = document.createElement("option");
    option.value = key;
    option.text = producto[key];
    select.appendChild(option);
  }
}