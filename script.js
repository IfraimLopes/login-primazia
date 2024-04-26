function enviar(){
    var emailinput = window.document.getElementById('mail').value;
    var passinput = window.document.getElementById('password').value;
    var man = window.document.getElementById('Mascu').checked;
    var women = window.document.getElementById('femi').checked;
/*
    var emailinput = "ifraimlopes213@gmail.com"
    var passinput = "12345"
*/
    if (emailinput === '' || passinput === ''  ||  (man === '' && women === '') ){
        alert("Por favor, preencha todos os campos.");
    } else if (  emailinput === "ifraimlopes213@gmail.com" &&  passinput === "12345" ){
        alert('Login feito com sucesso.');
    } else {
        alert('Erro no Login, Verifique o Email e a Senha.')
    }

}