var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();

    var email = document.querySelector('#newsInputEmail')
    


// Duas condições para saber se o email foi enviado

// sE
// if (true && true){
    //     console.log('Verdade')
// }

// OU
// if (true || true){
//     console.log('Verdade')
// }


if (email.value == "" || email.value.length == 0){
    mensagem.textContent = 'Digite um e-mail válido'


}

else if(email.value.indexOf('@')-1{
    mensagem.textContent =  'O email informado é inválido'
    return 
}

    mensagem.textContent = ' Seu E-mail ' + email.value + ' foi cadastrado com sucesso!! xD ';


})

// O indexOff busca a posição correspondente ao caractere @
