(function(){
    emailjs.init("johIAxFe9jge6uG6A");
})();

const form = document.querySelector('.form');
console.log(form);

const sendEmail = (templateParams) => {
    emailjs.send('service_qyutuhq', 'template_d87g7ar', templateParams)
    .then(function(response) {//se ejecuta cuando el envío es exitoso
    console.log('SUCCESS!', response.status, response.text);
    Swal.fire({
        title:"¡Muy bien!",
        text:"Tu correo se envió exitosamente",
        icon:"succes",

    })

    
    }, function(error) {//se ejecuta cuando el envío falla
    console.log('FAILED...', error);
    Swal.fire({
        title:"Error",
        text:"Verificar los datos ingresado",
        icon:"error",

    })

    
    });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
        to_name:'Jaziel',
        from_name:e.target[0].value,
        email_of_emiter:e.target[1].value,
        message:e.target[2].value,
    };
    if( e.target[0].value =="" | e.target[1].value=="" | e.target[2].value =="" ){
        Swal.fire({
            title:"Error",
            text:"Los campos no pueden estar vacios",
            icon:"warning",

        })
        
        }else{
        sendEmail( data );
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
    }
    
})

