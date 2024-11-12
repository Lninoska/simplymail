window.onload = function () {
    document.getElementById('email-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const para = document.getElementById('to').value;
        const titulo = document.getElementById('titulo').value;
        const mensaje = document.getElementById('mensaje').value;
        const de = document.getElementById('from').value;

        const correo = document.getElementById('correo1').value;
        const correo2 = document.getElementById('correo2').value;
        const correo3 = document.getElementById('correo3').value;
        const correo4 = document.getElementById('correo4').value;



        console.log('Para', para);
        console.log('Titulo', titulo);
        console.log('Mensaje', mensaje);
        console.log('De', de);

        console.log('Cc', correo);
        console.log('Cc', correo2);
        console.log('cc', correo3);
        console.log('cc', correo4);

    })
}