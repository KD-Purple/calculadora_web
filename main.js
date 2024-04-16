document.addEventListener("DOMContentLoaded", function () {
  const pantalla = document.querySelector(".pantalla");
  const botones = document.querySelectorAll(".btn");
  let mensajeError = "Error!";

  function cambiarSigno(numero) {
    if (numero === 0) return 0; // Si el número es 0, no hay necesidad de cambiar el signo
    return -numero;
  }

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const btn = boton.textContent;

      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === mensajeError || pantalla.textContent === "NaN") {
          pantalla.textContent = "0";
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      }

      if(boton.id === "igual"){
        mensajeError = "Error!";
        try {
        pantalla.textContent = eval(pantalla.textContent);
        } catch {
          pantalla.textContent = mensajeError;
        }
        return;
      }

      if(boton.id === "signo") {
        pantalla.textContent = cambiarSigno(Number(pantalla.textContent));
        return;
      }

      if (pantalla.textContent === "0" || pantalla.textContent === mensajeError || pantalla.textContent === "NaN") {
        pantalla.textContent = btn;
      } else {
        pantalla.textContent += btn;
      }

    });
  });
});
