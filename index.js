let btn = document.querySelector("button");
let num = document.querySelector(".num_not");

const all_read = () => {
   let array_tarjetas = [];
   array_tarjetas.push(document.getElementsByClassName("tarjeta"));

   // Evaluamos si el atributo conicide y lo modificamos
   for (let j = 0; j < array_tarjetas[0].length; j++) {
      if (array_tarjetas[0][j].getAttribute("id") === "activa") {
         array_tarjetas[0][j].setAttribute("id", "");
      }
   }

   let array_svg = [];
   array_svg.push(document.getElementsByTagName("svg"));

   // Evaluamos si contiene el nombre de clase y lo agregamos
   for (let i = 0; i < array_svg[0].length; i++) {
      array_svg[0][i].classList.add("circulo");
   }

   // Para finalizar, cambiamos el texto a 0
   num.innerHTML = "0";
};

btn.addEventListener("click", all_read);
