const formulario = document.querySelector('.form');
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
   const nombre = document.querySelector("#nombre").value
   const apellidos = document.querySelector("#apellidos").value
   const email = document.querySelector("#email").value;
   const query = document.querySelector('input[name="query1"]:checked');
   const message = document.querySelector("#message").value;
   const aceptado = document.querySelector("#aceptado").checked;
   const queryVerificar = query ? query.value : 'No se ha seleccionado';
   
   const error = document.querySelectorAll('.error')

   if(nombre === '' || nombre !== '' && nombre.length < 3){
     error[0].textContent = "This field is required";
   }
   
    console.log(nombre)
    console.log(apellidos);
    console.log(email);
    console.log(queryVerificar);
    console.log(message);
    console.log(aceptado);
})


