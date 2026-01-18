const boton = document.getElementById("btnBienvenida");
const tarjetas = document.querySelectorAll(".integrante");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");
const titulo = document.getElementById("modalTitulo");
const texto = document.getElementById("modalTexto");
const redesContainer = document.getElementById("modalRedes");
const lenguajesContainer = document.getElementById("modalLenguajes");


boton.addEventListener("click", () => {
  alert("Bienvenidos al curso");
});


tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener("click", () => {
    titulo.textContent = tarjeta.dataset.nombre;
    texto.textContent = tarjeta.dataset.info;

    titulo.textContent = tarjeta.dataset.nombre || "";
    texto.textContent = tarjeta.dataset.info || "";
    redesContainer.innerHTML = "";
    lenguajesContainer.innerHTML = "";

    if (tarjeta.dataset.facebook) {
      redesContainer.innerHTML += `
        <a href="${tarjeta.dataset.facebook}" target="_blank">Facebook</a>
      `;
    }
    if(tarjeta.dataset.instagram){
      redesContainer.innerHTML += `
        <a href="${tarjeta.dataset.instagram}" target="_blank">Instagram</a>
        `;
    }
 
    if (tarjeta.classList.contains("redireccion")) {
      window.location.href = "https://secreacademica.cs.buap.mx/";
      return;
    }

    if (tarjeta.dataset.lenguajes) {
      const lenguajes = tarjeta.dataset.lenguajes.split(",");

      let lista = "<h4>Lenguajes que domino</h4><ul>";
      lenguajes.forEach(l => {
        lista += `<li>${l.trim()}</li>`;
      });
      lista += "</ul>";

      lenguajesContainer.innerHTML = lista;
    }


    modal.classList.add("show");
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
