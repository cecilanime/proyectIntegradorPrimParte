let email = 'pepe@gmail.com';
let password = '1234';
 
let emailUser = prompt ('introduce tu email: ');
let passwordUser = prompt ('introduce tu password: ');

if(email == emailUser && password == passwordUser){

    alert('Gracias por elegirnos!!Jugueteria Monococo');
    window.location.href = '../pages/alta.html';
}
else{
    alert('Sus datos son incorrectos!');
    window.location.href = '../index.html';
}
