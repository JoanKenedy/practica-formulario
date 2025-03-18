const formulario = document.querySelector(".form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const error = document.querySelectorAll(".error");
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  const email = document.querySelector("#email").value;
  const query = document.querySelector('input[name="query1"]:checked');
  const message = document.querySelector("#message").value;
  const aceptado = document.querySelector("input[name='aceptado']:checked");
  const previAlerta = document.querySelector(".alerta");
  const sectionForm = document.querySelector("#section-form");
  previAlerta?.remove();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
  let isValid = true;

  if (nombre === "" || (nombre !== "" && nombre.length < 3)) {
    error[0].textContent = "This field is required";
    isValid = false;
  } else {
    error[0].textContent = "";
  }
  if (apellidos === "" || (apellidos !== "" && apellidos.length < 3)) {
    error[1].textContent = "This field is required";
    isValid = false;
  } else {
    error[1].textContent = "";
  }
  if (email === "") {
    error[2].textContent = "This field is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    error[2].textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    error[2].textContent = "";
  }

  if (!query) {
    error[3].textContent = "Please select a query type";
    isValid = false;
  } else {
    error[3].textContent = "";
  }
  if (message === "") {
    error[4].textContent = "This field is required";
    isValid = false;
  } else {
    error[4].textContent = "";
  }
  if (!aceptado) {
    error[5].textContent =
      "To submit this form, please consent to being contacted";
    isValid = false;
  } else {
    error[5].textContent = "";
  }
  
  const alerta = document.createElement("DIV");
  const bodyModal = document.createElement("DIV");
  bodyModal.textContent = `Message Sent!
  Thanks for completing the form. We'll be in touch soon!`;
  alerta.classList.add(
    "alerta"
  )
  bodyModal.classList.add(
    "body-modal"
  )

  if (isValid) {
     
    sectionForm.appendChild(alerta);
    alerta.appendChild(bodyModal);
    setTimeout(() => {
     alerta.remove()
    }, 3000)
   
    // (Opcional) Limpiar el formulario
    formulario.reset();

    // Limpiar los errores después del éxito
    error.forEach((err) => (err.textContent = ""));
  } else {
    alerta.textContent = ""; // Borrar mensaje de éxito si hay errores
  }
});
