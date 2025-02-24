document.getElementById('hamburger').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('active');
});


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
    event.preventDefault();

    if (this.from_name.value === '' || this.email_id.value === '' || this.message.value === '') {
        alert('Por favor, rellena todos los campos.');
    }else{

        const formData = {
            from_name: this.from_name.value,
            email_id: `${this.email_id.value}@gmail.com`,
            message: this.message.value
        };

        btn.value = 'Enviando...';
     
        const serviceID = 'default_service';
        const templateID = 'template_ir1ko1k';
     
        emailjs.send(serviceID, templateID, formData)
            .then(() => {
                btn.value = 'Email enviado correctamente!';
                alert('¡El correo electrónico se ha enviado correctamente! Recibirás una respuesta en las próximas horas o días. Por favor, revisa tu bandeja de entrada (y la carpeta de spam, por si acaso). Gracias por contactarnos.');
            }, (err) => {
                btn.value = 'Ocurrio un error!';
        });

    }
    
});